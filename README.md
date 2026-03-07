# 📚 Personal Book Manager

A full-stack **Personal Book Management App** that allows users to manage their reading collection.
Users can **sign up, log in, add books, edit them, filter by tags or reading status, and track their reading list**.

🔗 **Live Demo:**
https://personal-book-manager-ten.vercel.app/
 
(Important)
Render free backend sleeps after ~15 minutes, so the first signup/login request may take 10–15 seconds. That is normal.

---

# 🚀 Features

* 🔐 **User Authentication**

  * Signup & Login with JWT authentication
  * Protected dashboard routes

* 📚 **Book Management**

  * Add new books
  * Edit existing books
  * Delete books

* 🏷 **Filtering**

  * Filter books by **tags**
  * Filter books by **reading status**

* 📊 **Reading Status**

  * Want to Read
  * Reading
  * Completed

* 🎨 **Modern UI**

  * Built with TailwindCSS
  * Responsive design

---

# 🛠 Tech Stack

### Frontend

* Next.js
* TypeScript
* TailwindCSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

### Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

# 📂 Project Structure

```
personal-book-manager
│
├── frontend
│   ├── app
│   │   ├── dashboard
│   │   ├── login
│   │   ├── signup
│   │   └── globals.css
│   │
│   ├── components
│   │   ├── Navbar.tsx
│   │   └── BookCard.tsx
│   │
│   ├── services
│   │   └── api.ts
│   │
│   └── types
│       └── book.ts
│
└── backend
    ├── controllers
    ├── models
    ├── routes
    ├── middleware
    └── index.js
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/VinodSingh07/Personal-book-manager.git
cd Personal-book-manager
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create `.env`

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
```


Run frontend:

```
npm run dev
```

---

# 🌍 Deployment

### Frontend

Deployed on **Vercel**

### Backend

Deployed on **Render**

### Database

Hosted on **MongoDB Atlas**

---

# 🔐 Authentication Flow

```
User Signup/Login
        ↓
JWT Token Generated
        ↓
Token Stored in LocalStorage
        ↓
Axios sends token with API requests
        ↓
Protected backend routes verify token
```

---

# 📸 Screenshots

<img width="1276" height="1282" alt="image" src="https://github.com/user-attachments/assets/31472afe-501b-4642-a744-7c1e07a9d8e5" />
<img width="1274" height="1029" alt="image" src="https://github.com/user-attachments/assets/bbc9fa43-ddf6-4dad-9663-48334d0f1f4a" />


Example:

* Login Page
* Dashboard
* Add Book
* Filter Books

---

# 🧠 Future Improvements

* Book search feature
* Pagination
* Dark mode
* Reading progress tracking
* Book cover image upload

---

# 👨‍💻 Author

**Vinod Singh**

GitHub
https://github.com/VinodSingh07

---

# ⭐ If you like this project

Give it a **star ⭐ on GitHub**.
