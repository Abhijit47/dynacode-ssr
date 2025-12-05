export default function BannerInnerSection({
  title,
  currentPage,
}: {
  title: string;
  currentPage: string;
}) {
  return (
    <div className='section compact-top-bottom'>
      <div className='hero-container'>
        <div className='banner-inner'>
          <div className='banner-inner-content'>
            <h1>{title}</h1>
            <nav className='breadcrumb'>
              <a href='#'>Home</a>
              <i className='fa-solid fa-arrow-right'></i>
              <a href='#'>{currentPage}</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
