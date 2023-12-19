import { footerData } from '@/shared/mock/footer';
import InforFooter from './info';
import { Bungee } from 'next/font/google';
import Image from 'next/image';

const bungee = Bungee({ subsets: ['latin-ext'], display: 'swap', weight: ['400'] });

const Footer = () => {
  return (
    <section className='w-full flex flex-col gap-10 justify-between items-center mx-auto px-4 md:px-12 lg:px-24 py-10 bg-[#1B3864] text-white font-thin'>
      <div className='max-w-[1440px] grid grid-cols-5 gap-10 justify-start items-start px-4'>
        <div className='col-span-2 flex flex-col justify-center items-start gap-1 pr-5'>
          <div className={bungee.className}>
            <p className='text-6xl'>METAVERSE</p>
          </div>
          <div className='flex gap-3 py-2'>
            {footerData.icon.map((item, idx) => (
              <Image key={idx} height={30} width={30} src={item.icon} alt={''}></Image>
            ))}
          </div>
          {footerData.contactData.map((item, idx) => (
            <p key={idx} className='flex items-start gap-2'>
              <Image height={30} width={30} src={item.icon} alt={''}></Image>
              {item.title}
            </p>
          ))}
        </div>
        <div className='flex flex-col min-h-[300px]'>
          <InforFooter title='Giải pháp' info={footerData.service} />
        </div>
        <div className='flex flex-col min-h-[300px]'>
          <InforFooter title='Về Metaverse' info={footerData.aboutUs} />
        </div>
        <div className='flex flex-col min-h-[300px]'>
          <InforFooter title='Hỗ trợ' info={footerData.support} />
        </div>
      </div>
      <div className='w-full flex justify-end items-center border-t-2 pt-5'>
        <p>Bản quyền thuộc về Công ty Metaverse</p>
      </div>
    </section>
  );
};

export default Footer;
