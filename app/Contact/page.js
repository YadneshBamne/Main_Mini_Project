import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-yellow-50'>
      <div className='w-full h-80 items-center grid grid-rows-2 p-10 text-black'>
      <div className='flex justify-center text-6xl'>
        Contact Us
      </div>
      <div className='flex justify-center gap-5 w-full'>
      <div className=''>
        <div><span><b>E-Mail:</b></span><a href=''> goursheteatharva@gmail.com</a></div>
        <div><span><b>Mobile No.:</b></span> 9372291162</div>
      </div>
      </div>
      <div className='flex justify-center gap-5'>
      <div className=''>
        <div><span><b>E-Mail:</b></span><a href=''> yadnesh2105@gmail.com</a></div>
        <div><span><b>Mobile No.:</b></span> 9372291162</div>
      </div>
      </div>
      <div className='flex justify-center gap-5'>
      <div className=''>
        <div><span><b>E-Mail:</b></span><a href=''> omi.scuba@gmail.com</a></div>
        <div><span><b>Mobile No.:</b></span> 9372291162</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default page