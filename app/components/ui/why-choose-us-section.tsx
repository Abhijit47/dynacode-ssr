import useAnimateOnScroll from '~/hooks/useAnimateOnScroll';

export default function WhyChooseUsSection() {
  useAnimateOnScroll();

  return (
    <>
      <div className='section spacious-bottom'>
        <div className='hero-container'>
          <div className='d-flex flex-column flex-lg-row gap-4'>
            <div className='whychooseus-image'>
              <div className='image-container'>
                <img
                  src='./assets/images/business-people-meeting-conference-corporate-conce-2023-11-27-05-22-54-utc_result_11zon.webp'
                  alt='Why Choose Us'
                  className='img-fluid animate-box animated animate__animated'
                  data-animate='animate__fadeInLeft'
                />
              </div>
              <div
                className='client-rating-card animate-box animated animate__animated'
                data-animate='animate__zoomIn'>
                <div className='client-rating-card-content'>
                  <span>4.9</span>
                  <div className='stars'>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                  </div>
                  <h5 className='secondary-accent'>Client Ratings</h5>
                  <p>Our clients trust us for our commitment to excellence.</p>
                </div>
              </div>
            </div>
            <div className='whychooseus-details'>
              <div className='sub-heading'>
                <i className='fa-solid fa-circle-notch'></i>
                <h6 className='font-family-1 accent-color'>Why Choose Us</h6>
              </div>
              <h2
                className='animate-box animated animate__animated'
                data-animate='animate__fadeInUp'>
                Transforming challenges into opportunities for growth.
              </h2>
              <p>
                We empower businesses to thrive through innovative solutions.
              </p>
              <div className='d-flex flex-column gspace-2'>
                <div
                  className='whychooseus-box animate-box animated-fast animate__animated'
                  data-animate='animate__fadeInRight'>
                  <div className='icon-circle'>
                    <i className='fa-solid fa-globe'></i>
                  </div>
                  <div className='d-flex flex-column gspace-2'>
                    <h4 className='secondary-accent'>Proven Expertise</h4>
                    <p>
                      Our team brings years of industry experience to deliver
                      tailored solutions that drive success.
                    </p>
                  </div>
                </div>
                <div
                  className='whychooseus-box animate-box animated animate__animated'
                  data-animate='animate__fadeInRight'>
                  <div className='icon-circle'>
                    <i className='fa-solid fa-lightbulb'></i>
                  </div>
                  <div className='d-flex flex-column gspace-2'>
                    <h4 className='secondary-accent'>
                      Innovation and Adaptability
                    </h4>
                    <p>
                      We foster a culture of innovation, ensuring our solutions
                      are always ahead of the curve.
                    </p>
                  </div>
                </div>
                <div
                  className='whychooseus-box animate-box animated animate__animated'
                  data-animate='animate__fadeInRight'>
                  <div className='icon-circle'>
                    <i className='fa-solid fa-briefcase'></i>
                  </div>
                  <div className='d-flex flex-column gspace-2'>
                    <h4 className='secondary-accent'>Comprehensive Services</h4>
                    <p>
                      Our comprehensive services are designed to meet diverse
                      business needs, ensuring success at every stage.
                    </p>
                  </div>
                </div>
                <div
                  className='whychooseus-box animate-box animated-slow animate__animated'
                  data-animate='animate__fadeInRight'>
                  <div className='icon-circle'>
                    <i className='fa-solid fa-user-tie'></i>
                  </div>
                  <div className='d-flex flex-column gspace-2'>
                    <h4 className='secondary-accent'>Dedicated Support</h4>
                    <p>
                      Our dedicated support team is here to assist you at every
                      step, ensuring your success and satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
