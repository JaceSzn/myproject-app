import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center pb-14 pt-20  rounded-t-xl bg-slate-900'>
      <div className='flex flex-col rounded-xl lg:mx-14 w-full bg-slate-100'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 lg:flex-row'>
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
            <div className='flex flex-col gap-5'>
              <div className='flex'>
                <div>
                  <h4>Learn More</h4>
                  
                  <ul className='flex flex-col gap-4 text-gray-500'>
                    <Link href='/'>
                      About Us
                    </Link>
                    <Link href='/'>
                      Destinations
                    </Link>
                    <Link href='/'>
                      Travel Guides
                    </Link>
                    <Link href='/'>
                      FAQ
                    </Link>
                    <Link href='/'>
                      Privacy Policy
                    </Link>
                  </ul>
                </div>
                <div className='ml-12'>
                  <h4>Our Community</h4>
                  
                  <ul className='flex flex-col gap-4 text-gray-500'>
                    <Link href='/'>
                      Terms and Conditions
                    </Link>
                    <Link href='/'>
                      Special Offers
                    </Link>
                    <Link href='/'>
                      Customer Reviews
                    </Link>
                  </ul>
                </div>
                <div className='ml-12'>
                  <h4>Contact us</h4>
                  
                  <ul className='flex flex-col gap-4 text-gray-500'>
                  <Link href={'/'} className='flex gap-4 md:flex-col lg:flex-row'>
                  <p>Contact Number:</p><p className='font-semibold'>+234-706-172-991-0</p>
                   </Link>
                    <Link href={'/'} className='flex gap-4 md:flex-col lg:flex-row'>
                      <p>Email Address:</p><p className='font-semibold'>jkae170@gmail.com</p>
                    </Link>
                  </ul>
                </div>
              </div>
              
              
             
              <div className='flex flex-col'>
                <h4>Socials</h4>
                <ul className='flex gap-4'>
                  <Link href={'/'}>
                    <Image src={'/facebook.png'} alt='logo' height={22} width={22} />
                  </Link>
                  <Link href={'/'}>
                    <Image src={'/twitter.png'} alt='logo' height={22} width={22} />
                  </Link>
                  <Link href={'/'}>
                    <Image src={'/pinterest.png'} alt='logo' height={22} width={22} />
                  </Link>
                  <Link href={'/'}>
                    <Image src={'/instagram.png'} alt='logo' height={22} width={22} />
                  </Link>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
        <p className='font-semibold bg-secondary text-white py-2 px-8 rounded-b-xl flex justify-between w-full'><span>&copy; 2024</span><span>All rights reserved</span></p>
      </div>
    </footer>
  )
}

export default Footer
