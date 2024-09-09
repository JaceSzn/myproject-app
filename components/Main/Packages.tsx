import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiMapPinLine, RiTimeLine } from 'react-icons/ri'
import { TbStarFilled, TbStarHalfFilled } from 'react-icons/tb'

const Packages = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28 bg-slate-50' id='listing'>
        <div className='mx-4'>
            <h4 className='font-bold text-secondary'>TAKE A LOOK AT THESE OFFERS</h4>
            <h3 className='h3 max-w-lg'>we provide top destinations</h3>
            <p className='max-w-lg'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immense experiences and arrangements</p>
        </div>
        <div className='grid mx-4 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-12'>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0973.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#1500</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>TERMINUS</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>30mins</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0966.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#1200</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>Old Airport Junction</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>25mins</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0990.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>$2000</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>New Jos Stadium</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>20mins</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0978.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#1500</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>JUTH</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>30mins</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0979.JPG'} height={366} width={350} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#1000</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>British America</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>20mins</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0989.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#5000</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>Plateau State University</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Bokkos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>3hr</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0987.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#1200</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>University of Jos(permanent site)</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>25mis</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0982.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#1000</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>University of Jos(main campus)</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>20mins</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-100 group'>
                <Link href={'/'} className='overflow-hidden relative'>
                    <Image src={'/IMG_0983.JPG'} height={366} width={640} alt='img'/>
                    <span className='font-bold text-white bg-black absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-red-400'>#2000</span>
                </Link>
                <div className='p-4 bg-white'>
                    <div className='capitalize medium-22'>
                        <span>Lamingo Golf Club</span>
                        <div className='flex items-center gap-x-2 my-1'>
                            <RiMapPinLine className='text-gray-500' />
                            <span className='regular-16 text-gray-500'>Jos</span></div>
                    </div>
                    <hr className='mt-3'/>
                    {/* <p className='my-3'>Embark on an unforgettable adventure with our all-inclusive travel package, offering immensive experiences and arrangements</p> */}
                    <hr className='mt-3' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex items-center gap-x-2 text-secondary'>
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarHalfFilled />
                            </div>
                            <span className='font-bold'>(222)</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <RiTimeLine className='text-lg' />
                            <span className='font-bold'>1hr</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Packages
