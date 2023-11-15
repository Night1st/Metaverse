import { motion } from "framer-motion";
import IconLineDirection from "../icon/IconLineDirection";
import { Bungee } from 'next/font/google'

interface Props {
  cls?: any;
}

const bungee = Bungee({ subsets: ["latin-ext"], display: 'swap', weight: ['400'] })

const BtnFindOut = ({ cls }: Props) => {
  const buttonVariants = {
    hover: {
      backgroundColor: "var(--blue-color-600)",
      width: "100%",
      opacity: 0.3      
    },
  };

  return (
    <motion.button
      initial={{ backgroundColor: "var(--blue-color-400)" }}
      whileHover="hover"
      className={`bg-[var(--blue-color-400)] relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer mt-3 ${cls}`}
    >
      <div className={bungee.className}>
      <p className="text-sm">Tìm hiểu thêm</p>
      </div>

      <IconLineDirection  color="#000" />
      <motion.div
        className="absolute left-0 top-0 h-full w-0"
        variants={buttonVariants}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.button>
  );
};

export default BtnFindOut;
