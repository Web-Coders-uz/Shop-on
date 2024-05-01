'use client'
import { ProductsInter } from "@/interfaces"
import Image from "next/image"

import item1 from '../../public/airpods.png'
import item2 from '../../public/iphone.png'
import item4 from '../../public/watch.png'
import item5 from '../../public/wifi.png'
import Location from './imeges/location.png'
import Price from './imeges/price.png'

export default function ProductCard({
    id,
    name,
    location,
    price,
    logo,
    category,
    all
}: ProductsInter) {

    return (
        <>
            <div className="px-20 flex justify-between gap-[10px]">
                <article className="max-w-[30ppx] flex flex-col ">
                    <Image src={item2} alt="Item" />
                    <div className="px-5">
                        <p className="text-gray-600 font-bold">
                            Apple iPhone 13 Pro Max 128GB Gold
                        </p>
                        <div className="flex justify-start gap-1">
                            <Image className="w-[13px] h-auto:" src={Location} alt="loco" />
                            <span className="text-gray-600 font-medium">Skopje</span>
                        </div>
                        <div className="flex justify-start gap-1">
                            <Image className="w-[13px] h-auto" src={Price} alt="price" />
                            <span className="text-gray-600 font-medium">1.040,50</span>

                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
