import { Link } from 'react-router';
import useAnimateOnScroll from '~/hooks/useAnimateOnScroll';

export default function AboutSection() {
  useAnimateOnScroll();

  return (
    <>
      <div className='section'>
        <div className='hero-container'>
          <div className='d-flex flex-column gspace-2'>
            <div className='d-flex flex-column flex-md-row h-100 gspace-2'>
              <div className='about-details'>
                <div className='sub-heading'>
                  <i className='fa-solid fa-circle-notch'></i>
                  <h6 className='font-family-1 accent-color'>About Us</h6>
                </div>
                <h2
                  className='animate-box animated animate__animated'
                  data-animate='animate__fadeInUp'>
                  We Transform Your Business Through Strategic Marketing
                  Excellence
                </h2>
                <p
                  className='animate-box animated animate__animated'
                  data-animate='animate__fadeInUp'>
                  We combine strategic insights with creative excellence to
                  deliver marketing solutions that drive measurable results and
                  sustainable growth for your business.
                </p>
                <div>
                  <Link to='#' className='btn btn-accent'>
                    Learn More
                  </Link>
                </div>
              </div>
              <div className='about-image-wrapper'>
                <div className='image-container'>
                  <img
                    src='/assets/images/team-of-young-successful-designers-gathered-by-wor-2023-11-27-04-57-08-utc_result.webp'
                    alt='About Image'
                    className='img-fluid animate-box animated animate__animated'
                    data-animate='animate__fadeInRight'
                  />
                </div>
                <div
                  className='card about-traffic-card animate-box animated animate__animated'
                  data-animate='animate__zoomIn'>
                  <div className='d-flex flex-column gspace-2 align-self-center text-center'>
                    <i className='fa-solid fa-2x fa-chart-simple'></i>
                    <p className='secondary-accent mb-0'>Montly Trafic</p>
                    <h2 className='secondary-accent'>100 K</h2>
                  </div>
                  <div className='d-flex justify-content-center accent-color'>
                    <i className='fa-solid fa-arrow-trend-up'></i>
                    <p className='description'>+70%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='about-spacer'></div>
            <div className='row row-cols-md-3 row-cols-1 grid-spacer-2'>
              <div className='col'>
                <div
                  className='card card-about animate-box animated-fast animate__animated'
                  data-animate='animate__fadeInUp'>
                  <div className='d-flex flex-column flex-lg-row gspace-2'>
                    <div className='icon-circle align-self-lg-center align-self-start'>
                      <i className='fa-solid fa-lightbulb'></i>
                    </div>
                    <div className='d-flex flex-column gspace-2'>
                      <h3 className='secondary-accent'>Our Philosophy</h3>
                      <p className='secondary-accent'>
                        We believe in innovative solutions that empower
                        businesses to thrive in a competitive landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div
                  className='card card-about animate-box animated animate__animated'
                  data-animate='animate__fadeInUp'>
                  <h3 className='secondary-accent'>Our Vision</h3>
                  <p className='secondary-accent'>
                    Our vision is to lead the industry by providing innovative
                    marketing solutions that inspire growth and success for our
                    clients.
                  </p>
                </div>
              </div>
              <div className='col'>
                <div
                  className='card card-about animate-box animated-slow animate__animated'
                  data-animate='animate__fadeInUp'>
                  <h3 className='secondary-accent'>Our Mission</h3>
                  <p className='secondary-accent'>
                    Our mission is to empower businesses with innovative
                    marketing strategies that drive growth and foster lasting
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
