import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  qualifications: string;
  position: string;
  imageSrc: string;
  description?: string;
  phoneNumber?: string;
  email?: string;
  id?: string;
}

const DoctorCard = ({ name, qualifications, position, imageSrc, description, phoneNumber, email, id }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full" data-aos="fade-up">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-vaidya-accent/50 border-4 border-white">
        <img 
          src={imageSrc} 
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
            id === 'dr-rahila' ? 'object-[center_30%]' : 'object-center'
          }`}
        />
      </div>
      <CardHeader className="p-3">
        <CardTitle className="text-lg text-vaidya-primary animate-fade-in">{name}</CardTitle>
        <CardDescription className="text-sm font-medium animate-fade-in" style={{ animationDelay: '100ms' }}>{qualifications}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1 flex-grow p-3 pt-0">
        <p className="font-medium text-gray-700 text-sm animate-fade-in" style={{ animationDelay: '150ms' }}>{position}</p>
        {description && (
          <p className="text-gray-600 text-xs animate-fade-in" style={{ animationDelay: '200ms' }}>{description}</p>
        )}
        {email && (
          <div className="flex items-center mt-1 text-vaidya-primary text-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Mail className="h-3 w-3 mr-1" />
            <span>{email}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto p-3">
        <Button asChild className="w-full bg-vaidya-primary hover:bg-vaidya-secondary transition-all hover:scale-105 active:scale-95 text-white text-sm h-9">
          <Link to={`/contact?doctor=${id || ''}`}>Book Consultation</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
