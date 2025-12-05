type PortfolioCardProps = typeof import('~/constants').portfolios[0];

export default function PortfolioCard({
  logo,
  image,
  category,
  title,
  content,
  link,
  speed = '',
}: PortfolioCardProps) {
  return (
    <>
      <div
        className={`card card-portfolio animate-box animate__animated ${speed}`}
        data-animate='animate__fadeIn'>
        <img src={image} alt='Portfolio Image' className='img-fluid' />
        <div className='portfolio-logo'>
          <img src={logo} alt='Portfolio Logo' className='img-fluid' />
        </div>
        <div className='portfolio-content'>
          <p className='accent-color'>{category}</p>
          <h3 className='secondary-accent'>{title}</h3>
          <p className='secondary-accent'>{content}</p>
          <div>
            <a href={link} className='btn btn-accent'>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
