'use client'

import Image from 'next/image'
import location from './imeges/location.png'
import { useState } from 'react'

export default function SectionSearch() {

    const [category, setCategory] = useState()

    return (
        <>
            <div className="px-20 m-auto">
                <div className="flex justify-between gap-10 items-center">
                    <div >
                        <ul className='w-[60px] h-[60px] text-[16px] font-medium flex items-center justify-center rounded-full shadow-md flex-col bg-[#F6EEEE]'>
                            <li>All</li>
                            {/* <li>Apple</li>
                            <li>Buds</li>
                            <li>Watch</li>
                            <li>Sonos</li> */}
                        </ul>
                    </div>
                    <div className="w-full h-[60px] text-[16px] font-medium flex items-center justify-center rounded-full shadow-md flex-col bg-[#F6EEEE]">
                        <input type="text" className='bg-transparent w-full px-5 outline-none' placeholder='I’m shopping for...' />
                    </div>
                    <div className="w-[80px] h-[60px] flex items-center justify-center rounded-full shadow-md flex-col bg-[#F6EEEE]">
                        <Image src={location} className='w-[16px] h-[20px]' alt="loco" />
                    </div>
                </div>
            </div>
        </>
    )
}
