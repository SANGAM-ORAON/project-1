A React application with modern UI/UX design, built using **Tailwind CSS** for responsive styling, animations, and fast development.

Features

* React component-based architecture for reusable, maintainable code.
* Tailwind CSS for utility-first, responsive layouts.
* Organized folder structure with dedicated components and pages.
* Dedicated `assets` and `fonts` directories.
* Supports image and video media efficiently.
* Smooth transitions and animations for better user experience.
* Built with Vite for fast development and optimized builds.

Folder Structure

```
/public
  fonts/           # Custom font files
  logo.png
  video.mp4

/src
  assets/          # Images and static resources
  components/
    home/
      HomeBottom.jsx
      HomeHeroTop.jsx
      Video.jsx
    navbar/
      Nav.jsx
      PageTransition.jsx
  pages/
    Agency.jsx
    Blog.jsx
    Contact.jsx
    Home.jsx
    Work.jsx
  App.jsx
  main.jsx

index.css          # Tailwind base styles
vite.config.js     # Vite configuration
.gitignore
eslint.config.js
package.json
```


Key Concepts

* Responsive Design: Mobile-first layouts with Tailwind utilities.
* Animated Transitions: Smooth navigation with `PageTransition.jsx`.
* Custom Typography: Unique fonts for brand identity.
* Accessibility: Keyboard navigation and screen-reader support.
* Performance Optimization: Vite bundler, code splitting, and efficient asset management.

Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Tech Stack

* React (JSX)
* Tailwind CSS
* Vite
* Video & font assets

Contributing

* Follow component-based conventions.
* Keep folder structure organized.
* Apply modern UI/UX patterns consistently.
