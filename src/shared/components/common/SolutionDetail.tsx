import React from 'react';
import { Solution } from './SolutionOverview';

interface Props {
    solution: Solution[];
  }

const SolutionDetail = ({solution}: Props) => {
    return (
        <section className='mx-auto px-32 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-start bg-[white] items-center'>
                <div className='flex flex-col gap-3 px-5 py-5'>
                    <h1 className='text-[#1B3864] text-4xl '>{"Tại sao nên chọn Metaverse?"}</h1>
                    <p className='text-xl'>{"Hệ thống quản lý hoạt động chuỗi Spa Sen Bách Diệp."}</p>  
                </div>
                <div className='flex flex-col gap-3 px-5 py-5'>
                    <h1 className='text-[#1B3864] text-4xl '>{"Tại sao nên chọn Metaverse?"}</h1>
                    <p className='text-xl'>{"Hệ thống quản lý hoạt động chuỗi Spa Sen Bách Diệp."}</p>  
                </div>
            </div>
        </section>
    )
}