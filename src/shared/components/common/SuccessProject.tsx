import TitleSection from './TitleSection';
import React from 'react';
import Image from 'next/image';
import { Solution } from './SolutionOverview';
import { PreImage } from './PreImage';
import FrameworkImage from '../icon/FrameworkImage';

interface Props {
  id: number;
  solution: Solution[];
}

const SuccessProject = ({ solution, id }: Props) => {
  return (
    <section className='w-full bg-[#E6EAEF] py-4 md:py-8 lg:py-10 xl:py-24'>
      <div className='max-w-[1440px] flex flex-col justify-center items-center mx-auto'>
        <TitleSection title='DỰ ÁN THÀNH CÔNG' description='Một số dự án tiêu biểu của Metaverse' />
        {solution[id].successProject.map((item, idx) => (
          <div key={idx} className='mt-10 grid grid-cols-2 justify-start items-start'>
            <div className='relative flex justify-center items-center'>
              <div className='z-30 overflow-hidden'>
                <PreImage
                  className='object-cover'
                  height={425}
                  width={425}
                  src={item.image}
                  alt={item.title}
                ></PreImage>
              </div>
              <FrameworkImage className='absolute top-0 left-0 translate-x-1/4 -translate-y-[5%] z-10' />
            </div>
            <div className='flex flex-col gap-3 px-10 py-10'>
              <h1 className='text-[#1B3864] text-4xl '>{item.title}</h1>
              <p className='text-xl'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessProject;
