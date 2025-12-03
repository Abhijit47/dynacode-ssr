import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/about', 'routes/about.tsx'),
  route('/contact-us', 'routes/contact-us.tsx'),
  route('/faqs', 'routes/faqs.tsx'),
  route('/teams', 'routes/teams.tsx'),
  route('/pricing', 'routes/pricing.tsx'),
  route('/testimonials', 'routes/testimonials.tsx'),

  route('/blogs', 'routes/blogs.tsx'),
  route('/blogs/:bid', 'routes/blog-details.tsx'),
  route('/portfolio', 'routes/portfolio.tsx'),
  route('/portfolio/:pid', 'routes/portfolio-details.tsx'),
  route('/services', 'routes/services.tsx'),
  route('/services/:sid', 'routes/service-details.tsx'),
] satisfies RouteConfig;
