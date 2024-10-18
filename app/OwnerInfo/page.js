import React from 'react'

const page = () => {
  return (
    <div class="flex bg-[#f0feff] justify-center items-center h-screen">
    <div class="max-w-[490px] rounded-lg w-[100%] overflow-hidden bg-white shadow-[0_0_1rem_rgba(0,0,0,0.2)] ">
        <div class="card">
            <div class="grid grid-cols-5">
                <div class="col-span-2 p-3">
                    <img src="https://svgshare.com/i/16D0.svg" alt="demo" />
                </div>
                <div class="col-span-3 p-3">
                    <div class="font-bold">Atharva Thakur</div>
                    <div class="mb-3">Owner</div>
                    <div
                        class="card flex justify-between items-center text-gray-500 bg-gray-200 focus:bg-white rounded-lg p-2">
                        <div class="text-center">
                            <p class="text-sm">No of blocks</p>
                            <p class="font-bold text-gray-800">7</p>
                        </div>
                        <div class="text-center">
                            <p class="text-sm">Followers</p>
                            <p class="font-bold text-gray-800">850</p>
                        </div>
                        <div class="text-center">
                            <p class="text-sm">Rating</p>
                            <p class="font-bold text-gray-800 flex gap-1">
                                <img src="https://svgshare.com/i/16Fg.svg" />
                                    9.5
                            </p>
                        </div>
                    </div>
                    <div class="flex mt-3 gap-2">
                        <button class="bg-white text-gray-500 py-2 px-4 rounded-lg border-2 hover:bg-gray-400 flex-1">
                              Chat
                            </button>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex-1">
                              Follow
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default page
