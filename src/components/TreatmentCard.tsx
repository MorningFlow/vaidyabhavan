
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Info } from "lucide-react";

interface TreatmentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  id?: string;
  details?: string[];
  onViewDetails?: () => void;
}

const TreatmentCard = ({ title, description, imageSrc, id, details, onViewDetails }: TreatmentCardProps) => {
  // Changed default state to true so sections are expanded by default
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col" data-aos="fade-up">
      <div className="aspect-[16/9] w-full overflow-hidden max-h-36">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl text-vaidya-primary animate-fade-in">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <CardDescription className="text-gray-600 animate-fade-in" style={{ animationDelay: '100ms' }}>
          {description}
        </CardDescription>
        
        {details && details.length > 0 && (
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="mt-4 space-y-2"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center p-0 h-auto text-vaidya-primary hover:text-vaidya-secondary"
              >
                <span className="mr-1">{isOpen ? "Show less" : "Learn more"}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 text-sm pt-2 animate-accordion-down">
              <ul className="list-disc pl-4 space-y-1">
                {details.map((detail, index) => (
                  <li key={index} className="text-gray-600 animate-fade-in" style={{ animationDelay: `${(index + 1) * 50}ms` }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
      <CardFooter className="p-4">
        <Button 
          onClick={onViewDetails} 
          className="w-full bg-vaidya-primary text-white hover:bg-vaidya-secondary transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <Info size={16} />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TreatmentCard;
