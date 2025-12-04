import ComingSoon from '~/components/coming-soon';
import AboutSection from '~/components/ui/about-section';
import BannerHome from '~/components/ui/banner-home';
import BlogSection from '~/components/ui/blog-section';
import CtaSection from '~/components/ui/cta-section';
import ModalVideoSection from '~/components/ui/modal-video-section';
import PartnersipSection from '~/components/ui/partnerships';
import PortfolioSection from '~/components/ui/portfolio-section';
import ProcessSection from '~/components/ui/process-section';
import ServiceSection from '~/components/ui/services-section';
import TestimonialSection from '~/components/ui/testimonial-section';
import WhyChooseUsSection from '~/components/ui/why-choose-us-section';
import { ModalVideoProvider } from '~/contexts/modal-video-provider';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        'Home | DynaCode - Web Development | SEO | Digital Marketing Agency | Graphic Design',
    },
    {
      name: 'description',
      content: `
      DynaCode is a leading web development, SEO, and digital marketing agency dedicated to helping businesses grow online. Our expert team crafts custom websites, optimizes search engine rankings, and implements effective marketing strategies to drive traffic and increase conversions.
    `,
    },
    {
      name: 'keywords',
      content: `
      web development, SEO, digital marketing, online growth, website design, search engine optimization, marketing strategies, traffic generation, conversion optimization,
      graphic design, branding, social media marketing, content marketing, PPC advertising, email marketing, web solutions, DynaCode
      `,
    },
  ];
}

export function headers() {
  return {
    'X-Stretchy-Pants': 'its for fun',
    'Cache-Control': 'max-age=300, s-maxage=3600',
  };
}

export const handle = {
  its: 'all yours',
};

// export function links() {
//   return [
//     {
//       rel: 'icon',
//       href: '/favicon.png',
//       type: 'image/png',
//     },
//     {
//       rel: 'stylesheet',
//       href: 'https://example.com/some/styles.css',
//     },
//     {
//       rel: 'preload',
//       href: '/images/banner.jpg',
//       as: 'image',
//     },
//   ];
// }

export function HydrateFallback() {
  return <p>Loading Game...</p>;
}

export default function Home({}: Route.ComponentProps) {
  return (
    <>
      {/* <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        // data-aos-mirror='true'
        // data-aos-once='false'
        // data-aos-anchor-placement='top-center'
        >
        WOW
        </div> */}
      <ModalVideoProvider>
        <BannerHome />
        <ModalVideoSection />
      </ModalVideoProvider>
      <PartnersipSection />
      <AboutSection />
      <ServiceSection />
      {/* bundle issues */}
      {/* <AchievementSection /> */}
      <ProcessSection />
      <WhyChooseUsSection />
      <CtaSection />
      <PortfolioSection />
      <TestimonialSection />
      <BlogSection />
      <ComingSoon />
    </>
  );
}
