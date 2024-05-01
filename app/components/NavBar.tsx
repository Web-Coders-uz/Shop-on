import React from 'react'
import logo from './imeges/logo.png'
import user from './imeges/user_logo.png'
import Image from 'next/image'

export default function NavBar() {
    return (
        <>
            <nav className="flex justify-end items-center py-4 px-14">
                <div className='mr-[105px]'>
                    <Image src={logo} className='max-w-[250px] h-[150]' alt="image" />
                </div>
                <ul className='flex justify-end items-center gap-[25px] '>
                    <li className='font-medium text-[16px] text-black'>Sell on SHOP ON</li>
                    <li className='font-medium text-[16px] text-black'>Contact</li>
                    <li className='font-medium text-[16px] text-black'>Help</li>
                    <li className='font-medium text-[16px] text-black'>FAQs</li>
                    <li className='font-medium text-[16px] text-black'>
                        <Image src={user} alt='user_logo' />
                    </li>
                </ul>
            </nav>
        </>
    )
}
