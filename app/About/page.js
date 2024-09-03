import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="bg-white text-black">
        <div className="flex justify-center">
          
        </div>

        <div className="flex justify-center gap-5 mt-14">
          <Image
            src="/atharva.png"
            height={500}
            width={500}
            class="m-5 w-96 h-96 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:before:bg-blue-500 border-blue-500 relative overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 efore:h-full before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0"
          />
          <div className="text-5xl grid grid-rows-2">
            <div className="text-center align-center flex items-end">
              Atharva Gourshete
            </div>
            <div className="text-xl">Frontend Face of the Team.</div>
          </div>
        </div>

        <div className="flex justify-center gap-20 mt-14">
          <div className="text-5xl grid grid-rows-2">
            <div className="text-center align-center flex items-end">
              Yadnesh Bamne
            </div>
            <div className="text-xl mx-3">Backend Support</div>
          </div>
          <Image
            src="/yadnesh.png"
            height={500}
            width={500}
            class="m-5 w-96 h-96 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:before:bg-blue-500 border-blue-500 relative overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 efore:h-full before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0"
          />
        </div>

        <div className="flex justify-center gap-40 mt-14">
          <Image
            src="/om.png"
            height={500}
            width={500}
            class="m-5 w-96 h-96 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:before:bg-blue-500 border-blue-500 relative overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 efore:h-full before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0"
          />
          <div className="text-5xl grid grid-rows-2">
            <div className="text-center align-center flex items-end ">
              Om Date
            </div>
            <div className="text-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page