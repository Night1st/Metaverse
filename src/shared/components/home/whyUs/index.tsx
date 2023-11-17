import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { useState } from 'react';
import TextHighLight from '../../common/TextHighLight';
import ContentWhyUs from './ContentWhyUs';
import IconNGS from './IconNGS';
import { motion } from 'framer-motion';
import IconArrowLeft from '../../icon/IconArrowLeft';
import IconArrowRight from '../../icon/IconArrowRight';

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
    <>
      <section className='mx-auto px-32 py-10'>
        <div className='w-full flex flex-col justify-around items-center'>
          <TextHighLight text='VỀ CHÚNG TÔI' />
          <div className='flex items-center justify-between gap-10 py-5'>
            {data.map((item, index) => (
              <button
                key={index}
                className={`${item == selectedIcon && "bg-[#1B3864] text-white transition duration-750 ease-in-out"} relative flex justify-between items-center text-black text-left py-4 px-4 rounded-full cursor-pointer`}
                style={{ border: "1px solid #000" }}
                onClick={() => setSelectedIcon(item)}
              >
                {`${item.title}`}
              </button>
            ))}
          </div>
          <div className='w-full flex justify-center items-center gap-10'>
            {/* <div className='w-full z-40 float-right'>
              <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
            </div> */}
            <motion.button
              initial={{ backgroundColor: 'var(--blue-color-400)' }}
              whileHover='hover'
              className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer`}
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
              className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer`}
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
        </div>
      </section>
    </>
  );
};

export default WhyUs;
