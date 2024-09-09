'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import Accordion from '../Accordion'

const Testimonial = () => {

    var settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
           
        ]
    }

  return (
    <section className='px-4 max-padd-container py-16 bg-white ' id='testimonials'>
        <div className='flex flex-col lg:flex-row gap-y-8'>
            {/* left */}
            <div>
                <h4 className='font-bold text-secondary'>HAPPY CUSTOMER</h4>
                <h3 className='h3 max-w-lg'>Testimonials</h3>
                <div className='max-w-[666px]'>
                    <Slider {...settings}>
                        <div className='my-8 rounded-md z-10'>
                            <div className='pb-6'>
                                <Image src={'/IMG_0828-1.jpg'} alt='' height={77} width={77} className='rounded-full mb-4'/>
                                <div className=''>
                                    <div className='font-bold text-secondary'>Daniel Emmanuel</div>
                                    <div className='text-gray-500 regular-14'>Student</div>
                                </div>
                            </div>
                            <span className='text-3xl -z-10'><FaQuoteLeft /></span>
                            <p className='max-w-lg pt-3 text-gray-500'>Outstanding journeys, knowledge guides, seamless execution. Each trip exceeds expectations, ensuring lasting memories and remarkable experiences.</p>
                        </div>
                        <div className='my-8 rounded-md z-10'>
                            <div className='pb-6'>
                                <Image src={'/558a638b-5417-428c-b195-7469483bb7ab.jpg'} alt='' height={77} width={77} className='rounded-full mb-4'/>
                                <div className=''>
                                    <div className='font-bold text-secondary'>Betty Ahmed</div>
                                    <div className='text-gray-500 regular-14'>Student</div>
                                </div>
                            </div>
                            <span className='text-3xl -z-10'><FaQuoteLeft /></span>
                            <p className='max-w-lg pt-3 text-gray-500'>Fantastic destinations, knowledge guides, seamless logistics. Spectacular views and memories. Exceeded expectations, worth every penny.</p>
                        </div>
                        <div className='my-8 rounded-md z-10'>
                            <div className='pb-6'>
                                <Image src={'/IMG_9832.JPG'} alt='' height={77} width={77} className='rounded-full mb-4'/>
                                <div className=''>
                                    <div className='font-bold text-secondary'>Kaze Ibrahim Ishaya</div>
                                    <div className='text-gray-500 regular-14'>CEO Tech Hub Africa</div>
                                </div>
                            </div>
                            <span className='text-3xl -z-10'><FaQuoteLeft /></span>
                            <p className='max-w-lg pt-3 text-gray-500'>This is my first experience and I was really impressed. This will definitely be my go to transport anytime, anyday. Thanks for the excellent ride.</p>
                        </div>
                        <div className='my-8 rounded-md z-10'>
                            <div className='pb-6'>
                                <Image src={'/IMG_0326.JPG'} alt='' height={77} width={77} className='rounded-full mb-4'/>
                                <div className=''>
                                    <div className='font-bold text-secondary'>Gift Ajiji</div>
                                    <div className='text-gray-500 regular-14'>Artisan</div>
                                </div>
                            </div>
                            <span className='text-3xl -z-10'><FaQuoteLeft /></span>
                            <p className='max-w-lg pt-3 text-gray-500'>Unbelievable sights, professional guides, seamless planning and unmatched experiences that leave you wanting more. Highly recommended.</p>
                        </div>
                    </Slider>
                </div>
            </div>
            {/* right */}
            <div>
               <Accordion /> 
            </div>
        </div>
    </section>
  )
}

export default Testimonial
