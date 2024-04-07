import React from "react";
import Image from "next/image"
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
              <Image
                width={5000}
                height={5000}
                alt=" "
                className=" w-full md:aspect-auto object-fit "
                src="/slide-1.png"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" md:mx-10">
              <Image
                width={5000}
                height={5000}
                alt=" "
                className=" w-full md:aspect-auto object-fit "
                src="/slide-2.png"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" md:mx-10">
              <Image
                width={5000}
                height={5000}
                alt=" "
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
