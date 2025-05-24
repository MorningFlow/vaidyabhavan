
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailModalProps {
  service: {
    title: string;
    fullDescription: string;
    benefits?: string[];
    procedures?: string[];
    image?: string;
    id?: string;
  };
  onClose: () => void;
}

const ServiceDetailModal = ({ service, onClose }: ServiceDetailModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden max-h-[85vh] overflow-y-auto">
        {service.image && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl text-vaidya-primary font-semibold mb-2">{service.title}</DialogTitle>
            <DialogDescription className="text-base text-gray-700 mt-2">
              {service.fullDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            {service.benefits && service.benefits.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-vaidya-primary mb-2">Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.procedures && service.procedures.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-vaidya-primary mb-2">Treatment Procedure</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {service.procedures.map((procedure, index) => (
                    <li key={index} className="text-gray-600">{procedure}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <DialogFooter className="mt-8 flex justify-center sm:justify-end gap-3">
            <Button 
              asChild
              className="bg-vaidya-secondary text-white hover:bg-vaidya-primary transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Link to={`/contact?service=${service.id || ''}`}>
                <Calendar size={16} />
                Book Now
              </Link>
            </Button>
            <Button 
              onClick={onClose} 
              className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <X size={16} />
              Close
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
