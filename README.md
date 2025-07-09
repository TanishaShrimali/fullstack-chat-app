# Fullstack Chat App 💬

A real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).  
It supports user authentication, real-time messaging, and a clean, responsive UI.

## 🚀 Features

✅ User registration and login (with JWT authentication)  
✅ Secure password hashing with bcrypt  
✅ Real-time messaging using WebSocket or Socket.io  
✅ Upload and share media (optional: uses Cloudinary)  
✅ Sidebar with online/offline users  
✅ Responsive design for desktop and mobile

## 🛠️ Tech Stack

- **Frontend:** React, Vite (or CRA), TailwindCSS (or your chosen CSS framework)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **File Storage:** Cloudinary (if you have media upload)
- **Real-time:** Socket.io
- **Dev Tools:** Postman for API testing, GitHub for version control

## 📂 Project Structure
/client # React frontend
/server # Node.js + Express backend
/models # Mongoose schemas
/controllers # API logic
/routes # API routes
/middleware # Auth middlewares
/lib # Cloudinary config or other utilities

## 📸 Screenshots
![2025-07-09 (1)](https://github.com/user-attachments/assets/db561376-f6c1-4bda-8ff5-ea0cfed9d7ce)

![2025-07-09 (2)](https://github.com/user-attachments/assets/cdae5d92-914a-4462-a7a9-ca61260f16f0)

![2025-07-09![2025-07-09 (3)](https://github.com/user-attachments/assets/c939cf21-0b8f-470e-8af5-68e222c7a6ba)

 (4)](https://github.com/user-attachments/assets/003666bf-d1bf-47f1-910c-7fed89ffc770)
 
![2025-07-09 (5![2025-07-09 (6)](https://github.com/user-attachments/assets/6eb2c55a-8046-481c-a6cc-4c68d5df0556)

)](https://github.com/user-attachments/assets/14b25371-44f2-48b1-b69c-06331c339faf)

![2025-07-09 (7)](https://github.com/user-attachments/assets/8ee1bb4a-b1c8-4dc6-9086-a6e289cb28fe)

![2025-07-09](https://github.com/user-attachments/assets/90355251-34fe-4baa-8905-548671e64f1f)

## ⚙️ Installation & Run Locally

### 1️⃣ Clone the repo
git clone https://github.com/TanishaShrimali/fullstack-chat-app.git
cd fullstack-chat-app

### 2️⃣ Install dependencies
## For backend:
cd server
npm install

## For frontend:
cd ../client
npm install

### 3️⃣ Add Environment Variables

### Create a .env file in your server folder:
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>

### 4️⃣ Run the app

## Backend:
cd server
npm run dev
## Frontend:
cd client
npm run dev

### 5️⃣ Open in browser

Visit http://localhost:5173 for the frontend.
Backend runs on http://localhost:5000.
### 🧩 Future Improvements

Typing indicators
Group chats
Push notifications
Message reactions
Better error handling
Deployment (e.g., Render, Vercel, or Heroku)

### 🤝 Contributing
Contributions are welcome! Feel free to open issues or pull requests.
