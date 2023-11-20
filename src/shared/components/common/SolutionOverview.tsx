import React from 'react';
import Image from "next/image";
import BtnFindOut from './BtnFindOut';
import TitleSection from './TitleSection';

interface Solution {
    title: string,
    description: string,
    details: string
}

interface Props {
    solution: Solution
}

const SolutionOverview = () => {
    return (
        <section className="mx-auto px-32 py-10">
            <div className='grid grid-cols-2 justify-start bg-[white] items-center'>
                <div className='flex flex-col gap-5'>
                    <p className="text-[#1B3864] text-4xl ">Quản lý doanh nghiệp</p>
                    <h1 className="text-xl">Metaverse cung cấp nhóm giải pháp quản lý doanh nghiệp phù hợp, hiệu quả với từng khách hàng, với một số giải pháp sau:</h1>
                    <ul>
                        <li className='flex text-lg gap-2 items-center'>
                            <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                            Hệ thống quản lý quan hệ khách hàng
                        </li>
                        <li className='flex text-lg gap-2 items-center'>
                            <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                            Hệ thống quản lý quan hệ khách hàng
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <Image className='' height={300} width={300} src={'/images/Solution1.png'} alt={''}></Image>
                </div>
            </div>
            <div className='grid grid-cols-2 justify-start bg-[#E6EAEF] items-center'>
                <div className='flex justify-center items-center'>
                    <Image className='' height={300} width={300} src={'/images/Solution1.png'} alt={''}></Image>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className="text-[#1B3864] text-4xl ">Quản lý doanh nghiệp</p>
                    <h1 className="text-xl">Metaverse cung cấp nhóm giải pháp quản lý doanh nghiệp phù hợp, hiệu quả với từng khách hàng, với một số giải pháp sau:</h1>
                    <ul>
                        <li className='flex text-lg gap-2 items-center'>
                            <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                            Hệ thống quản lý quan hệ khách hàng
                        </li>
                        <li className='flex text-lg gap-2 items-center'>
                            <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                            Hệ thống quản lý quan hệ khách hàng
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SolutionOverview