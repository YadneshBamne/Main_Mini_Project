import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Oswald } from "next/font/google";
const Nerko = Oswald({
  subsets: ["cyrillic"],
  weight: ["400"],
});
 
const page = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Drawer>
        
          <div className="grid grid-rows-2 items-center justify-center flex">
          <Image
          src="/pg1.png"
          width={400}
          height={400}
          className="border-gray-800 border-4"
          />
            <div className="text-3xl  text-stone-950 ">Blue Star PGs</div>
            <div className="mb-5">Manpada Thane</div>
            <div className="text-3xl mb-6">
              <span className="text-black-500">Rs.5000</span> per month
            </div>
            <div></div>
            <div className="flex">
            <div className=" justify-center shadow-lg h-10 w-10 items-center">
          <DrawerTrigger>
            <div>Shortlist</div>
          </DrawerTrigger>
        </div>
            </div>
          </div>
        

        

        <DrawerContent>
          <DrawerHeader classname="flex justify-center text-center">
            <div className="flex justify-center">
              <DrawerTitle>You Selected</DrawerTitle>
            </div>

            <DrawerDescription>
              <div className=" grid grid-rows-2 ">
                <div className={Nerko.className}>
                  <span className="text-4xl flex justify-center mt-10">
                    PG Selected
                  </span>
                </div>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <a
              href="./Thane"
              className="flex justify-center shadow-lg mr-auto ml-auto h-10 w-10 items-center"
            >
              <Button variant="outline">
                <div>Proceed</div>
              </Button>
            </a>
            <DrawerClose>
              <Button variant="outline">
                <div className="min-w-screen">Cancel</div>
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default page;
