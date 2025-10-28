# 🗂️ TaskVault — Express + MongoDB + JWT Authentication

TaskVault is a simple yet production-style **task management API** built using **Node.js**, **Express**, **MongoDB**, and **JWT authentication**.  
It demonstrates modern backend best practices like modular structure, authentication middleware, and environment-based configuration.

---

## 🚀 Features

- User registration and login using JWT
- Secure password hashing with bcrypt
- CRUD operations for personal tasks
- Protected routes — only authenticated users can access their tasks
- MongoDB connection using Mongoose
- Modular and scalable project structure

---

## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ODM  
- **Authentication:** JWT (JSON Web Token)  
- **Environment Management:** dotenv  

---

## 📁 Folder Structure
TaskVault/
│
├── config/
│ └── db.js # MongoDB connection
│
├── controllers/
│ ├── userController.js # Handles user register/login
│ └── taskController.js # Handles CRUD for tasks
│
├── middleware/
│ └── authMiddleware.js # Protect routes using JWT
│
├── models/
│ ├── userModel.js # User schema
│ └── taskModel.js # Task schema
│
├── routes/
│ ├── userRoutes.js # /api/users endpoints
│ └── taskRoutes.js # /api/tasks endpoints
│
├── .env # Environment variables
├── index.js # Main entry file
├── package.json
└── README.md



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/taskvault.git
cd taskvault
2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4️⃣ Start the Server
npm start


The server will start on: http://localhost:5000

🧠 API Endpoints
👤 User Authentication Routes (/api/users)
Method	Endpoint	Description	Auth Required
POST	/register	Register a new user	❌
POST	/login	Login user and get token	❌
🔹 Example: Register User

POST /api/users/register

{
  "name": "Akhil",
  "email": "akhil@example.com",
  "password": "123456"
}


Response:

{
  "message": "User registered successfully",
  "token": "<jwt_token>"
}

🔹 Example: Login User

POST /api/users/login

{
  "email": "akhil@example.com",
  "password": "123456"
}


Response:

{
  "message": "Login successful",
  "token": "<jwt_token>"
}

✅ Task Management Routes (/api/tasks)
Method	Endpoint	Description	Auth Required
GET	/	Get all tasks	✅
POST	/	Create new task	✅
PUT	/:id	Update existing task	✅
DELETE	/:id	Delete task	✅
🔹 Example: Create Task

POST /api/tasks

{
  "title": "Complete Project",
  "description": "Finish TaskVault backend project"
}


Response:

{
  "_id": "65fba6df1a...",
  "title": "Complete Project",
  "description": "Finish TaskVault backend project",
  "user": "65fba6b21c...",
  "createdAt": "2025-10-28T11:25:44.000Z"
}

🔐 JWT Authentication Flow

User registers or logs in to get a JWT token.

The token must be sent in the Authorization header as:

Authorization: Bearer <token>


The backend verifies the token in authMiddleware.js.

If valid, it attaches the logged-in user info to req.user.

🧾 Example Workflow

Register → /api/users/register

Login → /api/users/login

Copy JWT token → use in Authorization header

Create/Get/Update/Delete tasks → /api/tasks/...

🧰 Useful Commands
Command	Description
npm start	Start the server
npm run dev	Start with nodemon (if installed)
npm install	Install all dependencies
📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Akhil Varma Nadimpalli
Node.js | Express | MongoDB | JWT | REST APIs


---

✅ You can paste this directly as your `README.md` file in the project root.  
Would you like me to add **API testing examples (Postman collection format)** too?
