# Horizon Academy School Website

A visually stunning, highly interactive, and modern school website built with Next.js. This website showcases best UI/UX practices, engaging animations, and a fully responsive design.

## Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Highly Interactive**: Engaging animations and transitions using Framer Motion and GSAP
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Built with best practices for search engine optimization
- **Accessibility**: Designed with accessibility in mind

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **GSAP**: Professional-grade animation library
- **Swiper**: Modern touch slider
- **React Icons**: Popular icon library

## Pages

- **Home**: Featuring hero section, features, stats, testimonials, news, and CTA
- **About**: School history, mission, vision, and values
- **Academics**: Programs, curriculum, and faculty
- **Admissions**: Application process, requirements, and financial aid
- **Campus Life**: Student activities, clubs, and facilities
- **News**: Latest news, events, and announcements
- **Contact**: Contact information and form

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/school-website.git
   cd school-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
school-website/
├── public/            # Static files
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── about/     # About page
│   │   ├── academics/ # Academics page
│   │   ├── admissions/ # Admissions page
│   │   ├── campus-life/ # Campus Life page
│   │   ├── news/      # News page
│   │   ├── contact/   # Contact page
│   │   ├── api/       # API routes
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   │   ├── layout/    # Layout components
│   │   ├── ui/        # UI components
│   │   ├── home/      # Home page components
│   │   ├── about/     # About page components
│   │   └── ...        # Other page-specific components
│   ├── lib/           # Utility libraries
│   └── utils/         # Utility functions
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Customization

### Styling

The website uses Tailwind CSS for styling. You can customize the design by modifying the `tailwind.config.js` file.

### Content

Update the content in the respective component files to match your school's information.

### Images

Replace the placeholder images in the `public/images` directory with your school's actual images.

## Deployment

This website can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Swiper](https://swiperjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
