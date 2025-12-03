import type { Route } from './+types/portfolio-details';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        'Portfolio Details | DynaCode - Web Development | SEO | Digital Marketing Agency | Graphic Design',
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

export default function PortfolioDetails() {
  return <div>PortfolioDetails</div>;
}
