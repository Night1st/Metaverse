import { fakeMenu } from "@/shared/mock/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PreImage } from "../../common/PreImage";
import logo from "../../../../../public/logo.svg";
import { Bungee } from 'next/font/google'

const bungee = Bungee({ subsets: ["latin-ext"], display: 'swap', weight: ['400'] })

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (  
    <section
      className={`w-full sticky top-0 z-50 flex justify-between items-center gap-5 px-5 py-5 md:px-40 transition ${isScrolled
          ? "bg-[#1B3864] bg-opacity-100 text-white duration-500 ease-in-out "
          : "absolute text-white border-b-[1px] border-opacity-50 border-slate-300 inset-0 bg-slate-900 bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out"
        }`}
    >
      <div className="flex justify-around items-center">
        <div className={bungee.className}>
          <p className="text-4xl">METAVERSE</p>
        </div>
        {/* <PreImage height={100} width={100} src={logo} alt={"Logo"} layer={false} /> */}

      </div>
      <div className="flex justify-center items-center gap-10">
        <ul className="justify-center items-cente gap-10 hidden lg:flex ml-10">
            {fakeMenu.map((item, inx) => (
              <Link href={"#"} key={inx}>
                <li>{item}</li>
              </Link>
            ))}
        </ul>
        <button className="bg-[white] text-black font-bold py-2 px-4 rounded cursor-pointer hidden lg:block">
          Liên hệ
        </button>
      </div>
      <div className="block md:hidden">...</div>
    </section>
  );
};

export default Header;
