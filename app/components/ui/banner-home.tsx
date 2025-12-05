import { Link } from 'react-router';
import { bannerTags } from '~/constants';
import useAnimateOnScroll from '~/hooks/useAnimateOnScroll';
import VideoButton from './video-button';

function BannerHome() {
  useAnimateOnScroll();

  return (
    <>
      <div className='section'>
        <div className='hero-container'>
          <div className='banner-heading'>
            <h1
              className='font-family-1 animate-box animated animate__animated'
              data-animate='animate__fadeInUp'>
              Elevate Your{' '}
              <span className='accent-color'>Digital Presence</span> & Scale
              Faster With DynaCode{' '}
            </h1>
            <div className='banner-client-container'>
              <div className='banner-client-rating'>
                <div>
                  <img
                    src='/assets/images/Team1.jpg'
                    alt='client-1'
                    className='banner-client-person animate-box animated animate__animated'
                    data-animate='animate__fadeIn'
                  />
                  <img
                    src='/assets/images/Team2.jpg'
                    alt='client-2'
                    className='banner-client-person animate-box animated animate__animated'
                    data-animate='animate__fadeIn'
                  />
                  <img
                    src='/assets/images/Team3.jpg'
                    alt='client-3'
                    className='banner-client-person animate-box animated animate__animated'
                    data-animate='animate__fadeIn'
                  />
                  <img
                    src='/assets/images/Team4.jpg'
                    alt='client-4'
                    className='banner-client-person animate-box animated animate__animated'
                    data-animate='animate__fadeIn'
                  />
                </div>
                <div className='d-flex flex-column gspace-0'>
                  <h3 className='font-family-1 secondary-accent'>1500+</h3>
                  <p className='m-0'>Trusted Clients</p>
                </div>
              </div>
              <div className='banner-text-description'>
                <p>
                  Transform your business with our expert web solutions. We
                  deliver scalable, high-performance applications tailored to
                  your unique needs and goals.
                </p>
              </div>
            </div>
            <div
              className='banner-home animate-box animated animate__animated'
              data-animate='animate__fadeIn'>
              <div className='banner-icon-container'>
                {bannerTags.map((tag) => (
                  <div className='banner-icon' key={tag.id}>
                    {tag.title}
                  </div>
                ))}
              </div>
              <div className='d-flex flex-wrap d-flex flex-wrap justify-content-between align-items-end z-2'>
                <div>
                  <Link to='./portfolio' className='btn btn-secondary-accent'>
                    View Portfolio
                  </Link>
                </div>

                <VideoButton videoUrl='https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1' />
              </div>
            </div>
            <div className='d-flex flex-column flex-sm-row gap-4 justify-content-between'>
              <div className='social-container'>
                <Link to='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>fb</span>
                  <i className='fa-brands fa-facebook-f'></i>
                </Link>
                <Link to='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>twitter</span>
                  <i className='fa-brands fa-x-twitter'></i>
                </Link>
                <Link to='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>instagram</span>
                  <i className='fa-brands fa-instagram'></i>
                </Link>
                <Link to='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>pnterest</span>
                  <i className='fa-brands fa-pinterest'></i>
                </Link>
                <Link to='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>youtube</span>
                  <i className='fa-brands fa-youtube'></i>
                </Link>
              </div>
              <div className='d-flex flex-row flex-wrap gap-4 justify-content-center text-center'>
                <div className='result-item'>
                  <h4 className='font-family-1 secondary-accent'>
                    Proven Results
                  </h4>
                  <p className='m-0'>Delivering measurable success</p>
                </div>
                <div className='result-item'>
                  <h4 className='font-family-1 secondary-accent'>
                    Expert Team
                  </h4>
                  <p className='m-0'>Skilled professionals ready to help</p>
                </div>
                <div className='result-item'>
                  <h4 className='font-family-1 secondary-accent'>
                    Affordable Pricing
                  </h4>
                  <p className='m-0'>Quality solutions within your budget</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerHome;
