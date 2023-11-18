import { PreImage } from "../../common/PreImage";
import { motion } from "framer-motion";
import { useState } from "react";
import BtnFindOut from "../../common/BtnFindOut";

interface Props {
  title: string;
  icon: string
}

const InfoCard = ({ title, icon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col justify-center items-center rounded-xl p-5 cursor-pointer overflow-hidden border-collapse"
      style={{ border: "1px solid #555" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "#1B3864" : "#fff",
        color: isHovered ? "#fff" : "#000",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-start">
        <PreImage
          src={icon}
          width={50}
          height={50}
          alt="solution"
          className="mb-10"
        />
      </div>
      <div className="flex flex-col justify-center text-center items-center gap-10">
        <h1 className="text-2xl">{title}</h1>
        {/* <p>{description}</p> */}
        <BtnFindOut />
      </div>
    </motion.div>
  );
};

export default InfoCard;
