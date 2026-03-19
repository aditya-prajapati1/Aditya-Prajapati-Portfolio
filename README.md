# Aditya Prajapati - Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS v4. Features dark/light theme support, smooth animations, and a clean minimal design.

## Features

- Dark/Light theme toggle with system preference detection
- Responsive design for all screen sizes
- Smooth scroll navigation
- Typing animation in hero section
- Timeline-based experience section
- Project showcase with hover effects
- Contact form
- SEO optimized

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Theme:** next-themes
- **Animations:** CSS animations + tw-animate-css

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

## Getting Started

### 1. Clone or Download the Project

If you downloaded from v0, extract the ZIP file to your desired location.

### 2. Install Dependencies

Open the project folder in VS Code, then open the terminal (`Ctrl + `` or `Cmd + `` on Mac) and run:

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 3. Run the Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

### 4. Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and theme tokens
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main portfolio page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── navbar.tsx       # Navigation bar
│   ├── hero-section.tsx # Hero with typing animation
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── projects-section.tsx
│   ├── tech-stack-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   └── theme-provider.tsx
├── public/
│   └── images/          # Static images
└── package.json
```

## Customization

### Update Personal Information

Edit the content in each section component:

- **Hero:** `components/hero-section.tsx` - Name, tagline, social links
- **About:** `components/about-section.tsx` - Bio and highlights
- **Experience:** `components/experience-section.tsx` - Work history
- **Projects:** `components/projects-section.tsx` - Portfolio projects
- **Tech Stack:** `components/tech-stack-section.tsx` - Skills
- **Contact:** `components/contact-section.tsx` - Contact info

### Change Profile Photo

Replace the image at `public/images/profile-bg.jpg` with your own photo.

### Modify Theme Colors

Edit the CSS variables in `app/globals.css` under `:root` (light) and `.dark` (dark) to customize the color scheme.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Build for Other Platforms

```bash
pnpm build
```

The output will be in the `.next` folder. You can then run `pnpm start` to serve the production build.

## License

MIT License - Feel free to use this template for your own portfolio.
