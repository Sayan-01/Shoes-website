import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HeroBanner = () => {
  return (
    <div className=" relative text-white text-[20px] w-full max-w-[1360px] mx-auto ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className=" md:mx-10">
              <img
                className="w-full md:aspect-auto object-fit "
                src="/slide-1.png"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" md:mx-10">
              <img
                className=" w-full md:aspect-auto object-fit "
                src="/slide-2.png"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" md:mx-10">
              <img
                className="w-full md:aspect-auto object-fit "
                src="/slide-3.png"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroBanner;
