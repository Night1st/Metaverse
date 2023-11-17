import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PreImage } from "../../common/PreImage";
import IconArrowLeft from "../../icon/IconArrowLeft";
import IconArrowRight from "../../icon/IconArrowRight";
import ContentBanner from "./ContentBanner";
export interface Data {
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data[];
}
const Banner = ({ data }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Data>(data[0] as Data);
  const handleNext = () => {
    setSelectedTab((prevTab): Data | any => {
      const nextIndex = data.indexOf(prevTab) + 1;
      return nextIndex < data.length ? data[nextIndex] : data[0];
    });
  };
  const handlePrev = () => {
    setSelectedTab((prevTab): Data | any => {
      const prevIndex = data.indexOf(prevTab) - 1;
      return prevIndex >= 0 ? data[prevIndex] : data[data.length - 1];
    });
  };
  
  return (
    <section className="block">
      
      <div className="snap-x-mandatory scrollbar-none relative bg-cover flex overflow-hidden text-white bg-[url('/images/BannerHome.png')] rounded-lg">
        
        <div className="w-full flex justify-between items-center mx-auto">
        <ContentBanner selectedTab={selectedTab && selectedTab} />
        </div>
        {/* <div className="absolute bottom-10 right-10">
          <div className="flex items-center justify-between gap-5">
            <ul className="hidden md:flex items-center justify-between gap-5">
              {data.map((item, idx) => (
                <li
                  key={idx}
                  className={`${
                    item === selectedTab ? "text-white" : "text-slate-300 "
                  } cursor-pointer font-medium`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.title}`}
                  {item === selectedTab ? (
                    <motion.div className="" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-5 cursor-pointer z-30">
              <IconArrowLeft onClick={handlePrev} />
              <IconArrowRight onClick={handleNext} />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
