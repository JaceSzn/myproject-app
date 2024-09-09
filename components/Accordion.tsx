/* import React, { useState } from 'react'
import { Collapse } from 'react-collapse';
import { FaMinus, FaPlus } from 'react-icons/fa';

function Accordion({toggle, open}: ButtonProps){

    const [open, setOpen] = useState<number | null>(null);
    const toggle = (index: number) =>{
        if(open === index){
            return setOpen(null);
        }

        setOpen(index);
    }


  return (
    <div>
      <h4 className='text-secondary font-bold'>FAQ</h4>
      <h3 className='font-semibold max-w-96'>Frequently Asked Questions</h3>
      <div className='pt-6 max-w-[800px]'>
        <div className='pt-3'>
            <div onClick={toggle} className={`px-3 py-4 font-bold flex items-center gap-x-4 cursor-pointer ${open ? "bg-secondary text-white" : ""}`}>
                <div>{open ? <FaMinus /> : <FaPlus />}</div>
                <h4 >Accepted payment methods?</h4>
            </div>
            <Collapse isOpened={open}>
                <p className='p-4'>We accept creditdebit cards, PayPal and bank transfers.</p>

            </Collapse>
        </div>
        <div className='pt-3'>
            <div onClick={toggle} className={`px-3 py-4 font-bold flex items-center gap-x-4 cursor-pointer ${open ? "bg-secondary text-white" : ""}`}>
                <div>{open ? <FaMinus /> : <FaPlus />}</div>
                <h4>Refund policy on cancellations?</h4>
            </div>
            <Collapse isOpened={open}>
                <p className='p-4'>Refund available per our policy.</p>

            </Collapse>
            <div onClick={toggle} className={`px-3 py-4 font-bold flex items-center gap-x-4 cursor-pointer ${open ? "bg-secondary text-white" : ""}`}>
                <div>{open ? <FaMinus /> : <FaPlus />}</div>
                <h4>Group booking discounts available?</h4>
            </div>
            <Collapse isOpened={open}>
                <p className='p-4'>We provide amazing group discount offers</p>

            </Collapse>
            <div onClick={toggle} className={`px-3 py-4 font-bold flex items-center gap-x-4 cursor-pointer ${open ? "bg-secondary text-white" : ""}`}>
                <div>{open ? <FaMinus /> : <FaPlus />}</div>
                <h4>How to contact customer support?</h4>
            </div>
            <Collapse isOpened={open}>
                <p className='p-4'>Contact via phone, email or live chat.</p>

            </Collapse>
        </div>
      </div>
    </div>
  )
}

type ButtonProps = {
    open: boolean;
    toggle: () => void,
}


export default Accordion

 */