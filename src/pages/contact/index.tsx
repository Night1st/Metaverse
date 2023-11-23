import Head from "next/head";
import ConnectForm from "@/shared/components/common/ConnectForm";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import SolutionOverview from "@/shared/components/common/SolutionOverview";
import { MetaData } from "@/shared/mock/nextGenerationSolution";
import Banner from "@/shared/components/home/banner";
import ContactInfo from "@/shared/components/home/contactInfo";

const contactData = {
    title: "LIÊN HỆ",
    description: "Metaverse luông sẵn sàng tư vấn và giải đáp mọi thắc mắc",
    image: "/images/BannerContact.png"
}

export function Contact() {
    return (<>
        <Head>
        <title>Liên hệ</title>
        <meta name="description" content="Liên hệ" />
        <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        </Head>
        <Banner data={contactData}/>
        <ContactInfo/>
        <ConnectForm/>
    </>)
}

Contact.getLayout = (children: React.ReactNode) => (
    <LayoutWebsite>{children}</LayoutWebsite>
  );
export default Contact;