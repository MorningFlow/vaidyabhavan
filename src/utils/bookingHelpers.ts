
export const getDoctorEmail = (doctorId: string): string => {
  if (doctorId === 'dr-anil') return 'rosancva@gmail.com';
  // Add other doctors' emails if needed
  return 'info@Vaidyabhavan.com'; // Default email
};

export const sendEmail = async (to: string, subject: string, body: string, formData: any) => {
  // In a real implementation, this would send data to your backend
  // For demonstration, we'll log what would be sent
  console.log(`Sending email to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
  
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent successfully");
      resolve(true);
    }, 1000);
  });
};

export const createCalendarEvent = async (doctorEmail: string, data: any) => {
  // This function would normally integrate with the Google Calendar API
  // For now, it's just a placeholder to simulate the functionality
  const appointmentDate = new Date(data.dateTime);
  const formattedDate = appointmentDate.toLocaleString();
  
  console.log(`Creating calendar event for ${doctorEmail}`);
  console.log(`Event: Appointment with ${data.name} at ${formattedDate}`);
  
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Calendar event created successfully");
      resolve(true);
    }, 1000);
  });
};
