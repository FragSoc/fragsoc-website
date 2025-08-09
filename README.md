# FragSoc Website

[![Build and Push](https://github.com/hitime1234/fragsoc-website/actions/workflows/docker-build.yml/badge.svg)](https://github.com/hitime1234/fragsoc-website/actions/workflows/docker-build.yml)
[![Deploy](https://github.com/hitime1234/fragsoc-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/hitime1234/fragsoc-website/actions/workflows/deploy.yml)

The official website for **FragSoc** - University of York's Gaming and Esports Society. Built with modern web technologies and optimized for performance, SEO, and security.

## 🚀 Quick Start

### Development
```bash
# Clone the repository
git clone https://github.com/hitime1234/fragsoc-website.git
cd fragsoc-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

### Production
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Docker + GitHub Actions
- **Forms**: Formspree integration
- **SEO**: Built-in sitemap and robots.txt
- **Security**: Modern security headers

## 📁 Project Structure

```
fragsoc-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── committee/       # Committee page
│   │   ├── contact/         # Contact form
│   │   ├── esports/         # Esports information
│   │   ├── fanart/          # Community fanart
│   │   ├── faq/             # FAQ page
│   │   ├── robots.ts        # SEO robots.txt
│   │   └── sitemap.ts       # SEO sitemap
│   ├── components/          # Reusable React components
│   ├── constants/           # Application constants
│   └── lib/                 # Utility functions
├── public/                  # Static assets
├── .github/workflows/       # CI/CD pipelines
└── docs/                    # Documentation files
```

## 📚 Documentation

| Topic | File | Description |
|-------|------|-------------|
| **Environment Setup** | [`ENVIRONMENT.md`](./ENVIRONMENT.md) | Configuration and environment variables |
| **Docker & Deployment** | [`DOCKER.md`](./DOCKER.md) | Docker setup and deployment guide |
| **GitHub Actions** | [`.github/workflows/README.md`](./.github/workflows/README.md) | CI/CD pipeline documentation |
| **SEO Optimization** | [`SEO.md`](./SEO.md) | SEO features and implementation |
| **Security Headers** | [`SECURITY-HEADERS.md`](./SECURITY-HEADERS.md) | Security configuration details |
| **Constants System** | [`CONSTANTS.md`](./CONSTANTS.md) | Centralized constants management |

## ⚙️ Configuration

### Environment Variables
The project requires several environment variables. See [`ENVIRONMENT.md`](./ENVIRONMENT.md) for detailed setup instructions.

**Quick Setup:**
```bash
cp .env.example .env.local
```

### Key Features Configuration
- **Contact Form**: Formspree integration for contact submissions
- **SEO**: Automatic sitemap and robots.txt generation  
- **Security**: Modern security headers and CSP
- **Performance**: Optimized images and caching
- **Analytics**: Google verification support

## 🔒 Security

This website implements modern security best practices:

- ✅ Content Security Policy (CSP)
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options)
- ✅ Permissions Policy for browser features
- ✅ No deprecated security headers
- ✅ Docker container security

See [`SECURITY-HEADERS.md`](./SECURITY-HEADERS.md) for detailed security information.

## 🐳 Docker Deployment

The website is containerized and deployed using Docker with automated CI/CD:

```bash
# Build Docker image
docker build -t fragsoc-website .

# Run container
docker run -p 3000:3000 fragsoc-website
```

See [`DOCKER.md`](./DOCKER.md) for complete deployment instructions.

## 🔄 CI/CD Pipeline

Automated deployment using GitHub Actions:

- **Build**: Triggers on any branch push
- **Deploy**: Only deploys main branch to production
- **Tags**: Branch-specific Docker tags + `latest` for main

See [`.github/workflows/README.md`](./.github/workflows/README.md) for workflow details.

## 🎯 SEO Features

- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Open Graph meta tags
- ✅ Twitter Card optimization
- ✅ Structured data (JSON-LD)
- ✅ Google Search Console ready

See [`SEO.md`](./SEO.md) for SEO implementation details.

## 🧩 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server  
npm run lint        # Run ESLint
```

### Project Standards

- **Code Style**: ESLint + Prettier configuration
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **Constants**: Centralized in `src/constants/`

## 📱 Pages & Features

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Main landing page with hero and sections |
| **About** | `/about` | Society information and activities |
| **Committee** | `/committee` | Team members and roles |
| **Contact** | `/contact` | Contact form and information |
| **Esports** | `/esports` | Tournament and competitive gaming info |
| **Fanart** | `/fanart` | Community artwork showcase |
| **FAQ** | `/faq` | Frequently asked questions |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run build`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Test builds before submitting PRs
- Update documentation for new features
- Maintain responsive design principles

## 📞 Support

- **Website Issues**: Open a GitHub issue
- **FragSoc Questions**: Contact via the website's contact form
- **Development Help**: Check the documentation files above

## 📄 License

This project is built for FragSoc - University of York's Gaming and Esports Society.

## 🏗️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Formspree](https://formspree.io/) - Form handling
- [Docker](https://www.docker.com/) - Containerization
- [GitHub Actions](https://github.com/features/actions) - CI/CD

---

**FragSoc** - University of York's Gaming and Esports Society  
🎮 Join us for LAN parties, tournaments, and gaming events!
