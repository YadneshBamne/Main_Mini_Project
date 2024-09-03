"use client";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import Animation from "./Animation - 1723199716467.json";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Head from "next/head";
import { Oswald, Dancing_Script,Roboto_Slab } from "next/font/google";
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
const images = [
  { url: "https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1554802583/Website/Residences/Boston/1.jpg" },
  { url: "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/d601b-hostels-vs-pgs-min.jpg?fit=4000%2C3000&ssl=1" },
  { url: "https://play-zelo-production.s3.ap-south-1.amazonaws.com/uploads/center_caption_photo/photo/5e41258f09ba9955e4a4c247/2.jpg" },
  { url: "https://img.theweek.in/content/dam/week/news/biz-tech/images/2018/7/27/pg-accomodation.jpg" },
  { url: "https://teja12.kuikr.com/is/p/f/800x600/guide/wp-content/uploads/2020/10/PG-for-rent4.jpg" },
];

const page = () => {
  return (
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

        <div className="-mt-10 min-h-screen grid grid-cols-2 text-center items-center gap-60">
          <div class="left text-7xl">
            <div className="ml-10"><span className={RS.className}>HOLMES</span></div>
            <div className="text-2xl ml-10"><span className={DS.className}>PG Accomodation - Safe and Secure Solution</span></div>
            </div>
          <div class="right" className="">
          <Slider loop={true}
             autoPlay={true}
              autoPlayInterval={4000} showArrowControls={false} showDotControls={false} imageList={images} width={600} height={300} className="rounded-3xl" />
          </div>
        </div>

        {/* <div>
          <img src="Decent.png" className="mt-0 w-screen h-[1000px]" />
        </div> */}

        <div className="flex justify-center items-center w-full h-52 my-12">
          <Lottie className="size-96" loop={true} animationData={Animation} />{" "}
          {/* for Lottle animation file and lottie functions*/}
        </div>

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
                  strings: ["Home....", "Mom....", "Dad....", "Yourself...."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </span>
        </div>

        <section class="bg-white dark:bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <a
                href="#"
                class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
              >
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                </svg>
                Tutorial
              </a>
              <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                One stop <span className="text-amber-400">solutions</span> for
                finding your desired <span className="text-amber-400">PG</span>
              </h1>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                Find PG's near your college within a safe environment
              </p>
              <a
                href="#"
                class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
                >
                  <svg
                    class="w-2.5 h-2.5 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                  </svg>
                  Design
                </a>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  We Provide easy{" "}
                  <span className="text-amber-400">solutions</span> for your{" "}
                  <span className="text-green-700">PG finding journey</span>
                </h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  Locate one of the best and most trusted PG's near your
                  college.
                </p>
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                >
                  <svg
                    class="w-2.5 h-2.5 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                    />
                  </svg>
                  Code
                </a>
                <h2 class="text-white dark:text-white text-3xl font-extrabold mb-2">
                  Read more about us from our{" "}
                  <span className="text-amber-400">Testimonies</span>
                </h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  Large community of satisfied customers
                </p>
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        </section>

        {/* <div className="flex justify-center">
          <div className="flex gap-5 bg-slate-300 w-1/2 justify-center rounded-lg h-10 items-center">
            <button>
              <div>PG</div>
            </button>
            <button>
              <div>Hostel</div>
            </button>
            <button>
              <div>Rent a Home</div>
            </button>
          </div>
        </div>

        <div className=" flex justify-center align-center gap-5 mb-7 mt-10">
            <div class="min-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Thane
                  </h5>
                </a>

                <Link href={"/Thane"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Vasai
                  </h5>
                </a>

                <Link href={"/Vasai"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Santacruz
                  </h5>
                </a>

                <Link href={"/Santacruz"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Kalyan
                  </h5>
                </a>

                <Link href={"/Kalyan"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Malad
                  </h5>
                </a>

                <Link href={"/Malad"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>
          </div> */}

        <div className="flex justify-center space-x-10 items-center mt-28 h-">
          <hr className="w-1/4 " />
          <div className="text-2xl">Why Use Holmes</div>
          <hr className="w-1/4 opacity-7 flex items-center" />
        </div>
        <div className="flex justify-around mt-10 ml-10">
          <div className="mb-7">
            <Image
              src={"/hand-shake.png"}
              width={80}
              height={80}
              className="mb-5"
            />
            <h1>Trusted PG's</h1>
          </div>

          <div>
            <Image
              src={"/add-friend.png"}
              width={80}
              height={80}
              className="mb-5 ml-4"
            />
            <h1>Verified Owners</h1>
          </div>

          <div>
            <Image
              src={"/bank.png"}
              width={80}
              height={80}
              className="mb-5 ml-9"
            />
            <h1>Authorized By Colleges</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
