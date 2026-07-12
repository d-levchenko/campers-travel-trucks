# 🚐 Camper Travel Trucks

Camper Travel Trucks is a modern camper rental catalog built with Next.js. The
project lets users browse available campers, filter them by location, engine
type, form, and transmission, view detailed information about each camper, and
submit booking requests.

## 🚀 Live Demo

Explore the project here:

-[View live application](https://campers-travel-trucks-flax.vercel.app/)

## ✨ Features

- Responsive landing page with a hero section and call-to-action
- Catalog page with a searchable and filterable camper list
- Detailed camper pages with photos, specifications, reviews, and booking form
- Client-side booking form with validation and toast notifications
- Fast navigation and optimized data fetching with React Query
- Modern UI with CSS modules and Tailwind styling

## 🛠️ Tech Stack

- Next.js 16
- React 19
- TypeScript
- TanStack React Query
- Tailwind CSS
- CSS Modules
- ESLint

## 📦 Installation

1. Clone the repository

   ```bash
   git clone https://github.com/d-levchenko/campers-travel-trucks.git
   cd campers-travel-trucks
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser at
   ```text
   http://localhost:3000
   ```

## 🚀 Available Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production build locally
- `npm run lint` – run ESLint checks

## 📁 Project Structure

```text
app/                # App router pages and layouts
components/         # Reusable UI components
lib/                # API helpers and utilities
providers/          # Context providers
public/             # Static assets and images
types/              # TypeScript interfaces and types
utils/              # Helper functions
```

## 🔧 API

The application fetches camper data from the campers API and supports:

- listing campers
- fetching filter options
- loading camper details
- loading reviews
- submitting booking requests

## 📄 Notes

This project is designed as a polished front-end experience for browsing and
booking camper vans, with a clean layout and modern interaction patterns.
