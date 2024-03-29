import Head from 'next/head';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Banner from '@/shared/components/home/banner';
import NextGenerationSolution from '@/shared/components/home/nextGenerationSolution';
import WhyUs from '@/shared/components/home/whyUs';
import Testimonial from '@/shared/components/home/testimonial';
import Service from '@/shared/components/home/service';
import { WhyUsData } from '@/shared/mock/whyUs';
import ConnectForm from '@/shared/components/common/ConnectForm';

const homeData = {
  title: 'METAVERSE',
  description: 'Nơi cung cấp giải pháp phù hợp, toàn diện và đồng hành cùng quá trình phát triển của khách hàng',
  image: '/images/BannerHome.png',
};

export function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name='description' content='Trang chủ Metaverse' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <Banner data={homeData} text='Tìm hiểu thêm' />
      <NextGenerationSolution />
      <WhyUs data={WhyUsData} />
      <Testimonial />
      <ConnectForm />
      <Service />
    </>
  );
}
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Home;
