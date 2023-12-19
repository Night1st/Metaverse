import { AnimatePresence, motion } from 'framer-motion';
import { Data } from '.';
import { Bungee } from 'next/font/google';
import IconArrowRight from '../../icon/IconArrowRight';
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
interface Props {
  data: Data;
  text: string;
  handleClick?: any;
}
const bungee = Bungee({ subsets: ['latin-ext'], display: 'swap', weight: ['400'] });
const ContentBanner = ({ data, text, handleClick }: Props) => {
  const src = data.image;
  return (
    <div
      style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className={`w-full flex min-h-screen flex-col justify-center items-center leading-[90%] tracking-wide bg-cover lg:left-0 md:px-32 lg:px-72 lg:items-start mx-auto px-4 gap-5`}
    >
      <div className='text-left text-4xl md:text-6xl font-bold capitalize lg:text-8xl'>
        <AnimatePresence mode='wait'>
          <motion.span
            variants={staggerChildren}
            animate='animate'
            className={data.title == 'METAVERSE' ? bungee.className : ''}
          >
            {data.title}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className='text-2xl lg:text-5xl mt-5 font-semibold' style={{ lineHeight: '62px' }}>
        {data.description}
      </motion.div>
      {text && (
        <div className='mb-4 flex justify-end'>
          <motion.button
            whileHover='hover'
            className={`bg-[#1B3864] relative flex justify-between items-center gap-3 text-white text-left py-4 px-4 rounded-md cursor-pointer mt-3`}
            onClick={handleClick}
          >
            <p className='text-md'>{text}</p>
            <IconArrowRight color='#fff' />
            <motion.div
              className='absolute left-0 top-0 h-full w-0'
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            ></motion.div>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ContentBanner;
