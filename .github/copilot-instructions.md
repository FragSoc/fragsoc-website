# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js 15 project with the following technologies:
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm

## Code Style Guidelines
- Use TypeScript for all new files
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling
- Components should be in PascalCase
- Use functional components with React hooks
- Prefer server components when possible, use 'use client' directive only when necessary
- Follow the src/ directory structure

## Project Structure
- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable React components
- `public/` - Static assets
- Configuration files in root directory

## Best Practices
- Use proper TypeScript types
- Follow accessibility best practices
- Optimize images using Next.js Image component
- Use semantic HTML elements
- Implement responsive design with Tailwind CSS

## Development Workflow
1. Run the development server with `npm run dev`
2. Open [http://localhost:3000](http://localhost:3000)