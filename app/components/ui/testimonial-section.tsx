import { Link } from 'react-router';
import { testimonials } from '~/constants';
import TestimonialCard from './testimonial-card';

export default function TestimonialSection() {
  return (
    <div className='section'>
      <div className='hero-container'>
        <div className='row row-cols-lg-2 row-cols-1 grid-spacer-2'>
          <div className='col'>
            <div className='testimonial-details-container'>
              <div className='d-flex flex-column gspace-2'>
                <div className='sub-heading'>
                  <i className='fa-solid fa-circle-notch'></i>
                  <h6 className='font-family-1 accent-color'>Testimonials</h6>
                </div>
                <h2
                  className='animate-box animated animate__animated'
                  data-animate='animate__fadeInUp'>
                  Success Stories From Those Who Know Us Best
                </h2>
                <p className=''>
                  Discover why our clients trust us to deliver exceptional
                  results. Their success is our success, and we're committed to
                  exceeding expectations.
                </p>
                <div>
                  <Link to='#' className='btn btn-accent'>
                    View More
                  </Link>
                </div>
              </div>
              <div className='testimonial-image-wrapper'>
                <div className='image-container'>
                  <img
                    src='/assets/images/diverse-team-of-professionals-collaborating-on-a-p-2024-07-12-21-20-39-utc_result.webp'
                    alt='Testimonial Detail'
                    className='img-fluid animate-box animated animate__animated'
                    data-animate='animate__fadeInLeft'
                  />
                </div>
                <div
                  className='testimonial-rating animate-box animated animate__animated'
                  data-animate='animate__zoomIn'>
                  <span className='rating-count'>99%</span>
                  <h5 className='accent-color'>Satisfied Client</h5>
                  <p>Real feedback from our valued clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='d-flex flex-column gspace-2'>
              {testimonials.slice(0, 3).map((item) => (
                <TestimonialCard
                  id={item.id}
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  content={item.content}
                  speed={item.speed}
                  variant='box'
                  size=''
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
