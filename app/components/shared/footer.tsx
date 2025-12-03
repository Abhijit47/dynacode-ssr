import { Link } from 'react-router';
import NewsletterForm from '../ui/news-letter-form';

export default function Footer() {
  return (
    <footer>
      <div className='section section-footer'>
        <div className='hero-container'>
          <div className='d-flex flex-column gspace-2'>
            <NewsletterForm />
            <div className='footer-content-container'>
              <div className='footer-info-container'>
                <div className='footer-info'>
                  <Link to='/' className={'w-100 h-25 ratio ratio-16x9'}>
                    <img
                      src='/pre-logo-tr.png'
                      alt='Footer Logo'
                      className='logo object-fit-cover w-100 h-100'
                      width={100}
                      height={100}
                      style={{
                        maxWidth: '100%',
                        width: 'auto',
                        height: '3rem',
                      }}
                    />
                  </Link>
                  <p className='accent-color-2'>
                    Quam lacus suspendisse faucibus interdum posuere lorem ipsum
                    dolor sit. Vel quam elementum pulvinar etiam.
                  </p>
                  <ul className='footer-list'>
                    <li>
                      <div className='d-flex flex-row align-items-center gspace-2 secondary-accent'>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>Somewhere, Earth</span>
                      </div>
                    </li>
                    <li>
                      <Link
                        to='mailto:dynacodeweb@gmail.com'
                        className='d-flex flex-row align-items-center gspace-2 secondary-accent'>
                        <i className='fa-solid fa-envelope-open-text'></i>
                        <span>dynacodeweb@gmail.com</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='tel:+123 123 123'
                        className='d-flex flex-row align-items-center gspace-2 secondary-accent'>
                        <i className='fa-solid fa-phone'></i>
                        <span>+123 123 123</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='footer-quick-links'>
                  <h4 className='accent-color'>Quick Links</h4>
                  <ul className='footer-list'>
                    <li>
                      <Link to='/about'>About</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                      <Link to='/team'>Team</Link>
                    </li>
                    <li>
                      <Link to='/faq'>FAQs</Link>
                    </li>
                  </ul>
                </div>
                <div className='footer-services'>
                  <h4 className='accent-color'>Services</h4>
                  <ul className='footer-list'>
                    <li>
                      <Link to='/services'>On-Page SEO</Link>
                    </li>
                    <li>
                      <Link to='/services'>Content Marketing</Link>
                    </li>
                    <li>
                      <Link to='/services'>Off-Page SEO</Link>
                    </li>
                    <li>
                      <Link to='/services'>Social Media Marketing</Link>
                    </li>
                    <li>
                      <Link to='/services'>Analytics & Reporting</Link>
                    </li>
                    <li>
                      <Link to='/services'>Influencer Marketing</Link>
                    </li>
                  </ul>
                </div>
                <div className='footer-cta'>
                  <h4 className='accent-color'>Work Days</h4>
                  <p>
                    Euismod elementum nisi quis eleifend quam adipiscing vitae
                    proin sagittis.
                  </p>
                  <div className='d-flex gspace-2'>
                    <i className='fa-solid accent-color-2 fa-clock'></i>
                    <p className='accent-color-2'>Mon to Fri, 09:00 - 17:00</p>
                  </div>
                  <div>
                    <Link to='/contact' className='btn btn-accent'>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='copyright-container'>
              <span className='copyright-text'>
                DynaCode © {new Date().getFullYear()} All Rights Reserved by
                dynacode
              </span>
              <div className='social-footer'>
                <Link to='#' className='social-item accent-color'>
                  <span className={'visually-hidden'}>fb</span>
                  <i className='fa-brands fa-facebook-f'></i>
                </Link>
                <Link to='#' className='social-item accent-color'>
                  <span className={'visually-hidden'}>twitter</span>
                  <i className='fa-brands fa-x-twitter'></i>
                </Link>
                <Link to='#' className='social-item accent-color'>
                  <span className={'visually-hidden'}>instagram</span>
                  <i className='fa-brands fa-instagram'></i>
                </Link>
                <Link to='#' className='social-item accent-color'>
                  <span className={'visually-hidden'}>pinterest</span>
                  <i className='fa-brands fa-pinterest'></i>
                </Link>
                <Link to='#' className='social-item accent-color'>
                  <span className={'visually-hidden'}>youtube</span>
                  <i className='fa-brands fa-youtube'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
