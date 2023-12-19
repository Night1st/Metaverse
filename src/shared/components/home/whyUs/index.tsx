import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { useState } from 'react';
import ContentWhyUs from './ContentWhyUs';
import { motion } from 'framer-motion';
import IconArrowLeft from '../../icon/IconArrowLeft';
import IconArrowRight from '../../icon/IconArrowRight';
import TitleSection from '../../common/TitleSection';
import React from 'react';

interface Props {
  data: IWhyUsData[];
}

const WhyUs = ({ data }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<IWhyUsData>(WhyUsData[0] as IWhyUsData);
  const handleNext = () => {
    setSelectedIcon((prevTab): IWhyUsData | any => {
      const nextIndex = data.indexOf(prevTab) + 1;
      return nextIndex < data.length ? data[nextIndex] : data[0];
    });
  };
  const handlePrev = () => {
    setSelectedIcon((prevTab): IWhyUsData | any => {
      const prevIndex = data.indexOf(prevTab) - 1;
      return prevIndex >= 0 ? data[prevIndex] : data[data.length - 1];
    });
  };
  return (
    <React.Fragment>
      <section className='w-full py-4 md:py-8 lg:py-10 xl:py-24 bg-aboutUs-fade'>
        <div className='max-w-[1440px] grid grid-cols-1 justify-center items-center gap-5 mx-auto px-4 md:px-12 lg:px-24'>
          <TitleSection title='VỀ CHÚNG TÔI' description='' />
          <div className='relative w-full mb-16 mx-auto flex flex-col md:flex-row items-center justify-center gap-10'>
            {data.map((item, index) => (
              <button
                key={index}
                className={`${
                  item == selectedIcon ? 'bg-[#1B3864] text-white transition duration-750 ease-in-out' : 'bg-white'
                } relative flex justify-center items-center text-black text-left py-4 px-4 rounded-full cursor-pointer w-48`}
                style={{ border: '1px solid #000' }}
                onClick={() => setSelectedIcon(item)}
              >
                <p className='text-2xl text-center'>{`${item.title}`}</p>
              </button>
            ))}
            <div className='w-2/3 border border-[#1B3864] absolute z-[-10] hidden md:block'></div>
          </div>
          <div className='w-full mb-16 flex justify-center items-center gap-10'>
            <motion.button
              initial={{ backgroundColor: 'var(--blue-color-400)' }}
              whileHover='hover'
              className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 cursor-pointer rounded-xl`}
            >
              <IconArrowLeft onClick={handlePrev} />
              <motion.div
                className='absolute left-0 top-0 h-full w-0'
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              ></motion.div>
            </motion.button>
            <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} />
            <motion.button
              initial={{ backgroundColor: 'var(--blue-color-400)' }}
              whileHover='hover'
              className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded-xl cursor-pointer`}
            >
              <IconArrowRight onClick={handleNext} />
              <motion.div
                className='absolute left-0 top-0 h-full w-0'
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              ></motion.div>
            </motion.button>
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-10 justify-start items-start mt-5'>
            <div className='border-card-aboutUs flex flex-col justify-start items-center text-center pr-6'>
              <p className='text-5xl text-[#1B3864]'>+05</p>
              <h1 className='text-2xl py-3'>năm hình thành và phát triển</h1>
            </div>
            <div className='border-card-aboutUs flex flex-col justify-start items-center pr-6'>
              <p className='text-5xl text-[#1B3864]'>+10</p>
              <h1 className='text-2xl py-3'>nhân sự</h1>
            </div>
            <div className='border-card-aboutUs flex flex-col justify-start items-center pr-6'>
              <p className='text-5xl text-[#1B3864]'>+15</p>
              <h1 className='text-2xl py-3'>khách hàng</h1>
            </div>
            <div className='border-card-aboutUs flex flex-col justify-start items-center pr-6'>
              <p className='text-5xl text-[#1B3864]'>+20</p>
              <h1 className='text-2xl py-3'>dự án thành công</h1>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WhyUs;
