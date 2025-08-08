# Rest Express Portfolio

## Overview

This is a full-stack portfolio website for Hemanth Madu, a Computer Science graduate. The application showcases professional experience, skills, education, certifications, internships, and projects through a modern, responsive web interface. It's built as a single-page application with a contact form that allows visitors to send messages, which are stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components for consistent, accessible design
- **Animations**: Framer Motion for smooth page transitions and scroll-based animations
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API with a single endpoint for contact form submissions
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Data Validation**: Zod schemas for runtime type checking and form validation
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Hot module replacement with Vite middleware integration

### Database Design
- **Primary Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Tables**: 
  - Users table for potential authentication features
  - Contacts table for storing form submissions with name, email, subject, message, and timestamp
- **Fallback Storage**: In-memory storage implementation for development/testing

### Development Architecture
- **Monorepo Structure**: Shared schema definitions between client and server
- **Type Safety**: Full-stack TypeScript with shared types and validation schemas
- **Asset Management**: Static asset serving with Vite in development, Express in production
- **Error Handling**: Centralized error handling with proper HTTP status codes and user-friendly messages

## External Dependencies

### Database & Hosting
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **DATABASE_URL**: Environment variable for database connection string

### UI & Design System
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Google Fonts**: Inter font family for typography
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media and brand icons

### Animation & Interaction
- **Framer Motion**: Animation library for page transitions and scroll-triggered animations
- **TanStack React Query**: Data fetching and caching library for API interactions

### Development Tools
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast bundling for production server builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **Replit Integration**: Custom plugins for Replit development environment compatibility

### Form Handling & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation for API requests and form data
- **@hookform/resolvers**: Integration between React Hook Form and Zod validation

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **express-session**: Session middleware for maintaining user state