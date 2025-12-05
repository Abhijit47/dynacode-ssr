export default function TeamCard({
  image,
  name,
  designation,
  linkedin,
  twitter,
  behance,
}: {
  image: string;
  name: string;
  designation: string;
  linkedin?: string;
  twitter?: string;
  behance?: string;
}) {
  return (
    <div className='col'>
      <div className='card card-team'>
        <div className='social-team-container'>
          <a href='#' className='social-team-icon'>
            <span className={'visually-hidden'}>linkedin</span>
            <i className='fa-brands fa-linkedin-in'></i>
          </a>
          <a href='#' className='social-team-icon'>
            <span className={'visually-hidden'}>twitter</span>
            <i className='fa-brands fa-x-twitter'></i>
          </a>
          <a href='#' className='social-team-icon'>
            <span className={'visually-hidden'}>behance</span>
            <i className='fa-brands fa-behance'></i>
          </a>
        </div>
        <img src={image} alt='Team' className='img-fluid' />
        <div className='team-details-wrapper'>
          <div className='team-details'>
            <h3 className='secondary-accent'>{name}</h3>
            <div className='underline-secondary-accent'></div>
            <h5 className='secondary-accent'>{designation}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
