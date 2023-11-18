import { NGSDataService } from "@/shared/mock/service";
import { PreImage } from "../../common/PreImage";
import TitleSection from "../../common/TitleSection";
import ServiceSection from "./ServiceSection";
import { AnimatePresence } from "framer-motion";

const Service = () => {
  return (
    <section className="px-32 text-center">
      <TitleSection
        title="CÓ THỂ BẠN QUAN TÂM"
        description="Một số câu hỏi thường gặp có thể giải đáp thắc mắc cho bạn"
      />
      <div className="w-full mt-10 flex items-start justify-center">
        <AnimatePresence>
        <div className="w-1/2 flex flex-col justify-center items-center">
          {NGSDataService.map((item, idx) => {
            return <ServiceSection key={idx} item={item} idx={idx} />;
          })}
        </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Service;
