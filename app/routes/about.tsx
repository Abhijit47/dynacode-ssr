import AboutSection from '~/components/ui/about-section';
import AchievementSection from '~/components/ui/achievement-section.client';
import BannerInnerSection from '~/components/ui/banner-inner-section';
import CtaSection from '~/components/ui/cta-section';
import PartnersipSection from '~/components/ui/partnerships';
import ProcessSection from '~/components/ui/process-section';
import TeamSection from '~/components/ui/team-section';
import TestimonialSection from '~/components/ui/testimonial-section';
import WhyChooseUsSection from '~/components/ui/why-choose-us-section';
import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        'About | DynaCode - Web Development | SEO | Digital Marketing Agency | Graphic Design',
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

export default function AboutPage() {
  return (
    <>
      <BannerInnerSection title='About Us' currentPage='About Us' />
      <PartnersipSection />
      <AboutSection />
      <AchievementSection />
      <TeamSection />
      <WhyChooseUsSection />
      <CtaSection />
      <ProcessSection />
      <TestimonialSection />
    </>
  );
}
