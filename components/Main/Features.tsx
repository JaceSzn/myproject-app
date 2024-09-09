'use client'
import { FEATURE } from '@/constants/features'
import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const Feature = () => {

    const NextArrow = (props:any) => {
        const {onClick} = props;
        return(
            <div onClick={onClick} className='bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5 hover:bg-slate-300'>
                <RiArrowRightSLine />
            </div>
        )
    };

    const PrevArrow = (props:any) => {
        const {onClick} = props;
        return(
            <div onClick={onClick} className='bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 hover:bg-slate-300'>
                <RiArrowLeftSLine />
            </div>
        )
    }

    var settings = {
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    }

  return (
    <section className='max-padd-container py-20 xl:py-32 bg-white' id='feature'>
        <div className='w-[90%] m-auto'>
            <div className='mx-4'>
                <h4 className='bold-18 text-secondary'>what we serve</h4>
                <h3 className='h3 max-w-lg capitalize'>we provide Top destinations</h3>
                <p className='max-w-lg'>Transport Management System (TMS) effectively manage information about customer profile and make reservation easily at their comfort zones. Customers also can see types of transport that can be booked faster and make the choice of the transport.<br />Find out more about the top service we offer in the city</p>
            </div>

            {/* container */}
            <div className='pt-12'>
                <Slider {...settings}>
                    {/* {FEATURE.map((feature)=>{
                        <FeatureItem 
                        key={feature.URL}
                        URL={feature.URL}
                        title={feature.title}
                        des={feature.des} />
                    })} */}
                    
                    <div className='mx-4 overflow-hidden group'>
                        <Link href='/'                         className='overflow-hidden relative'>
                            <div>
                                <Image src={'/IMG_0010.JPG'} alt='img' height={600} width={510} className='hover:scale-105 transition-all duration-700 overflow-hidden' />
                            </div>
                            <h4 className='capitalize regular-22 absolute top-6 left-4 text-white'>Terminus</h4>
                            <p className='regular-18 absolute bottom-6 right-0 bg-black text-white px-4 py-2 rounded-l-full group-hover:bg-red-400 group-hover:!pr-8'>5 Rides available</p>
                        </Link>
                    </div>
                    <div className='mx-4 overflow-hidden group'>
                        <Link href='/'                         className='overflow-hidden relative'>
                            <div>
                                <Image src={'/IMG_0978.JPG'} alt='img' height={600} width={510} className='hover:scale-105 transition-all duration-700 overflow-hidden' />
                            </div>
                            <h4 className='capitalize regular-22 absolute top-6 left-4 text-white'>JUTH</h4>
                            <p className='regular-18 absolute bottom-6 right-0 bg-black text-white px-4 py-2 rounded-l-full group-hover:bg-red-400 group-hover:!pr-8'>4 Rides available</p>
                        </Link>
                    </div>
                    <div className='mx-4 overflow-hidden group'>
                        <Link href='/'                         className='overflow-hidden relative'>
                            <div>
                                <Image src={'/IMG_0982.JPG'} alt='img' height={600} width={510} className='hover:scale-105 transition-all duration-700 overflow-hidden' />
                            </div>
                            <h4 className='capitalize regular-22 absolute top-6 left-4 text-white'>UNIJOS</h4>
                            <p className='regular-18 absolute bottom-6 right-0 bg-black text-white px-4 py-2 rounded-l-full group-hover:bg-red-400 group-hover:!pr-8'>7 Rides available</p>
                        </Link>
                    </div>
                    <div className='mx-4 overflow-hidden group'>
                        <Link href='/'                         className='overflow-hidden relative'>
                            <div>
                                <Image src={'/IMG_0966.JPG'} alt='img' height={600} width={510} className='hover:scale-105 transition-all duration-700 overflow-hidden' />
                            </div>
                            <h4 className='capitalize regular-22 absolute top-6 left-4 text-white'>Old Airport</h4>
                            <p className='regular-18 absolute bottom-6 right-0 bg-black text-white px-4 py-2 rounded-l-full group-hover:bg-red-400 group-hover:!pr-8'>6 Rides available</p>
                        </Link>
                    </div>
                    <div className='mx-4 overflow-hidden group'>
                        <Link href='/'                         className='overflow-hidden relative'>
                            <div>
                                <Image src={'/IMG_0990.JPG'} alt='img' height={600} width={510} className='hover:scale-105 transition-all duration-700 overflow-hidden' />
                            </div>
                            <h4 className='capitalize regular-22 absolute top-6 left-4 text-white'>New Stadium</h4>
                            <p className='regular-18 absolute bottom-6 right-0 bg-black text-white px-4 py-2 rounded-l-full group-hover:bg-red-400 group-hover:!pr-8'>3 Rides available</p>
                        </Link>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}


// const FeatureItem = ({ title, URL, des}: FeatureItem)=>{
//     return (
       
//     )
// }

export default Feature
