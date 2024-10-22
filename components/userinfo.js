"use client";

import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react";

import Typewriter from "typewriter-effect";
import Link from "next/link";
import Head from "next/head";
import { Oswald, Dancing_Script, Roboto_Slab } from "next/font/google";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const Nerko = Oswald({
  subsets: ["cyrillic"],
  weight: ["400"],
});

const DS = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const RS = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen bg-white my-96">
      <div className="min-h-screen shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 ">
        <div className="text-black ">
          <span className="text-black">
            <h1 className="text-7xl">Welcome </h1>
          </span>{" "}
          <span className="font-bold text-black text-6xl">
            {session?.user?.name}
          </span>
        </div>
        <div className="text-black">
          <span className="text-white w-full flex">Email:</span>{" "}
          <span className="font-bold text-black">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500  text-black font-bold px-6 py-2 flex justify-center rounded-full w-28 "
        >
          Log Out
        </button>

        <main className={Nerko.className}>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            ></link>
            <link
              href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
              rel="stylesheet"
            ></link>
            Outfit
          </Head>
          <div className="min-h-screen bg-white text-black">
            <div className="flex grid-cols-2 justify-center"></div>

            <div className=" min-h-screen grid grid-cols-2 text-center items-center gap-60">
              <div class="left text-7xl">
                <div className="ml-10">
                  <span className={RS.className}>HOLMES</span>
                </div>
                <div className="text-2xl ml-10">
                  <span className={DS.className}>
                    PG Accomodation - Safe and Secure Solution
                  </span>
                </div>
              </div>
              <div class="right" className="">
                {/* <Slider loop={true}
             autoPlay={true}
              autoPlayInterval={4000} showArrowControls={false} showDotControls={false} imageList={images} width={600} height={300} className="rounded-3xl" /> */}
                <img src="office-building.png" className="h-80 items-end" />
              </div>
            </div>

            {/* <div>
          <img src="Decent.png" className="mt-0 w-screen h-[1000px]" />
        </div> */}

            <div className="flex justify-center w-full my-6 text-5xl">
              <h1>
                <span className="text-blue-300">Your</span> Home{" "}
                <span className="text-blue-300">AWAY</span> From
              </h1>
              <div className="w-[10px] h-[50px]"></div>
              <span className="text-blue-300">
                <span className={DS.className}>
                  <Typewriter
                    options={{
                      strings: [
                        "Home....",
                        "Mom....",
                        "Dad....",
                        "Yourself....",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </span>
            </div>

            <div className="py-10">
              <div class="max-w-screen-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-auto ml-auto py-10">
                <a href="#">
                  <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-4xl">
                    Search PG's around the corner....
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-3xl">
                "Discover Your Next Adventure: Explore Local PGS Right Around You!"
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link href={"/locations"}>
                  See all locations
                  </Link>
                 
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
