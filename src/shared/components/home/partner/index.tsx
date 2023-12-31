import { partnerData } from "@/shared/mock/partner";
import { PreImage } from "../../common/PreImage";
import TitleSection from "../../common/TitleSection";

const Partner = () => {
  return (
    <section className="bg-[var(--blue-color-500)]">
      <div className="px-32">
        <TitleSection
          title="Dịch vụ"
          description="Thay đổi bộ mặt Doanh nghiệp của bạn bằng giải pháp quản lý mới"
        />
        <div className="w-full mt-10 flex items-start justify-between gap-5" style={{borderBottom: "1px solid #555"}}>
          {partnerData.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <PreImage
              src={item.logo}
              height={200}
              width={200}
              layer={false}
              alt={"Service"}
              className="relative rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
