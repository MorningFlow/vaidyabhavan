import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }).optional().or(z.literal('')),
  service: z.string({
    required_error: "Please select a treatment.",
  }),
  doctor: z.string({
    required_error: "Please select a doctor.",
  }),
  dateTime: z.string({
    required_error: "Please select a preferred date and time.",
  }),
  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

// Updated service options to match those in ServicesPage
export const serviceOptions = [
  { value: 'panchakarma', label: 'Panchakarma Therapies' },
  { value: 'cupping-hijama', label: 'Cupping & Hijama Center' },
  { value: 'steam-massage', label: 'Steam Bath & Oil Massage' },
  { value: 'womens-clinic', label: 'Women\'s Clinic' },
  { value: 'skin-clinic', label: 'Skin Clinic' },
  { value: 'spine-clinic', label: 'Spine Clinic' },
  { value: 'lifestyle-disorders', label: 'Lifestyle Disorders' },
  { value: 'counseling', label: 'Counseling & Psychotherapy' }
];

export const doctorOptions = [
  { value: 'dr-rahila', label: 'Dr. Rahila Thasneem K' },
  { value: 'dr-muneer', label: 'Dr. Muhammed Muneer E' },
  { value: 'dr-anil', label: 'Dr. Anil Kumar' },
  { value: 'dr-hakeem', label: 'Hakeem A Raheem' }
];
