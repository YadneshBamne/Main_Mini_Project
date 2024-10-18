import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex justify-center my-7 gap-2">
        <button
          id="dropdownDelayButton"
          data-dropdown-toggle="dropdownDelay"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          class="text-black bg-white hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-black-500 border-black-500 relative h-[50px] w-40 overflow-hidden border border-black-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black-500 before:transition-all before:duration-500 hover:shadow-slate-950 hover:before:left-0 mx-4 hover:text-black justify-center"
          type="button"
        >
          Type
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdownDelay"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                PG
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Flat
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Rent
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>

        <form>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-900-500 focus:border-gray-900-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-900-500 dark:focus:border-gray-900-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-gray-900-700 hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center align-center items-center mt-20">
        <div className=" w-1/2 h-72 flex bg-white rounded-xl hover:before:bg-white-500 border-white-500 relative overflow-hidden border border-white-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 efore:h-full before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-slate-950 hover:before:left-0">
        <div class="pg-img" className="">
          <Image
          src="/pg1.png"
          width={400}
          height={400}
          className="border-gray-800 border-4 m-5"
          />
        </div>
        <div class="pg-info" className="grid grid-rows-5 mt-3">
          <div className="text-3xl mt-5 text-stone-950">ParwWoods PGs</div>
          <div className="mb-5">Manpada Thane</div>
          <div className="text-3xl mb-6"><span className="text-black-500">Rs.5000</span> per month</div>
          <div></div>
          <div className="flex"><div><a href="./OwnerInfo"><button type="button" class="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Owner Info</button></a><button type="button" class="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Select</button></div></div>
        </div>
        </div>
      </div>



      <div className="flex justify-center align-center items-center mt-20">
        <div className=" w-1/2 h-72 flex bg-white rounded-xl hover:before:bg-white-500 border-white-500 relative overflow-hidden border border-white-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 efore:h-full before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-slate-950 hover:before:left-0">
        <div class="pg-img" className="">
          <Image
          src="/pg1.png"
          width={400}
          height={400}
          className="border-gray-800 border-4 m-5"
          />
        </div>
        <div class="pg-info" className="grid grid-rows-5 mt-3">
          <div className="text-3xl mt-5 text-stone-950">All Boys and Girls PGs</div>
          <div className="mb-5">Manpada Thane</div>
          <div className="text-3xl mb-6"><span className="text-black-500">Rs.9000</span> per month</div>
          <div></div>
          <div className="flex"><div><a href="./OwnerInfo"><button type="button" class="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Owner Info</button></a><button type="button" class="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Select</button></div></div>
        </div>
        </div>
      </div>

    
    </div>
  );
};

export default page;
