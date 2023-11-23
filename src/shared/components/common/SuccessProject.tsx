import TitleSection from "./TitleSection";
import React from "react";
import Image from "next/image";
import BtnFindOut from "./BtnFindOut";

const SuccessProject = () => {
    return (
        <section className="px-32 bg-[#E6EAEF] py-2">
          <TitleSection
            title="DỰ ÁN THÀNH CÔNG"
            description="Một số dự án tiêu biểu của Metaverse"
          />
          <div className='grid grid-cols-2 justify-start items-center'>
            <div className='flex justify-center items-center px-10 py-10'>
              <Image className='' height={300} width={300} src={'/images/Solution1.png'} alt={''}></Image>
            </div>
            <div className='flex flex-col gap-3 px-10 py-10'>
              <h1 className='text-[#1B3864] text-4xl '>{"Tiêu đề"}</h1>
              <p className='text-xl'>{"Hệ thống quản lý hoạt động chuỗi Spa Sen Bách Diệp."}</p>
              
            </div>
          </div>
        </section>
    );
}

export default SuccessProject