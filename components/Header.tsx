'use client'
import Link from 'next/link'
import Nav from './Nav'
import { useState, useEffect } from 'react'
import Button from './Button'
import { IoMenu , IoClose } from 'react-icons/io5'
import { UserButton } from '@clerk/nextjs'

const Header = () => {

    const [active, setActive] = useState(false)
    const [menuOpened, setMenuOpened] = useState(true)
    const toggleMenu = ()=> setMenuOpened(!menuOpened)

    useEffect(()=> {
        const handleScroll = ()=>{
            setActive(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll)
        return() => {
            window.removeEventListener("scroll",handleScroll)
        }
    },[]);

  return (
    <header className={`${active ? 'bg-gray-200 shadow-lg py-2 z-50' : 'bg-gray-100 py-3 z-50'} fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}>
      <div className='mx-auto max-w-[2440px] px-6 lg:px-20 3xl:px-0 flex items-center justify-between'>
        <Link href={'/'} className='flex items-center'>
            <img src={'/logo.jpg'} alt='logo' width={200} height={100}/>
        </Link>
        <Nav containerStyles={'flex hidden lg:flex gap-x-10 items-start justify-center'} linkStyles={'text-black capitalize cursor-pointer my-4 relative transition-all'} />

        <Nav containerStyles={`${menuOpened ? 'flex items-start flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-0 w-60' : 'flex items-start flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-[-100%] w-60'}`} linkStyles={'capitalize cursor-pointer my-4 relative transition-all'}/>

        <div className='flex items-center'>
            <div className='hidden lg:black'>
                <Button type='button' title='Login' icon='/user.svg' variant='rounded-lg bg-secondary' />
            </div>
            {!menuOpened ? (<IoMenu className='lg:hidden inline-block cursor-pointer regular-24
            hover:text-red-500' onClick={toggleMenu} />) : ( <IoClose className='lg:hidden inline-block cursor-pointer regular-24
            hover:text-red-500' onClick={toggleMenu} /> )}
        </div>
        < UserButton afterSignOutUrl='/'/>
      </div>
      
    </header>
  )
}

export default Header
