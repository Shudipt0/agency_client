'use client'

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type TeamMember = {
  id: string | number;
  name: string;
  profession: string;
  image: string;
  // Add other fields if needed
};

interface AboutPageCarouselProps {
  teamMembers: TeamMember[];
}

export function AboutPageCarousel({ teamMembers }: AboutPageCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {teamMembers.map((member: TeamMember) => (
          <CarouselItem
            key={member.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="w-[160px] flex flex-col gap-4 ">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={235}
                className="w-full h-[235px] bg-slate-400 rounded-sm "
              />
              <h2 className="text-[22px] font-bold ">{member.name}</h2>
              <p className="text-[18px] text-[#0E0E2C]/60 dark:text-white/80 ">
                {member.profession}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
