import React from "react";
import Image from "next/image";
import { Oswald, Dancing_Script, Roboto_Slab } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const Nerko = Oswald({
  subsets: ["cyrillic"],
  weight: ["400"],
});

const page = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="text-center text-3xl py-12 text-white"><span className={Nerko.className}>SELECT YOUR CITY</span></div>
      
     <div className="flex justify-center h-auto min-w-screen">

      <Carousel className="bg-gray-800 text-white ml-auto mr-auto text-center flex items-center h-96 w-96 ">
        <div className={Nerko.className}>
        <CarouselContent className="text-center w-full  ">
          <CarouselItem className="text-5xl"><a href="./Thane">Thane</a></CarouselItem>
          <CarouselItem className="text-5xl"><a href="./Malad">Malad</a></CarouselItem>
          <CarouselItem className="text-5xl"><a href="./Kalyan">Kalyan</a></CarouselItem>
          <CarouselItem className="text-5xl"><a href="./Powai">Powai</a></CarouselItem>
          <CarouselItem className="text-5xl"><a href="./Vasai">Vasai</a></CarouselItem>
          <CarouselItem className="text-5xl"><a href="./Mira-Road">Mira-Road</a></CarouselItem>
        </CarouselContent>
        </div>
        <CarouselPrevious  />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  );
};

export default page;
