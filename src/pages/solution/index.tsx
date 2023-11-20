import Head from "next/head";
import ConnectForm from "@/shared/components/common/ConnectForm";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import SolutionOverview from "@/shared/components/common/SolutionOverview";
import { MetaData } from "@/shared/mock/nextGenerationSolution";
import Banner from "@/shared/components/home/banner";

const solutionData = {
    title: "GIẢI PHÁP",
    description: "Kiến tạo tương lai cùng giải pháp của Metaverse",
    image: "/images/BannerSolution.png"
  }

export function Solution() {
    return (<>
        <Head>
        <title>Giải pháp Metaverse</title>
        <meta name="description" content="Giải pháp Metaverse" />
        <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={solutionData}/>
        <SolutionOverview solution={MetaData}/>
        <ConnectForm/>
    </>)
}

Solution.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
export default Solution;