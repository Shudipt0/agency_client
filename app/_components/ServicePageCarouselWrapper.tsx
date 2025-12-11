'use client';
import dynamic from 'next/dynamic';

// Dynamically load the actual carousel component with SSR disabled
const ServicePageCarousel = dynamic(() => import("../_components/ServicePageCarousel"), {
  ssr: false,
});

interface ServicePageCarouselWrapperProps {
  services: any; // Replace 'any' with the actual type if known, e.g., Service[]
}

const ServicePageCarouselWrapper: React.FC<ServicePageCarouselWrapperProps> = ({ services }) => {
  return (
    <div>
        <ServicePageCarousel services={services} />
      
    </div>
  )
}

export default ServicePageCarouselWrapper
