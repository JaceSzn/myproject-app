import React from 'react'
import { MdLocationPin } from 'react-icons/md'

const Hero = () => {
  return (
    <div>
      <section className='w-full relative flex items-center' id='home'>
       
        {/* <video src='/' muted autoPlay loop className='absolute h-full w-full top-0 bottom-0 object-cover'></video> */}
        {/* content */}
        <div className='w-full h-max bg-[#2f6a7f2f] pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24 herobg'>
            <div className='px-4 py-8 text-white'>
                <h2 className='h2 max-w-[777px] text-red-500'>Make Your Journey Amazing With Us</h2>
                <span className='font-serif reg'>we prioritize providing a modern, safe, and<br /> revitalized transportation experience for our valued customers.<br /> Our commitment to excellence is deeply rooted in our principles,<br /> and we go above and beyond to ensure your utmost satisfaction.</span>
                
            </div>

            {/* form */}
            <div className='p-4'>
                <div className='text-center'><span className='bg-white text-black medium-16 px-12 py-4 rounded-l-xl rounded-r-xl font-bold'>Search for your trip</span></div>
                <div className='flex flex-col md:flex-row gap-6 px-8 py-10 md:px-12 bg-white rounded-xl'>
                    <div className='flex flex-col w-full xl:px-6'>
                        <label htmlFor='city' className='block text-gray-500 pb-2'>Search your destination</label>
                        <div className='flex items-center h-10 px-4 bg-slate-100 rounded-full w-full'>
                            <input type='text' placeholder='Enter name here...' className='bg-transparent border-none outline-none w-full regular-24'/>
                            <MdLocationPin className='text-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full xl:px-6'>
                        <label htmlFor='date' className='block text-gray-500 pb-2'>Select your date</label>
                        <div className='flex items-center h-10 px-4 bg-slate-100 rounded-full w-full'>
                            <input type='date' className='bg-transparent border-none outline-none w-full regular-14'/>
                        </div>
                    </div>
                    <div className='flex flex-col w-full xl:px-6'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='price' className='block text-gray-500 pb-2'>Max price</label>
                            <h4>#5000</h4>
                        </div>
                        <div className='flex items-center h-10 px-4 bg-slate-100 rounded-full w-full'>
                            <input type='range' max={'5000'} min={'1000'}className='bg-transparent border-none outline-none w-full regular-14' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
