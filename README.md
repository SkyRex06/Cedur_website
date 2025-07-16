
# Cedur Website

Cedur is a modern HR and payroll management platform designed to simplify operations for businesses of all sizes. This repository contains the source code for the Cedur website, including the frontend (React, Vite, Tailwind, shadcn-ui) and backend (Node.js, Express, MongoDB).

## Features

- Modern, responsive UI built with React, Vite, and Tailwind CSS
- Custom color palette for a visually appealing look
- Pages: Home, Features, Pricing, FAQ, Login, Signup, About, Contact, Terms, Policy, Dashboard, Profile, and more
- Authentication (Login/Signup)
- Contact form with backend integration
- Dynamic pricing cards and feature highlights
- FAQ accordion and information pages
- Backend API for user management and contact submissions

## Technologies Used

- Frontend: React, Vite, TypeScript, Tailwind CSS, shadcn-ui
- Backend: Node.js, Express, MongoDB (Mongoose)

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB Atlas or local MongoDB instance

### Installation
```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd cedur-Website

# Install dependencies for frontend
npm install

# Install dependencies for backend
cd backend
npm install
```

### Environment Variables

Create a `.env` file in the `backend/` directory:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

### Running Locally

#### Backend
```sh
cd backend
npm start
```

#### Frontend
```sh
cd ..
npm run dev
```

### Deployment

- Deploy the frontend using Vercel, Netlify, or Railway
- Deploy the backend using Railway or Render
- Set environment variables in your deployment platform

### Custom Domain

You can connect a custom domain via your deployment platform or Cedur dashboard.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
