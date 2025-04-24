# Quizstack

![OpenClassrooms banneer](public/images/decoration/quizstack-home.png)

[![PHP Badge](https://img.shields.io/badge/PHP-8.1-7a86b8?style=flat-square&logo=php&logoColor=white/)](https://www.php.net/) [![Symfony Badge](https://img.shields.io/badge/Symfony-6.4-000000?style=flat-square&logo=symfony&logoColor=white/)](https://www.php.net/) [![MySQL Badge](https://img.shields.io/badge/MySQL-9.1-4479A1?style=flat-square&logo=symfony&logoColor=white/)](https://www.mysql.com/) [![React Badge](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=React&logoColor=white/)](https://react.dev/) [![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white/)](https://www.typescriptlang.org/) [![Sass Badge](https://img.shields.io/badge/Sass-1.86-CC6699?style=flat-square&logo=sass&logoColor=white/)](https://sass-lang.com/) [![Tailwind Badge](https://img.shields.io/badge/Tailwind-3.4-61DAFB?style=flat-square&logo=tailwindcss&logoColor=white/)](https://tailwindcss.com/) [![Motion Badge](https://img.shields.io/badge/Motion-12.7-0055FF?style=flat-square&logo=framer&logoColor=white/)](https://motion.com/) [![Twig Badge](https://img.shields.io/badge/Twig-2.12-bacf29?style=flat-square&logo=symfony&logoColor=white/)](https://twig.symfony.com/) [![GitHub Badge](https://img.shields.io/badge/GitHub-2.39-181717?style=flat-square&logo=github&logoColor=white/)](https://github.com/) [![Webpack Badge](https://img.shields.io/badge/Webpack-5.74-8DD6F9?style=flat-square&logo=webpack&logoColor=white/)](https://tailwindcss.com/) [![Composer Badge](https://img.shields.io/badge/Composer-2.2-6c3e22?style=flat-square&logo=composer&logoColor=white/)](https://getcomposer.org/) [![npm Badge](https://img.shields.io/badge/Npm-10.8-CB3837?style=flat-square&logo=npm&logoColor=white/)](https://www.npmjs.com/)

## Web Development Quiz Platform

### Introduction

Quizstack is an open-source web development quiz platform designed to help developers test and improve their knowledge through interactive challenges. With over 1,000 questions across 12 essential web development domains, Quizstack provides a comprehensive learning resource for beginners and experienced developers alike.

### Features

- Extensive Question Bank: 1,000+ carefully crafted questions covering HTML, CSS, JavaScript, PHP, SQL, front-end frameworks, back-end frameworks, accessibility, UX/UI, SEO, web security, and performance optimization.
- Mobile-First Design: Learn and practice your skills anywhere, anytime with our responsive interface optimized for all devices.
- Skill Level System: Questions tailored to different expertise levels, from beginners to advanced developers.
- Competitive Elements: Leaderboards, achievements, and a points system to track progress and compete with friends.
- Community Features: Comment on questions using Markdown formatting, perfect for sharing code snippets and explanations.
- Open Contribution: Anyone can propose new questions, helping our platform grow with diverse, up-to-date content.

[![Preview site](https://img.shields.io/badge/Preview%20site--b7cf3e?style=for-the-badge)](https://quizstack.io/)

## Getting Started

### Prerequisites
- PHP 8.1+
- Symfony 6.4
- MySQL 9.1+
- Composer

### Installation

```bash
# Clone the repository
git clone https://github.com/FlorianJourde/Quizstack.git
cd quizstack
```

```bash
# Install dependencies
composer install
npm install
```

```bash
# Configure environment
cp .env.example .env
# Edit .env with your database credentials
```

```bash
# Set up the database
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

```bash
# Load sample data
php bin/console doctrine:fixtures:load
```

```bash
# Start development server
npm run dev
symfony serve
```

Visit `http://localhost:8000` in your browser to access the application.

## Contributing

We welcome contributions from the community ! Please check out our [contribution guidelines](https://quizstack.io) for details on how to submit questions, report bugs, or contribute code.

## Contact

For questions or support, please open an issue on GitHub or contact us at contact@quizstack.io.

---

Happy coding and quizzing!