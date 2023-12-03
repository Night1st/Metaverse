import React, { useState } from 'react';
import Image from "next/image";
import BtnFindOut from './BtnFindOut';
import { motion } from 'framer-motion';
import router from 'next/router';
import IconLineDirection from '../icon/IconLineDirection';

const data = [
    "Quản lý doanh nghiệp",
    "Định giá tài sản",
    "Giáo dục trực tuyến",
    "Ứng dụng trong giải trí"
]

const ConnectForm = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  return (
    <>
      <section className='mx-auto px-32 py-10'>
        <div className='bg-[#1B3864] p-5 justify-around items-center rounded-lg'>
          <h1 className='text-center text-white text-5xl'>Kết nối với Metaverse</h1>
          <div className='grid grid-cols-2 gap-4 py-10 justify-between text-white'>
            <div className='flex flex-col justify-center text-center'>
              <p>Hãy nói cho Metaverse những gì bạn cần, chúng tôi sẽ liên hệ lại sớm nhất</p>
              <Image className='ml-auto mr-auto py-10' height={400} width={400} src={'/images/Objects.png'} alt={''} />
            </div>
            <div className='flex flex-col'>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>
                  Họ tên *
                </label>
                <input
                  className='bg-[#1B3864] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='Vui lòng cho biết họ tên của bạn'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>
                  Số điện thoại
                </label>
                <input
                  className='bg-[#1B3864] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='text'
                  placeholder='Nhập số điện thoại của bạn'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2'>
                  Email
                </label>
                <input
                  className='bg-[#1B3864] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='text'
                  placeholder='Nhập email của bạn'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold'>
                  Điều bạn quan tâm
                </label>
                <div className='flex gap-3 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {data.map((item, index) => (
                        <button
                            key={index}
                            className={`${item == selectedIcon && "bg-[white] text-black transition duration-750 ease-in-out"} justify-between items-center py-3 px-3 rounded-full cursor-pointer`}
                            style={{ border: "1px solid #fff" }}
                            onClick={() => setSelectedIcon(item)}
                        >{`${item}`}</button>
                    ))}
                </div>
                <input
                  className='bg-[#1B3864] appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='text'
                  placeholder='Nếu bạn quan tâm điều khác, vui lòng cho chúng tôi biết.'
                />
              </div>
              <div className='mb-4 flex justify-end'>
              <motion.button
                whileHover="hover"
                className={`bg-[white] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer mt-3`}
                onClick={() => router.push('')}
              >
                <p className="text-sm">{"Kết nối"}</p>
                <IconLineDirection  color="#000" />
                <motion.div
                  className="absolute left-0 top-0 h-full w-0"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectForm;
