import { A11y, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { companyLogos } from '~/constants';

function PartnersipSection() {
  return (
    <>
      <div className='section compact-top-zero-bottom'>
        <div className='hero-container'>
          <div className='overflow-hidden'>
            <Swiper
              autoplay={{
                // delay: 2500,
                disableOnInteraction: false,
                waitForTransition: true,
                pauseOnMouseEnter: true,
              }}
              freeMode={true}
              modules={[A11y, Autoplay, FreeMode]}
              slidesPerView={5}
              spaceBetween={20}
              loop={true}
              hashNavigation={true}
              grabCursor={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 5,
                },
              }}
              className='swiperPartner'>
              {companyLogos.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.logo}
                    alt='Partner'
                    className='img-fluid partner-img'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnersipSection;
