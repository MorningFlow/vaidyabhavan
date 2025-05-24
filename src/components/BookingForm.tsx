import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { TextField, TextAreaField, SelectField } from './form/FormFields';
import { Loader2 } from 'lucide-react';
import { 
  bookingSchema, 
  BookingFormValues,
  serviceOptions,
  doctorOptions
} from '../utils/bookingValidation';
import {
  getDoctorEmail,
  sendEmail,
  createCalendarEvent
} from '../utils/bookingHelpers';

const BookingForm = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const selectedDoctor = searchParams.get('doctor') || '';
  const selectedService = searchParams.get('service') || '';
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: selectedService,
      doctor: selectedDoctor,
      dateTime: "",
      message: "",
    },
  });
  
  // Update form when URL params change
  useEffect(() => {
    if (selectedDoctor) {
      form.setValue('doctor', selectedDoctor);
    }
    if (selectedService) {
      form.setValue('service', selectedService);
    }
  }, [selectedDoctor, selectedService, form]);

  async function onSubmit(data: BookingFormValues) {
    console.log(data);
    setIsSubmitting(true);
    
    try {
      // Format the date for better readability
      const appointmentDate = new Date(data.dateTime);
      const formattedDate = appointmentDate.toLocaleString();
      
      // Prepare the data for Google Sheets
      const formData = {
        name: data.name,
        phone: data.phone,
        email: data.email || '',
        treatment: data.service,
        doctor: data.doctor,
        datetime: formattedDate,
        message: data.message || 'No message provided'
      };

      // Send data to Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbzVEKp7uS2wSGAQkBmyrQ8cvRk76UiP_wiGYXIDdppx6UmchnuN9uZHHAyE41oXadaOJw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // This is required for Google Apps Script
      });

      // Get the doctor's email
      const doctorEmail = getDoctorEmail(data.doctor);
      
      // Prepare email content
      const emailContent = `
        New Booking Request:
        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Service: ${data.service}
        Doctor: ${data.doctor}
        Date & Time: ${formattedDate}
        Message: ${data.message || 'No message provided'}
      `;
      
      // Send notification email
      await sendEmail(doctorEmail, 'New Booking Request', emailContent, data);
      
      // Create Google Calendar event
      await createCalendarEvent(doctorEmail, data);
      
      toast({
        title: "Appointment Request Sent",
        description: "We'll contact you shortly to confirm your booking.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error processing booking:", error);
      toast({
        title: "Error",
        description: "There was a problem processing your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <TextField 
          form={form} 
          name="name" 
          label="Name" 
          placeholder="Your full name" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField 
            form={form} 
            name="phone" 
            label="Phone" 
            placeholder="Your phone number" 
          />
          
          <TextField 
            form={form} 
            name="email" 
            label="Email (Optional)" 
            placeholder="Your email address"
            type="email"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField 
            form={form} 
            name="service" 
            label="Preferred Treatment" 
            placeholder="Select a treatment"
            options={serviceOptions}
          />
          
          <SelectField 
            form={form} 
            name="doctor" 
            label="Preferred Doctor" 
            placeholder="Select a doctor"
            options={doctorOptions}
          />
        </div>
        
        <TextField 
          form={form} 
          name="dateTime" 
          label="Preferred Date & Time" 
          placeholder="Select date and time"
          type="datetime-local"
          description="We're open from 9:00 AM to 6:00 PM every day"
        />
        
        <TextAreaField 
          form={form} 
          name="message" 
          label="Message (Optional)" 
          placeholder="Tell us about your health concerns or any questions you may have"
        />
        
        <Button 
          type="submit" 
          className="w-full bg-vaidya-primary hover:bg-vaidya-secondary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Submit Booking Request'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
