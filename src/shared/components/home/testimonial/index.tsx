import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PreImage } from '../../common/PreImage';
import TitleSection from '../../common/TitleSection';

const Testimonial = () => {
  let srcImages = [
    '/images/TheCup.png',
    'https://sba.net.vn/wp-content/themes/indutri/images/logo-mobile.png',
    '/images/senbachdiep_logo.jpg',
    '/images/golf_ranking_logo.jpg',
    'https://theme.hstatic.net/200000563047/1000913701/14/logo.png?v=342'
  ];
  return (
    <section className='max-w-[1440px] mx-auto px-4 py-4 md:py-8 lg:py-10 xl:py-24'>
      <div className='w-full flex flex-col justify-around items-center text-center'>
        <TitleSection title='KHÁCH HÀNG' description='Những đơn vị đã hài lòng với giải pháp của Metaverse' />
        <div className='mt-20 hidden w-full items-start justify-between md:flex'>
          <Swiper
            className='mySwiper w-[1980px]'
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop
          >
            {srcImages.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className={`relative cursor-pointer`}>
                  <PreImage width={232} height={100} src={item as string} layer={false} alt={item} className='object-contain' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
