import { motion } from "framer-motion";
import IconLineDirection from "../icon/IconLineDirection";
import { useRouter } from "next/router";

interface Props {
  text?: string;
  cls?: any;
  link: string
}

const BtnFindOut = ({ cls, text, link }: Props) => {
  const router = useRouter()
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
      onClick={() => router.push('/solution/detail1')}
    >
      <p className="text-sm">{text ? text : "Tìm hiểu thêm"}</p>
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
