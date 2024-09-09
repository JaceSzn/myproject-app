import React from 'react'
import Image from 'next/image'
type ButtonProps ={
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <div className={`flex items-center gap-2 border rounded-full ${variant}`}>
      {icon && <Image src={icon} alt={title} width={20} height={20}/>}
      <label className='whitespace-nowrap cursor-pointer text-[18px] font-[-700]'>{title}</label>
    </div>
  )
}

export default Button
