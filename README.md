

# Tectonic Tribe - Tech Company Portfolio and Learning Dashboard

Welcome to the Tectonic Tribe project repository! This project aims to create a comprehensive platform for tech enthusiasts, particularly those in the Techtonic Fullstack Computation program. The platform features an engaging landing page, a resource-rich dashboard for learning MERN stack development, a blog section, and a real-time chat functionality with a Telegram-inspired UI.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The Tectonic Tribe platform is designed to serve as both a tech company portfolio and a learning environment for students. It includes an interactive landing page to showcase the company, a dashboard filled with programming resources, a blog section for sharing knowledge, and a real-time chat feature to facilitate communication among users.

## Features

1. **Landing Page:**
   - Company portfolio showcasing mission, values, projects, and team.
   - Overview of the tech stack with a focus on MERN stack.
   - Call to action for users to sign up or log in.
   - 
     ![Landing Page](client/public/landing.png)

2. **Dashboard:**
   - Resource hub with tutorials, articles, videos, and documentation.
   - User profile management to track learning progress.
   - Interactive quizzes, coding challenges, and project-based resources.
     
     ![Dashboard](client/public/dashbord.png)

3. **Blog Section:**
   - Platform for users to write and share blog posts.
   - Categories and tags to organize content.
   - Comment system for user interaction and feedback.
   
     ![Blog Section](client/public/blog.png)

4. **User Authentication:**
   - Secure registration and login system using Firebase.
   - Profile customization including profile picture, bio, and skills.
   - 
     ![Authentication](client/public/auth.png)

5. **Real-Time Chat:**
   - Search for users by username and initiate chat.
   - Chat functionality backed by Firebase Realtime Database.
   - User-friendly chat interface inspired by Telegram.
   - 
     ![Real-Time Chat](client/public/chatpage.png)

## Tech Stack
- **Frontend:** React.js , css , tailwind 
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Authentication and Chat:** Firebase

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tectonic-tribe.git
   cd tectonic-tribe
   ```

2. Install dependencies for both the client and server:
   ```bash
   # In the root directory
   cd server
   npm install

   # Navigate to the client directory
   cd client
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGODB_URI=your_mongodb_uri
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   ```

4. Start the development servers:
   ```bash
   # In the root directory (for backend)
   cd server
   nodemon server.js
  

   # In the client directory (for frontend)
   cd client
   npm run dev
   ```

## Usage
Once the servers are running, you can access the application at `http://localhost:3000`. Use the landing page to explore the Tectonic Tribe's portfolio, sign up or log in to access the dashboard, and start utilizing the learning resources. Check out the blog section to read and share posts. Connect with other users through the chat feature by searching for their usernames.

## Project Structure
```
tectonic-tribe/
│
├── client/                 # React frontend
│   ├── node_modules/       # Node modules
│   ├── public/             # Public assets
│   │   └── index.html      # Main HTML file
│   ├── src/                # Source files
│   │   ├── assets/         # Assets (images, etc.)
│   │   │   └── ...         # Include all your pictures and assets here
│   │   ├── dashboard/      # Dashboard feature
│   │   │   ├── components/ # Dashboard components
│   │   │   ├── pages/      # Dashboard pages
│   │   │   └── app.jsx     # Dashboard main app component
│   │   ├── portfolio/      # Portfolio feature
│   │   │   ├── components/ # Portfolio components
│   │   │   └── pages/      # Portfolio pages
│   │   ├── blog/           # Blog feature
│   │   │   ├── components/ # Blog components
│   │   │   ├── pages/      # Blog pages
│   │   │   └── app.jsx     # Blog main app component
│   │   ├── react-chat/     # Chat feature
│   │   │   ├── components/ # Chat components
│   │   │   ├── lib/        # Chat library
│   │   │   └── app.jsx     # Chat main app component
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Main entry point
│   ├── package-lock.json   # Package lock file
│   └── package.json        # Package configuration
│
├── server/                 # Express backend
│   ├── controllers/        # Controller files
│   ├── models/             # Database models
│   ├── routes/             # Route definitions
│   ├── server.js           # Server entry point
│   └── package.json        # Package configuration
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── README.md               # Project readme
└── package.json            # Root package configuration
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

   
 ## Check the Demo
   [click here](https://front-end-virid-eight.vercel.app)

## License
MIT License

[Link to License](LICENSE)

---

Thank you for visiting the Tectonic Tribe project repository! We hope this platform enhances your learning experience and helps you connect with fellow tech enthusiasts. If you have any questions or feedback, please don't hesitate to reach out.

---
## TEAM MATE
- [Fitsum Helina](https://github.com/fitsumhelina)
- [Yeabsira Behailu](https://github.com/Yabe12)

```

