// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogosProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const ClientCompany = ({
  heading = "We work with",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro-wordmark.svg",
      className: "h-5 md:h-7 w-20  md:w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://shadcnblocks.com/images/block/logos/figma-wordmark.svg",
      className: "h-5 md:h-7 w-20  md:w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://shadcnblocks.com/images/block/logos/nextjs-wordmark.svg",
      className: "h-5 md:h-7 w-20  md:w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://shadcnblocks.com/images/block/logos/react-wordmark.svg",
      className: "h-5 md:h-7 w-20  md:w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image:
        "https://shadcnblocks.com/images/block/logos/shadcn-ui-wordmark.svg",
      className: "h-5 md:h-7 w-20  md:w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image:
        "https://shadcnblocks.com/images/block/logos/supabase-wordmark.svg",
      className: "h-5 md:h-7 w-20  md:w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image:
        "https://shadcnblocks.com/images/block/logos/tailwind-wordmark.svg",
      className: "h-3 md:h-5 w-20  md:w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://shadcnblocks.com/images/block/logos/vercel-wordmark.svg",
      className: "h-3 md:h-5 w-20  md:w-auto",
    },
  ],
}: LogosProps) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container flex flex-col justify-center text-start">
        <h1 className="mb-8 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="w-full pt-4 md:pt-8 lg:pt-10 ">
        <div className="relative mx-auto flex items-center justify-center w-full lg:max-w-7xl dark:bg-gray-100 py-2">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { ClientCompany };
