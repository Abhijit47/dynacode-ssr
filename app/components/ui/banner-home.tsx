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
              Transform Your{' '}
              <span className='accent-color'>Online Business</span> With Aspire{' '}
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
                  Viverra vitae congue eu consequat ac. Tortor condimentum
                  lacinia quis vel eros donec. Faucibus interdum posuere lorem
                  ipsum. Lacus sed turpis tincidunt id aliquet risus. In aliquam
                  sem fringilla ut morbi tincidunt augue interdum velit.
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
                <a href='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>fb</span>
                  <i className='fa-brands fa-facebook-f'></i>
                </a>
                <a href='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>twitter</span>
                  <i className='fa-brands fa-x-twitter'></i>
                </a>
                <a href='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>instagram</span>
                  <i className='fa-brands fa-instagram'></i>
                </a>
                <a href='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>pnterest</span>
                  <i className='fa-brands fa-pinterest'></i>
                </a>
                <a href='#' className='social-item primary-accent'>
                  <span className={'visually-hidden'}>youtube</span>
                  <i className='fa-brands fa-youtube'></i>
                </a>
              </div>
              <div className='d-flex flex-row flex-wrap gap-4 justify-content-center text-center'>
                <p>Proven Result</p>
                <p>Experienced Team</p>
                <p>Affordable Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerHome;
