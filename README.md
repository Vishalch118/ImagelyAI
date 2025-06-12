# ImagelyAI 🎨

An AI-powered image generation platform that transforms text prompts into stunning visual artwork .

## 🌟 Features

- **AI Image Generation**: Create high-quality images from text descriptions
- **User Authentication**: Secure login and signup functionality
- **Credit System**: Token-based usage tracking for fair resource allocation
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Real-time Processing**: Fast image generation with progress tracking
- **Modern UI/UX**: Clean, intuitive interface built with React

## 🚀 Live Demo

**Frontend**: [https://imagelyai-frontend.onrender.com](https://imagelyai-frontend.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Responsive styling
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for user and image data
- **Mongoose** - MongoDB object modeling library
- **JWT** - JSON Web Tokens for secure authentication
- **bcrypt** - Password hashing library

### Deployment
- **Render** - Cloud platform for frontend and backend hosting
- **MongoDB Atlas** - Cloud database service

## 📁 Project Structure

```
ImagelyAI/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Context providers
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images, icons, styles
│   │   └── App.js          # Main app component
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── config/             # Database and configuration files
│   ├── controllers/        # Route handlers and business logic
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API route definitions
│   ├── middleware/         # Custom middleware functions
│   └── server.js           # Main server file
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- AI API credentials (Clipdrop API)

### 1. Clone the Repository
```bash
git clone https://github.com/Vishalch118/ImagelyAI.git
cd ImagelyAI
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
AI_API_KEY=your_ai_api_key
FRONTEND_URL=http://localhost:3000
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Create a `.env` file in the client directory:
```env
REACT_APP_BACKEND_URL=http://localhost:4000
```

Start the frontend development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🚀 Deployment

### Backend Deployment (Render)
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables in Render dashboard

### Frontend Deployment (Render)
1. Create a new Static Site on Render
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables for production

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vishal Charugundla**
- GitHub: [@Vishalch118](https://github.com/Vishalch118)
- LinkedIn: [Vishal Ch](https://www.linkedin.com/in/vishalch1/)

## 🙏 Acknowledgments

- React community for excellent development tools
- Render for reliable hosting services
- MongoDB for scalable database solutions

⭐ Star this repository if you find it helpful!

Built with ❤️ using MERN Stack .
