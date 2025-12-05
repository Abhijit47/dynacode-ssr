import { Link } from 'react-router';
import useAnimateOnScroll from '~/hooks/useAnimateOnScroll';
function CtaSection() {
  useAnimateOnScroll();

  return (
    <>
      <div
        className='section py-0 animate-box animated animate__animated'
        data-animate='animate__zoomIn'>
        <div className='hero-container'>
          <div className='cta-banner'>
            <div className='cta-content'>
              <div className='cta-container'>
                <h2 className='secondary-accent'>
                  Unlock Your Potential, Reach Out and Transform Your Business!
                </h2>
                <p>
                  Elevate your business with our innovative solutions tailored
                  to your needs.
                </p>
                <div>
                  <Link to='/contact-us' className='btn btn-secondary-accent'>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaSection;
