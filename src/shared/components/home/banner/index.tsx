import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PreImage } from '../../common/PreImage';
import IconArrowLeft from '../../icon/IconArrowLeft';
import IconArrowRight from '../../icon/IconArrowRight';
import ContentBanner from './ContentBanner';
export interface Data {
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data;
  text: string;
  handleClick?: any;
}
const Banner = ({ data, text, handleClick }: Props) => {
  return (
    <div className='w-full snap-x-mandatory bottom-24 scrollbar-none relative flex overflow-hidden text-white rounded-lg'>
      <div className='w-full flex justify-between items-center mx-auto'>
        <ContentBanner data={data} text={text} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Banner;
