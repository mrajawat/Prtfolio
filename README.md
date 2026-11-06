# Mohan Singh Rajawat - Portfolio Website

A modern, responsive personal portfolio website for Mohan Singh Rajawat, a Backend/Full Stack Developer with 3+ years of professional experience.

## Features

✨ **Modern Design**
- Clean and minimal interface inspired by developer portfolios
- Responsive design that works perfectly on mobile, tablet, and desktop
- Smooth scroll animations and transitions throughout

🌙 **Dark/Light Mode**
- Toggle between dark and light themes with a floating button
- Theme preference is saved in localStorage
- Respects system preferences on first visit

⚡ **Smooth Animations**
- Built with Framer Motion for fluid animations
- Scroll-triggered animations for sections
- Interactive hover effects and transitions
- Accessibility-friendly with reduced motion support

📱 **Fully Responsive**
- Mobile-first design approach
- Responsive navigation with mobile menu
- Adapts beautifully to all screen sizes

## Sections

1. **Navigation Bar** - Fixed navigation with smooth animations and mobile menu
2. **Hero Section** - Name, title, tagline, and CTA buttons
3. **About Me** - Professional summary and key highlights
4. **Technical Skills** - Categorized skills (Backend, Frontend, Databases, Tools & Cloud)
5. **Experience** - Timeline of professional work with achievements
6. **Featured Projects** - 3 showcase projects with tech stack and key achievements
7. **Contact Section** - Multiple contact methods and message form
8. **Footer** - Quick links and social media links

## Tech Stack

**Frontend:**
- Next.js 16 (React 19)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

**Styling:**
- Semantic CSS custom properties for theming
- OKLCH color space for modern color management
- Dark/Light mode support

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme setup
│   ├── page.tsx            # Main page combining all sections
│   ├── globals.css         # Global styles and theme tokens
│   └── fonts/              # Font files (if needed)
├── components/
│   ├── navbar.tsx          # Navigation component
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── skills.tsx          # Skills section
│   ├── experience.tsx       # Experience timeline
│   ├── projects.tsx        # Featured projects
│   ├── contact.tsx         # Contact section
│   ├── footer.tsx          # Footer
│   ├── theme-toggle.tsx    # Dark/Light mode toggle
│   └── ui/                 # Pre-built UI components
└── public/                 # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+ and pnpm (or npm/yarn)

### Installation

1. **Clone or download the project**

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

## Customization

### Personal Information

Update the following files with your information:

- **Layout:** `app/layout.tsx` - Update title and description
- **Hero:** `components/hero.tsx` - Your name, title, and tagline
- **About:** `components/about.tsx` - Your professional summary
- **Skills:** `components/skills.tsx` - Your technical skills
- **Experience:** `components/experience.tsx` - Your work history
- **Projects:** `components/projects.tsx` - Your featured projects
- **Contact:** `components/contact.tsx` - Your contact information
- **Footer:** `components/footer.tsx` - Social media links

### Colors & Theme

The portfolio uses semantic design tokens defined in `app/globals.css`:

- **Light Mode:** White background with dark text
- **Dark Mode:** Dark background with light text
- **Primary Color:** Used for buttons, links, and accents
- **Secondary Color:** Used for backgrounds and subtle accents

To customize colors, update the CSS variables in the `:root` and `.dark` sections of `globals.css`.

### Fonts

The portfolio uses the "Geist" font family by default. To change fonts:

1. Update the font import in `app/layout.tsx`
2. Update the font configuration in `tailwind.config.ts`

## Performance & Accessibility

- ⚡ Optimized for Core Web Vitals
- ♿ WCAG compliant with proper semantic HTML
- 🔍 SEO-friendly with proper meta tags
- 🎨 Supports reduced motion preferences
- 📱 Mobile-optimized with touch-friendly interactions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Click "Deploy"

```bash
pnpm build
# Deploy the .next directory
```

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## License

This portfolio template is open for personal use. Feel free to customize and deploy it as your own.

## Support & Customization

For modifications or feature requests, you can:
1. Edit components directly in the `components/` folder
2. Update styles in `app/globals.css`
3. Modify content in respective component files

## Future Enhancements

Possible additions:
- Blog section for articles
- Case studies for projects
- Search functionality
- Analytics integration
- Newsletter subscription
- Testimonials section

---

**Built with ❤️ using Next.js and Framer Motion**
