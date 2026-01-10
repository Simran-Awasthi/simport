# Joanne Cho Portfolio Clone

A pixel-perfect recreation of [joannecho.me](https://www.joannecho.me/) built for learning purposes.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Fixed navigation bar
│   ├── Hero.tsx          # Hero/intro section
│   ├── ProjectCard.tsx   # Reusable project card
│   ├── WorkSection.tsx   # Professional work section
│   ├── FunSection.tsx    # Personal projects section
│   └── Footer.tsx        # Footer with contact links
├── pages/
│   ├── Home.tsx          # Main landing page
│   └── About.tsx         # About page
├── App.tsx               # Root component with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design Features

- **Cream background** (#FFF8F0) with peach accents
- **DM Sans font** from Google Fonts
- **Smooth hover transitions** on all interactive elements
- **Responsive design** with mobile-first approach
- **Fixed navigation** with backdrop blur effect
- **Smooth scrolling** behavior
- **Clean typography** matching the original site

## Color Palette

- Background: `#FFF8F0` (cream)
- Accent: `#FFE5D9` (peach)
- Text: `#2D2D2D` (dark gray)

## Notes

This is a learning project created to practice:

- Component-based architecture
- TypeScript with React
- Tailwind CSS utility classes
- Responsive design patterns
- Smooth animations and transitions

The content structure mirrors the original site while using placeholder text where appropriate.
