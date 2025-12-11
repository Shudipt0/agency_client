import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroBanner from '@/app/images/heroBanner.jpg'
import Image from "next/image";

interface HeroProps {
  welcoming?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const HeroBannner = ({
  welcoming = "Hello,",
  heading = "We Help People To Bring Their Ideas Alive ",
  description = "A talented team to help you in your journey on creating useful and easy to use product",
  buttons = {
    primary: {
      text: "Let's Talk",
      url: "/contact",
    },
    secondary: {
      text: "Check our Services",
      url: "/services",
    },
  },
}: HeroProps) => {
  return (
    <section className="relative">
      <div className="  container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ">
        <div className="mx-auto flex flex-col items-start text-start md:ml-auto lg:max-w-3xl  lg:text-left">
          <h4 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold ">
            {welcoming}
          </h4>
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl xl:text-7xl">
            {heading}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>

          <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-4">
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <button className="px-3 py-1 text-white font-semibold bg-blue-500 rounded">
                  <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
                </button>
              )}
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.secondary && (
                <Button asChild variant="outline">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowDownRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            src={heroBanner}
            alt="Hero Banner"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export { HeroBannner };
