# Modern Digital Portfolio 🚀

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/phophaleaditya02-2309s-projects/v0-modern-digital-portfolio)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/f8ep2yv570O)

A modern digital portfolio built with Next.js and TypeScript. Showcases projects, skills, education, and contact information. 💻

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [How to use](#how-to-use)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)

## Overview

This repository contains the source code for a modern digital portfolio, automatically synced with deployments on [v0.dev](https://v0.dev). Any changes made to the deployed app will be automatically pushed to this repository.

Your project is live at:

**[https://vercel.com/phophaleaditya02-2309s-projects/v0-modern-digital-portfolio](https://vercel.com/phophaleaditya02-2309s-projects/v0-modern-digital-portfolio)**

Continue building your app on:

**[https://v0.dev/chat/projects/f8ep2yv570O](https://v0.dev/chat/projects/f8ep2yv570O)**

## Features ✨

- **Modern UI:** A clean and responsive user interface built with Tailwind CSS and Radix UI.
- **Animated Background:** Engaging animated background using `framer-motion` and `tsparticles`.
- **Theme Support:** Light and dark theme support using `next-themes`.
- **Interactive Components:** Utilizes various Radix UI components such as Accordion, Alert Dialog, Avatar, and more.
- **Form Handling:** Contact form with input validation using `react-hook-form` and `zod`.
- **Project Showcase:** Displays projects with descriptions, technologies used, and links to live demos and GitHub repositories.
- **Skills Section:** Visual representation of skills using progress bars.
- **Education Section:** Highlights academic journey and qualifications.
- **Contact Section:** Includes contact information and a form for sending messages.
- **Animations:** Uses `framer-motion` for smooth animations and transitions.
- **Typed.js Integration:** Includes typed.js to add typing effect to hero section.
- **Toast Notifications:** Uses Sonner for toast notifications.
- **Navigation:** Responsive navigation bar that highlights active sections using smooth scrolling.

## Tech Stack 🛠️

- **Frontend:**
    - [TypeScript](https://www.typescriptlang.org/) - Primary language
    - [React](https://reactjs.org/) - JavaScript library for building user interfaces
    - [Next.js](https://nextjs.org/) - React framework for building performant web applications
    - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
    - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for React
    - [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
    - [Lucide React](https://lucide.dev/) - Beautifully simple, pixel-perfect icons
    - [Typed.js](https://mattboldt.com/demos/typed-js/) - JavaScript Typing Animation Library
    - [React Particles](https://github.com/tsparticles/react-particles) - Lightweight particles component for React

- **Other:**
    - [Zod](https://zod.dev/) - TypeScript-first schema validation with static types
    - [Class Variance Authority](https://cva.style/) - Build component classes
    - [Clsx](https://github.com/lukeed/clsx) - A tiny (239B) utility for constructing `className` strings conditionally
    - [Tailwind Merge](https://github.com/dcastil/tailwind-merge) - Utility to merge Tailwind CSS classes
    - [Embla Carousel React](https://www.embla.co/react-carousel) - Carousel component for React
    - [React Hook Form](https://www.react-hook-form.com/) - Library for form management in React
    - [Recharts](https://recharts.org/) - A composable charting library built on React components
    - [Sonner](https://sonner.emilkowal.ski/) - An opinionated toast component for React

## Installation 📦

1.  Clone the repository:

    ```bash
    git clone https://github.com/Adityaphophale/portfolio.git
    cd portfolio
    ```

2.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Configure environment variables:
    *   No specific environment variables are mentioned, but the application uses themes and other configurations that may require environment variables in a production environment.

## Usage 🚀

1.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

2.  Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## How to use

This project serves as a personal portfolio to showcase skills, projects, and experience.

**Real-world use cases:**

*   **Personal Branding:** An online presence to present professional profile.
*   **Job Applications:** Share the portfolio link with potential employers.
*   **Networking:** Use the portfolio as a digital business card.

**Key components and how to modify them:**

*   `components/hero.tsx`: Edit the introduction, title, and buttons.
*   `components/about.tsx`: Modify the "About Me" section, profile image, and personal traits.
*   `components/skills.tsx`: Update the skill set and proficiency levels.
*   `components/projects.tsx`: Add or modify project details, including images, descriptions, and links.
*   `components/education.tsx`: Edit the education history.
*   `components/contact.tsx`: Customize contact information and social media links.

## Project Structure 📂

```
portfolio/
├── app/
│   ├── globals.css
│   └── layout.tsx
│   └── page.tsx
├── components/
│   ├── about.tsx
│   ├── animated-background.tsx
│   ├── contact.tsx
│   ├── education.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   ├── ui/
│   │   ├── *
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── tsconfig.json
└── package.json
```

-   `app/`: Contains the main application components, including layout and pages.
-   `components/`: Reusable UI components.
-   `components/ui/`: Radix UI primitives and custom UI components.
-   `lib/`: Utility functions.
-   `public/`: Static assets such as images.
-   `styles/`: Global CSS styles.
-   `tsconfig.json`: TypeScript configuration file.
-   `package.json`: Lists project dependencies and scripts.

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

## License 📜

This project is open source.

## Important Links 🔗

-   Live Demo: [https://vercel.com/phophaleaditya02-2309s-projects/v0-modern-digital-portfolio](https://vercel.com/phophaleaditya02-2309s-projects/v0-modern-digital-portfolio)
-   Build your app: [https://v0.dev/chat/projects/f8ep2yv570O](https://v0.dev/chat/projects/f8ep2yv570O)
-   LinkedIn: [https://www.linkedin.com/in/aditya-phophale/](https://www.linkedin.com/in/aditya-phophale/)

## Footer


This project is created by Aditya Rahul Phophale. 🧑‍💻

-   GitHub Repository: [portfolio](https://github.com/Adityaphophale/portfolio)
-   Author Name: Aditya Rahul Phophale
-   Contact: aphophale@gmail.com

Feel free to explore the code, raise issues, and contribute to make this portfolio even better!⭐
