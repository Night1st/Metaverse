import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import IconArrowRight from '../icon/IconArrowRight';
import TitleSection from './TitleSection';

const data = ['Quản lý doanh nghiệp', 'Định giá tài sản', 'Giáo dục trực tuyến', 'Ứng dụng trong giải trí'];

const ConnectForm = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [open, setOpen] = useState(false);
  return (
    <section className='max-w-[1440px] mx-auto px-4 py-10'>
      <div className='bg-[#1B3864] p-10 justify-around items-center rounded-lg'>
        <TitleSection title='Kết nối với Metaverse' description='' className='mb-5' color='white' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-24 justify-between items-start text-white'>
          <div className='md:col-span-1 flex-col justify-center text-center hidden md:block'>
            <p className='text-xl leading-7'>
              Hãy nói cho Metaverse những gì bạn cần, chúng tôi sẽ liên hệ lại sớm nhất
            </p>
            <Image className='ml-auto mr-auto py-10' height={400} width={400} src={'/images/Objects.png'} alt={''} />
          </div>
          <div className='md:col-span-2 flex flex-col px-0 md:px-12'>
            <div className='mb-4'>
              <label className='block text-lg font-bold mb-2'>Họ tên *</label>
              <input
                className='bg-[#1B3864] appearance-none border w-full py-5 px-5 leading-tight focus:outline-none focus:shadow-outline rounded-lg'
                id='username'
                type='text'
                placeholder='Vui lòng cho biết họ tên của bạn'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lg font-bold mb-2'>Số điện thoại</label>
              <input
                className='bg-[#1B3864] appearance-none border w-full py-5 px-5 leading-tight focus:outline-none focus:shadow-outline rounded-lg'
                id='password'
                type='text'
                placeholder='Nhập số điện thoại của bạn'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lg font-bold mb-2'>Email</label>
              <input
                className='bg-[#1B3864] appearance-none border w-full py-5 px-5 leading-tight focus:outline-none focus:shadow-outline rounded-lg'
                id='password'
                type='text'
                placeholder='Nhập email của bạn'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lg font-bold'>Điều bạn quan tâm</label>
              <div className='gap-3 py-5 flex flex-wrap'>
                {data.map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      item == selectedIcon && 'bg-[white] text-black transition duration-750 ease-in-out'
                    } justify-between items-center py-3 px-3 rounded-full cursor-pointer`}
                    style={{ border: '1px solid #fff' }}
                    onClick={() => setSelectedIcon(item)}
                  >{`${item}`}</button>
                ))}
              </div>
              <input
                className='bg-[#1B3864] appearance-none border rounded w-full py-5 px-5 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='text'
                placeholder='Nếu bạn quan tâm điều khác, vui lòng cho chúng tôi biết.'
              />
            </div>
            <div className='mb-4 flex justify-end'>
              <button
                className={`bg-[white] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded-md cursor-pointer mt-3`}
                onClick={() => setOpen(true)}
              >
                <p className='text-md'>Kết nối</p>
                <IconArrowRight color='#000' />
              </button>
              <Modal open={open} onClose={() => setOpen(false)}>
                <div className='text-center w-full flex flex-col gap-5'>
                  <h1 className='text-4xl text-black pt-10'>Kết nối thành công</h1>
                  <p className='text-2xl text-black'>
                    Bạn đã kết nối với Metaverse thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất.
                  </p>
                  <Image
                    className='ml-auto mr-auto py-10'
                    height={400}
                    width={400}
                    src='/images/ConnectSuccess.png'
                    alt='images_connect'
                  />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectForm;
