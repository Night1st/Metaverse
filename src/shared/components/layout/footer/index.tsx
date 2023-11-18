import { footerData } from "@/shared/mock/footer";
import FooterNGS from "../../icon/logo/FooterNGS";
import InforFooter from "./info";
import { Bungee } from 'next/font/google'

const bungee = Bungee({ subsets: ["latin-ext"], display: 'swap', weight: ['400'] })

const Footer = () => {
  return (
    <section className="w-full flex flex-col gap-5 justify-between items-center mx-auto px-16 py-10 bg-[#160A0F] text-white font-thin">
      <div className="grid grid-cols-4 gap-4 justify-start items-center align-top">
        <div className="flex flex-col justify-center items-start">
          <div className={bungee.className}>
            <p className="text-4xl">METAVERSE</p>
          </div>
          <p>Địa chỉ: {footerData.contactData.address}</p>
          <p>Số điện thoại: {footerData.contactData.phone}</p>
          <p>Email: {footerData.contactData.email}</p>
        </div>
        <div className="flex flex-col">
          <InforFooter title="Giải pháp" info={footerData.service} />
        </div>
        <div className="flex flex-col">
          <InforFooter title="Về Metaverse" info={footerData.aboutUs } />
        </div>
        <div className="flex flex-col">
          <InforFooter title="Hỗ trợ" info={footerData.support} />
        </div>
      </div>
      <div className="w-full flex justify-end items-center border-t-2 pt-5">
        <p>Bản quyền thuộc về Công ty Metaverse</p>
      </div>
    </section>
  );
};

export default Footer;
