import React from 'react';
import { motion } from 'framer-motion';
import router from 'next/router';
import IconArrowRight from '../icon/IconArrowRight';
import { PreImage } from './PreImage';
import IconCheck from '../icon/IconCheck';
export interface Solution {
  key: number;
  title: string;
  description: string;
  details: SolutionDetails[];
  successProject: SuccessPj[];
  image: string;
  link: string;
}

interface SolutionDetails {
  title: string;
  description: string;
}

interface SuccessPj {
  title: string;
  description: string;
  image: string;
}

interface Props {
  solution: Solution[];
  handleClick: any;
}

const SolutionOverview = ({ solution, handleClick }: Props) => {
  return (
    <section className='max-w-[1440px] mx-auto'>
      {solution.map((item, idx) =>
        item.key % 2 == 0 ? (
          <div key={idx} className='grid grid-cols-2 justify-start bg-[white] items-center'>
            <div className='flex flex-col gap-10 px-10 py-10'>
              <div className='flex h-[80px] w-full flex-col items-start justify-start'>
                {item.title.split('//').map((item: string, idx: number) => (
                  <p key={idx} className='text-[#1B3864] text-5xl font-semibold'>
                    {item}
                  </p>
                ))}
              </div>
              <h1 className='text-xl'>{item.description}</h1>
              <ul>
                {item.details.map((detail, index) => (
                  <li key={index} className='flex text-lg gap-2 items-center'>
                    <IconCheck />
                    {detail.title}
                  </li>
                ))}
              </ul>
              <div className='flex justify-start gap-5'>
                <motion.button
                  whileHover='hover'
                  className={`bg-[#1B3864] relative flex justify-center items-center gap-3 text-white text-left py-4 px-4 rounded-md cursor-pointer mt-3 w-60`}
                  onClick={handleClick}
                >
                  <p className='text-md'>Kết nối Metaverse</p>
                  <motion.div
                    className='absolute left-0 top-0 h-full w-0'
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                  ></motion.div>
                </motion.button>
                <motion.button
                  whileHover='hover'
                  className={`bg-[white] relative flex justify-center items-center gap-3 text-[#1B3864] text-left py-4 px-4 rounded-md cursor-pointer mt-3`}
                  onClick={() => router.push(item.link)}
                >
                  <p className='text-md'>Dự án thành công</p>
                  <IconArrowRight color='#1B3864' />
                  <motion.div
                    className='absolute left-0 top-0 h-full w-0'
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                  ></motion.div>
                </motion.button>
              </div>
            </div>
            <div className='flex justify-center items-center px-10 py-10'>
              <PreImage className='object-cover' height={500} width={500} src={item.image} alt={item.title}></PreImage>
            </div>
          </div>
        ) : (
          <div key={idx} className='grid grid-cols-2 justify-start bg-[#E6EAEF] items-center'>
            <div className='flex justify-center items-center px-10 py-10'>
              <PreImage className='object-cover' height={500} width={500} src={item.image} alt={item.title}></PreImage>
            </div>
            <div className='flex flex-col gap-10 px-10 py-10'>
              <div className='flex h-[80px] w-full flex-col items-start justify-start'>
                {item.title.split('//').map((item: string, idx: number) => (
                  <p key={idx} className='text-[#1B3864] text-5xl font-semibold'>
                    {item}
                  </p>
                ))}
              </div>
              <h1 className='text-xl'>{item.description}</h1>
              <ul>
                {item.details.map((detail, index) => (
                  <li key={index} className='flex text-lg gap-2 items-center'>
                    <IconCheck />
                    {detail.title}
                  </li>
                ))}
              </ul>
              <div className='flex justify-start gap-5'>
                <motion.button
                  whileHover='hover'
                  className={`bg-[#1B3864] relative flex justify-center items-center gap-3 text-white text-left py-4 px-4 rounded-md cursor-pointer mt-3 w-60`}
                  onClick={handleClick}
                >
                  <p className='text-md'>Kết nối Metaverse</p>
                  <motion.div
                    className='absolute left-0 top-0 h-full w-0'
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                  ></motion.div>
                </motion.button>
                <motion.button
                  whileHover='hover'
                  className={`bg-[#E6EAEF] relative flex justify-center items-center gap-3 text-[#1B3864] text-left py-4 px-4 rounded cursor-pointer mt-3`}
                  onClick={() => router.push(item.link)}
                >
                  <p className='text-md'>Dự án thành công</p>
                  <IconArrowRight color='#1B3864' />
                  <motion.div
                    className='absolute left-0 top-0 h-full w-0'
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                  ></motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        ),
      )}
    </section>
  );
};

export default SolutionOverview;
