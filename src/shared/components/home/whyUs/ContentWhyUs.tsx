import { IWhyUsData, WhyUsData } from "@/shared/mock/whyUs";
import { motion } from "framer-motion";
import IconArrowLeft from "../../icon/IconArrowLeft";
import IconArrowRight from "../../icon/IconArrowRight";
import { useState } from "react";

interface Props {
  selectedIcon: IWhyUsData;
}
const ContentWhyUs = ({ selectedIcon}: Props) => {
  const data : IWhyUsData[] = WhyUsData
  const [selectedTab, setSelectedTab] = useState<IWhyUsData>(data[0] as IWhyUsData);
  const buttonVariants = {
    hover: {
      backgroundColor: "var(--blue-color-600)",
      width: "100%",
      opacity: 0.3      
    },
  };
  const handleNext = () => {
    setSelectedTab((prevTab): IWhyUsData | any => {
      const nextIndex = data.indexOf(prevTab) + 1;
      return nextIndex < data.length ? data[nextIndex] : data[0];
    });
  };
  const handlePrev = () => {
    setSelectedTab((prevTab): IWhyUsData | any => {
      const prevIndex = data.indexOf(prevTab) - 1;
      return prevIndex >= 0 ? data[prevIndex] : data[data.length - 1];
    });
  };
  return (
    <div className="w-2/3 flex gap-10 justify-start items-start">
    <motion.button
      initial={{ backgroundColor: "var(--blue-color-400)" }}
      whileHover="hover"
      className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer mt-12`}
    >
      <IconArrowLeft onClick={handlePrev}/>
      <motion.div
        className="absolute left-0 top-0 h-full w-0"
        variants={buttonVariants}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.button>
    <motion.div className="text-sm lg:text-lg bg-slate-200 p-10 rounded-2xl">
        {selectedIcon ? selectedIcon.description : ""}
      </motion.div>
    <motion.button
      initial={{ backgroundColor: "var(--blue-color-400)" }}
      whileHover="hover"
      className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer mt-12`}
    >
      <IconArrowRight onClick={handleNext}/>
      <motion.div
        className="absolute left-0 top-0 h-full w-0"
        variants={buttonVariants}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.button>

    </div>
  );
};

export default ContentWhyUs;
