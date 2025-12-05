import { services } from '~/constants';
import useAnimateOnScroll from '~/hooks/useAnimateOnScroll';
import ServiceCard from './service-card';
export default function ServiceSection() {
  useAnimateOnScroll();

  return (
    <>
      <div className='section spacious-bottom'>
        <div className='hero-container'>
          <div className='d-flex flex-column gspace-2'>
            <div className='service-heading-container'>
              <div className='sub-heading justify-content-center'>
                <i className='fa-solid fa-circle-notch'></i>
                <h6 className='font-family-1 accent-color'>Services</h6>
              </div>
              <h2
                className='text-center animate-box animated animate__animated'
                data-animate='animate__fadeInUp'>
                Comprehensive Solutions for Your Digital Growth
              </h2>
            </div>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2'>
              {services.map((item, index) => (
                <div className='col' key={item.id}>
                  <ServiceCard
                    id={item.id}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    link={item.link}
                    highlight={index === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
