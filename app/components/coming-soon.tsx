import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router';

export default function ComingSoon() {
  return (
    <div className='section notfound-section'>
      <div className='hero-container'>
        <div className='notfound-container'>
          <span className='text-coming-soon'>Coming soon</span>
          <h2 className={'text-center fs-3'}>
            Oops! This page is under construction.
          </h2>
          <p>We're working hard to bring you this feature. Stay tuned!</p>
          <div>
            <Link to='/' className='btn btn-accent'>
              Back to Home
            </Link>
          </div>
          <QRCodeSVG
            title='DynaCode'
            boostLevel={true}
            marginSize={2}
            size={200}
            level='L'
            value='https://dynacode.tech'
          />
        </div>
      </div>
    </div>
  );
}
