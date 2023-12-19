import { PreImage } from '../../common/PreImage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import router from 'next/router';
import IconArrowRight from '../../icon/IconArrowRight';

interface Props {
  title: string;
  icon: string;
  link: string;
}

const InfoCard = ({ title, icon, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  };
  return (
    <motion.div
      className={`flex flex-col justify-center items-center rounded-xl p-5 cursor-pointer overflow-hidden border-collapse bgDefaultInforCard ${
        isHovered ? 'bgHoverInforCard' : ''
      }`}
      style={{ border: '1px solid #555' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
    >
      <div className='flex items-start'>
        <PreImage src={icon} width={75} height={75} alt='solution' className='mb-10' />
      </div>
      <div className='flex flex-col justify-center text-center items-center gap-5'>
        <div className='flex h-[60px] w-full flex-col items-center justify-center'>
          {title.split('//').map((item: string, idx: number) => (
            <h1 key={idx} className='text-base font-medium leading-6 md:text-2xl md:leading-8'>
              {item}
            </h1>
          ))}
        </div>
        <motion.button
          whileHover='hover'
          variants={buttonVariants}
          initial='hidden'
          animate={isHovered ? 'hover' : 'hidden'}
          className={`bg-[#1B3864] relative justify-between items-center gap-3 text-white text-left py-4 px-4 rounded cursor-pointer mt-3 flex`}
          onClick={() => router.push(link)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className='text-sm'>Tìm hiểu thêm</p>
          <IconArrowRight color='#fff' />
          <motion.div
            className='absolute left-0 top-0 h-full w-0 bg-white'
            variants={buttonVariants}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InfoCard;
