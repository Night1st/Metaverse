import { fakeMenu } from '@/shared/mock/menu';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Bungee } from 'next/font/google';
import { useRouter } from 'next/router';
import Image from 'next/image';

const bungee = Bungee({ subsets: ['latin-ext'], display: 'swap', weight: ['400'] });

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
  return (
    <section
      className={`w-full flex justify-center items-center sticky top-0 z-50 gap-5 py-5 transition ${
        isScrolled
          ? 'bg-[#1B3864] bg-opacity-100 text-white duration-500 ease-in-out '
          : 'absolute text-white border-b-[1px] border-opacity-50 border-slate-300 inset-0 bg-slate-900 bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out'
      }`}
    >
      <div className='px-8 w-[1440px] flex justify-between items-center'>
        <div className='flex justify-around items-center'>
          <div className={bungee.className}>
            <p className='text-4xl cursor-pointer' onClick={() => router.push("/")}>METAVERSE</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <ul className='justify-center items-cente gap-10 hidden lg:flex ml-10'>
            {fakeMenu.map((item, inx) => (
              <Link href={item.link} key={inx}>
                <li className={`${router.pathname === item.link ? 'opacity-100 border-b border-b-white' : 'opacity-70'}`}>{item.title}</li>
              </Link>
            ))}
          </ul>
          <button
            className='bg-[white] text-black font-bold py-2 px-4 rounded-full cursor-pointer hidden lg:block'
            onClick={() => router.push('/contact')}
          >
            Liên hệ
          </button>
          <button className='bg-[white] text-black font-bold py-2 px-4 rounded-full cursor-pointer flex justify-center items-center'>
            <Image className='mr-2' height={20} width={20} src={'/images/VN.png'} alt={''} />
            <p>VN</p>
          </button>
        </div>
      </div>
      <div className='block md:hidden'>...</div>
    </section>
  );
};

export default Header;
