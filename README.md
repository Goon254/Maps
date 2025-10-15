# Maps Project - CS 465 Fall 2025

## Oh, the places you've been! 🗺️

This repository contains an interactive map application built for CS 465 Lab 2. The application allows users to click on a map to mark locations they've been, lived, or want to visit, with detailed information for each location.

## Project Structure

```
Maps/
├── places-map/          # Main React application
│   ├── src/            # Source code
│   ├── public/         # Public assets
│   ├── package.json    # Dependencies
│   └── README.md       # Detailed project documentation
└── README.md           # This file
```

## Quick Start

1. Navigate to the project directory:
   ```bash
   cd places-map
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open http://localhost:3000 in your browser

## Features Implemented

✅ **Core Requirements**
- Interactive map using Leaflet and OpenStreetMap
- Click to add location markers
- Location information form with multiple fields
- Display list of locations with details
- Marker popups showing location information
- "Done" button to stop adding locations
- "Reset" button to clear all locations
- Responsive CSS styling
- Clean, well-documented code

✅ **Extra Credit Features**
- Toggle location list visibility
- Location categories with color-coded badges
- Mobile-responsive design
- Detailed location information display
- Professional UI with animations

## Technology Stack

- **React 19.2.0** - Frontend framework
- **Leaflet 1.9.4** - Interactive maps
- **React-Leaflet 5.0.0** - React integration for Leaflet
- **OpenStreetMap** - Free map tiles (no API key required)
- **CSS3** - Custom responsive styling

## Deployment

The application is ready for deployment on Render.com or other static hosting platforms. See the detailed README in the `places-map` directory for deployment instructions.

## Lab Requirements Checklist

- [x] Interactive map with click functionality
- [x] Location markers with information
- [x] Location list display
- [x] Done/Reset functionality
- [x] Responsive CSS styling
- [x] Clean, documented code
- [x] README with setup instructions
- [x] Ready for deployment

## Development

For detailed development information, setup instructions, and technical documentation, see the [places-map README](places-map/README.md).

---

**Course**: CS 465 - Full Stack Web Development  
**Semester**: Fall 2025  
**Lab**: Lab 2 - Interactive Maps
