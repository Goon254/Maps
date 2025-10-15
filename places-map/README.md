# Oh, the places you've been! 🗺️

An interactive map application built with React and Leaflet that allows users to mark and track places they've been, lived, or want to visit. Click on the map to add locations with detailed information and view them in an organized list.

## Features

### Core Functionality
- **Interactive Map**: Click anywhere on the map to add a new location
- **Location Information**: Add detailed information for each location including:
  - Location name
  - Category (Place I've Lived, Visited, Want to Visit, Favorite Place)
  - Description
  - Years/Time period
  - Additional notes
- **Location List**: View all added locations in a sidebar with complete details
- **Marker Popups**: Click on map markers to view location information
- **Done Mode**: Stop adding locations and focus on viewing existing markers
- **Reset Functionality**: Clear all locations and start over

### Extra Credit Features Implemented
- **Toggle Location List**: Close and reopen the list of entered places
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Location Categories**: Organize places by type with color-coded badges
- **Detailed Information Display**: Rich information display in both list and popup views

## Technology Stack

- **React 19.2.0**: Frontend framework
- **Leaflet 1.9.4**: Interactive map library
- **React-Leaflet 5.0.0**: React components for Leaflet
- **OpenStreetMap**: Free map tiles (no API key required)
- **UUID**: Unique identifier generation
- **CSS3**: Custom styling with responsive design

## Setup and Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Maps/places-map
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application should load automatically

### Build for Production

To create a production build:
```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## How to Use

### Adding Locations
1. **Click on the map** where you want to add a location
2. **Fill out the modal form** with location details:
   - **Location Name** (required): e.g., "New York City", "My Childhood Home"
   - **Category**: Choose from lived, visited, want to visit, or favorite
   - **Description**: Brief description of the place
   - **Years/Time Period**: When you lived there or visited
   - **Additional Notes**: Any extra information like favorite restaurants, memories, etc.
3. **Click "Add Location"** to save

### Viewing Locations
- **Location List**: View all locations in the sidebar with complete details
- **Map Markers**: Click on any marker to see a popup with location information
- **Toggle List**: Use the "Hide List" / "Show Locations" button to toggle the sidebar

### Managing Your Map
- **Done Button**: Click when finished adding locations to enter view-only mode
- **Reset Button**: Clear all locations and start over
- **Responsive Design**: The interface adapts to different screen sizes

## Project Structure

```
places-map/
├── public/
│   ├── index.html          # Main HTML template
│   └── ...                 # Other public assets
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── index.js            # React entry point
│   └── ...                 # Other React files
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Key Components

### App.js
- Main application component
- Manages application state (locations, UI modes)
- Handles map interactions and location management

### MapClickHandler
- Custom component to handle map click events
- Only active when in "adding locations" mode

### LocationModal
- Modal form for entering location details
- Validates required fields
- Generates unique IDs for locations

### LocationList
- Displays all added locations in a sidebar
- Toggleable visibility
- Responsive design for mobile devices

## Styling and Design

- **Modern UI**: Clean, professional interface with gradient headers
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktop
- **Color-Coded Categories**: Different colors for different location types
- **Smooth Animations**: Fade-in effects and hover transitions
- **Accessibility**: Focus states and proper contrast ratios

## Development Challenges and Solutions

### Challenge 1: Leaflet Marker Icons
**Problem**: Default Leaflet markers don't display properly in React applications.
**Solution**: Manually configured marker icons with CDN URLs for proper display.

### Challenge 2: Map Click Handling
**Problem**: Need to distinguish between adding locations and viewing mode.
**Solution**: Created a custom `MapClickHandler` component that only responds to clicks when in adding mode.

### Challenge 3: Responsive Design
**Problem**: Map and sidebar layout needed to work on various screen sizes.
**Solution**: Implemented CSS Grid and Flexbox with media queries for mobile-first responsive design.

### Challenge 4: State Management
**Problem**: Managing complex state for locations, UI modes, and modal visibility.
**Solution**: Used React hooks (useState) with clear state structure and proper state updates.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This application can be deployed to various platforms:

### Render.com (Recommended for this project)
1. Connect your GitHub repository to Render
2. Choose "Static Site" as the service type
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy

### Other Deployment Options
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Future Enhancements

Potential features for future versions:
- **Location Search**: Search for locations by name or address
- **Import/Export**: Save locations to JSON/CSV files
- **Weather Integration**: Show current weather for locations
- **Photo Upload**: Add photos to location entries
- **Location Sharing**: Share individual locations or entire maps
- **Offline Support**: Cache map tiles for offline viewing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Leaflet**: Amazing open-source mapping library
- **OpenStreetMap**: Free, editable map data
- **React Team**: For the excellent React framework
- **Create React App**: For the initial project setup

---

**Live Demo**: [Your deployed application URL here]
**Repository**: [Your GitHub repository URL here]

Built with ❤️ for CS 465 - Fall 2025
