import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactpageAccour = () => {
  return (
    <div className=" w-full h-full py-20 md:py-0 lg:h-[660px] flex flex-col lg:flex-row justify-between items-center  ">
      {/* left site */}
      <div className="lg:w-[480px] space-y-4">
        <h3 className="text-[16px] lg:text-[22px] text-blue-500 dark:text-white font-bold">
          FAQ
        </h3>
        <h1 className="text-[40px] text-black dark:text-white font-bold leading-tight">
          Here are Some Answer For Frequntly asked Questions
        </h1>
        <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60 dark:text-white/60">
          We got alot of Message With the same Questions so here are some fast
          answer for populare Question
        </p>
      </div>
      {/* right site */}
      <div className="lg:w-[540px] ">
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1" className="dark:border dark:border-white/20">
            <AccordionTrigger  >Do You offer Software Development</AccordionTrigger>
            <AccordionContent className=" dark:text-white/60 ">
              Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="dark:border dark:border-white/20">
            <AccordionTrigger>Do you offer Social Media Marketing</AccordionTrigger>
            <AccordionContent className=" dark:text-white/60 ">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="dark:border dark:border-white/20">
            <AccordionTrigger>Do you Offer pack Services</AccordionTrigger>
            <AccordionContent className=" dark:text-white/60 ">
              Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="dark:border dark:border-white/20">
            <AccordionTrigger>How long it take to realise a project</AccordionTrigger>
            <AccordionContent className=" dark:text-white/60 ">
              Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ContactpageAccour;
