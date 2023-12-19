import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { motion } from 'framer-motion';

interface Props {
  selectedIcon: IWhyUsData;
}
const ContentWhyUs = ({ selectedIcon }: Props) => {
  return (
    <div className='w-full flex gap-10 justify-center items-center'>
      <motion.div className='min-h-[200px] flex justify-center items-center text-lg md:text-xl lg:text-2xl bg-slate-200 p-8 rounded-xl w-full'>
        {selectedIcon ? selectedIcon.description : ''}
      </motion.div>
    </div>
  );
};

export default ContentWhyUs;
