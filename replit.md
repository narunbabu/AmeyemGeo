# AMEYEM Geo Solutions - Website & Platform

## Overview

AMEYEM Geo Solutions is a comprehensive web application built as a modern full-stack TypeScript application. It serves as a corporate website and platform for a geoscience consulting company specializing in AI/ML applications for the Oil & Gas industry. The application showcases services, manages contact inquiries, and provides information about training programs and venture projects.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript (ESM modules)
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Development Stack
- **Monorepo Structure**: Shared schema and types between client/server
- **Database Migrations**: Drizzle Kit for schema management
- **Type Safety**: End-to-end TypeScript with Zod validation
- **Development Server**: Vite dev server with Express backend integration

## Key Components

### Data Layer
- **Schema Definition**: Centralized in `/shared/schema.ts` using Drizzle ORM
- **Tables**: Users (authentication) and Contacts (form submissions)
- **Validation**: Zod schemas for runtime type checking and API validation
- **Storage**: Abstracted storage interface with in-memory implementation for development

### API Layer
- **Contact Endpoint**: POST `/api/contact` for form submissions
- **Admin Endpoint**: GET `/api/contacts` for retrieving contact data
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging

### Frontend Components
- **Page Structure**: Single-page application with section-based navigation
- **UI Components**: Comprehensive component library from shadcn/ui
- **Forms**: React Hook Form with Zod validation integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Custom scroll-to-section functionality and intersection observers

### Business Logic
- **Services Showcase**: AI/ML geoscience applications, custom software tools
- **Project Portfolio**: Client case studies and success metrics
- **Training Programs**: Professional training and kids' technology courses
- **Venture Projects**: Sister brand portfolio (StoryLikho, Chess99, etc.)

## Data Flow

1. **Contact Form Submission**:
   - Client form validation using Zod schemas
   - API request via TanStack Query mutations
   - Server-side validation and database storage
   - Success/error feedback to user

2. **Content Rendering**:
   - Static content rendered from React components
   - Dynamic animations triggered by scroll events
   - Responsive navigation with smooth scrolling

3. **Development Flow**:
   - Vite handles frontend bundling and HMR
   - Express server serves API endpoints
   - Shared types ensure consistency between client/server

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Database**: Drizzle ORM, Neon Database driver
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Utilities**: clsx for conditional classes, date-fns for date handling

### Development Dependencies
- **Build Tools**: Vite, esbuild, tsx
- **Type Checking**: TypeScript with strict configuration
- **Database Tools**: Drizzle Kit for migrations
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds to `/dist/public` directory
- **Backend**: esbuild bundles server to `/dist/index.js`
- **Database**: PostgreSQL connection via environment variables
- **Static Assets**: Served directly by Express in production

### Environment Configuration
- **Development**: NODE_ENV=development with Vite dev server
- **Production**: NODE_ENV=production with bundled assets
- **Database**: Configured via DATABASE_URL environment variable
- **Port Configuration**: Configurable port (default 5000) for deployment

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Development**: `npm run dev` with automatic port forwarding

## Changelog

Recent Changes:
- June 26, 2025: Initial setup and website foundation
- June 26, 2025: Updated with comprehensive project portfolio including:
  * Well Log Splicing Tool for Cairn India (2018)
  * VES Interpretation for Borewell Engineering (2018-Ongoing)
  * Automatic Seismic Digitization for EyeCube Solutions (2017)
  * Quick Seismic Interpretation for Bhugarbho (2018)
  * ASCII to SEGY Conversion for R2V Technologies (2016-2017)
  * ML Petrophysical Log Generation (2018)
  * Ongoing services for Selan Oil Exploration and Antelopus Energy
- Enhanced trust bar with major client logos and industry representation
- Added project timeline with year-based organization
- Improved project descriptions with accurate technical details and metrics

## User Preferences

Preferred communication style: Simple, everyday language.