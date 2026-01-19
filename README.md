# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark Mode Support**: Automatic theme switching with system preference detection
- **Fast Performance**: Turbopack for lightning-fast development builds
- **SEO Optimized**: Built-in metadata and Open Graph support
- **Icon Library**: Lucide React icons for consistent visual elements

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Turbopack](https://turbo.build/pack)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   └── Navigation.tsx    # Navigation component
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot instructions
└── ...config files
```

## 🎨 Customization

### Personal Information

Update the following in `app/page.tsx`:

- Replace "Your Name" with your actual name
- Update the profile description and bio
- Add your social media links (GitHub, LinkedIn, Email)
- Replace placeholder project information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in the gradient backgrounds
- Typography and spacing
- Dark mode variants
- Animation timings and effects

### Content Sections

The homepage includes:

- **Hero Section**: Introduction and call-to-action
- **Skills Section**: Technology showcase
- **Projects Section**: Featured work portfolio
- **Navigation**: Responsive navigation bar

## 📱 Sections to Implement

Consider adding these sections to complete your portfolio:

- About page with detailed background
- Individual project detail pages
- Contact form with validation
- Blog section for articles
- Resume/CV download functionality
- Testimonials section

## 🚀 Deployment

### Deploy on GitHub Pages (Configured)

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

**Quick Setup:**

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under **Source**, select **GitHub Actions**

3. Your site will be automatically deployed at: `https://minhaj47.github.io/portfolio`

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Other Deployment Options

- **Vercel (Alternative)**: Visit [Vercel](https://vercel.com/new) and import your repository
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Deploy with AWS infrastructure
- **Digital Ocean**: Use App Platform for deployment

> **Note**: For Vercel deployment, remove the `basePath` and `assetPrefix` from `next.config.ts`

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

- Update the favicon in `app/favicon.ico`
- Add your own images to the `public/` directory
- Customize the color scheme by modifying Tailwind classes
- Test responsiveness on various devices
- Optimize images for better performance

---

Built with ❤️ using Next.js and modern web technologies.
