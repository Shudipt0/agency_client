"use client";

import dynamic from "next/dynamic";

// Dynamically load the actual carousel component with SSR disabled
const TestCarousel = dynamic(() => import("./TestCarousel"), {
  ssr: false,
});

const TestimonialCarouselWrapper = ({ experts }: any) => {
  return (
    <div>
      <TestCarousel experts={experts} />
    </div>
  );
};

export default TestimonialCarouselWrapper;
