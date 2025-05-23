# LinkUp - Social Networking Platform (Frontend)

## Overview

LinkUp is a modern social networking platform designed to connect people through shared interests, events, and communities. This repository contains the frontend implementation of LinkUp, built with React.js and a comprehensive suite of supporting libraries to deliver a responsive, interactive user experience.

## Key Features

- **User Authentication**: Secure login/signup with JWT token management
- **Profile Management**: Customizable user profiles with avatar uploads
- **Social Interactions**: Post creation, liking, commenting, and sharing
- **Event Management**: Create, join, and discover local events
- **Real-time Updates**: WebSocket integration for live notifications
- **Responsive Design**: Fully mobile-responsive UI with adaptive layouts
- **Dark/Light Mode**: User-selectable theme preferences

## Technologies Used

### Core Framework
- React 18 (Functional Components with Hooks)
- React Router v6 for navigation

### State Management
- Redux Toolkit with RTK Query
- React Context API for theme management

### UI Components
- Material-UI (MUI) v5 with custom theme
- Styled Components for CSS-in-JS
- React Icons library

### API Interaction
- Axios for HTTP requests
- WebSocket for real-time features
- Formik with Yup for form handling and validation

### Build & Deployment
- Vite build tool
- ESLint + Prettier for code quality
- GitHub Actions for CI/CD

## Project Structure
```bash
src/
├── assets/ # Static assets (images, fonts)
├── components/ # Reusable UI components
│ ├── common/ # Generic components (buttons, modals)
│ ├── layout/ # Layout components (header, footer)
│ └── features/ # Feature-specific components
├── config/ # App configuration
├── hooks/ # Custom React hooks
├── pages/ # Route-level components
├── redux/ # Redux store, slices, and queries
├── services/ # API service layer
├── styles/ # Global styles and theme
├── utils/ # Utility functions and helpers
└── App.jsx # Main application component
```
## Installation

1. Clone the repository:
    ```bash
      git clone https://github.com/emmanuelronoh/Linkup-frontend.git
      cd Linkup-frontend
    ```
2. Install dependencies:

    ```bash
      npm install
    ```
3. Create a .env file based on .env.example and populate with your environment variables.

4. Start the development server:

    ```bash
      npm run dev
    ```
## Configuration

The application requires the following environment variables:
```bash
VITE_API_BASE_URL=your_backend_api_url
VITE_WS_URL=your_websocket_url
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_DEFAULT_AVATAR_URL=default_avatar_image_url
```

**Available Scripts**:
  ```bash
    npm run dev: Starts development server

    npm run build: Creates production build

    npm run lint: Runs ESLint

    npm run format: Formats code with Prettier

    pm run preview: Previews production build locally
  ```
## Contributing
**We welcome contributions! Please follow these steps:**

1. Fork the repository

2. Create a feature branch (git checkout -b feature/your-feature)

3. Commit your changes (git commit -m 'Add some feature')

4. Push to the branch (git push origin feature/your-feature)

5. Open a Pull Request

## Backend Integration
**This frontend is designed to work with the LinkUp Backend API. Ensure you have the backend service running and properly configured before starting the frontend application.**

## License
**This project is licensed under the MIT License - see the LICENSE file for details.**

## Contact
For questions or support, please contact:

Emmanuel Kipkirui - eronoh036@gmail.com

Project Link: https://github.com/emmanuelronoh/Linkup-frontend

