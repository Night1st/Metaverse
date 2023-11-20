import React, { useState } from 'react';
import Image from 'next/image';
import BtnFindOut from './BtnFindOut';
import TitleSection from './TitleSection';

interface Solution {
  key: number;
  title: string;
  description: string;
  details: string[];
  image: string;
}

interface Props {
  solution: Solution[];
}

const SolutionOverview = ({ solution }: Props) => {
  //const [solutionTab, setSolutionTab] = useState<Solution>(solution[0] as Solution);
  return (
    <section className='mx-auto px-32 py-10'>
      {solution.map((item, idx) =>
        item.key % 2 == 0 ? (
          <div key={idx} className='grid grid-cols-2 justify-start bg-[white] items-center'>
            <div className='flex flex-col gap-10 px-10 py-10'>
              <p className='text-[#1B3864] text-4xl '>{item.title}</p>
              <h1 className='text-xl'>{item.description}</h1>
              <ul>
                {item.details.map((detail, index) => (
                  <li key={index} className='flex text-lg gap-2 items-center'>
                    <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-center items-center px-10 py-10'>
              <Image className='' height={300} width={300} src={item.image} alt={''}></Image>
            </div>
          </div>
        ) : (
          <div key={idx} className='grid grid-cols-2 justify-start bg-[#E6EAEF] items-center'>
            <div className='flex justify-center items-center px-10 py-10'>
              <Image className='' height={300} width={300} src={item.image} alt={''}></Image>
            </div>
            <div className='flex flex-col gap-10 px-10 py-10'>
              <p className='text-[#1B3864] text-4xl '>{item.title}</p>
              <h1 className='text-xl'>{item.description}</h1>
              <ul>
                {item.details.map((detail, index) => (
                  <li key={index} className='flex text-lg gap-2 items-center'>
                    <Image height={30} width={30} src={'/images/check-mark.png'} alt={''}></Image>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ),
      )}
      {/* <div className='grid grid-cols-2 justify-start bg-[#E6EAEF] items-center'>
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
            </div> */}
    </section>
  );
};

export default SolutionOverview;
