# **ShowFlix** 🎬

**ShowFlix** is a lightweight application that enables users to authenticate, browse, and watch movies seamlessly. Built using **React**, it integrates **Firebase for authentication** and **Google Cloud Storage** for movie hosting, offering a smooth streaming experience.

---

## 📑 **Table of Contents**

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [How It Works](#how-it-works)
- [Setup](#setup)
- [Technologies Used](#technologies-used)

---

## 🚀 **Overview**

This platform allows users to **sign in with Google, browse movies, and stream them directly** from Google Cloud Storage. The metadata (titles, descriptions, and movie URLs) is stored locally in a **JSON file**, ensuring a quick and lightweight implementation.

This is a basic proof of concept, real-world movie streaming solutions require **backend infrastructure, a database, and a CDN** for improved performance and scalability.

---

**Demo**

Watch it in action!  

<a href="https://drive.google.com/file/d/1HKz-R_m1I9Ddrjaf7wuvdCxriyDw1bea/view?usp=sharing">
    <img src="https://github.com/chandrika1645/ShowFlix/blob/main/public/media/demo.gif" width="700">
</a>

## 🎬 **Screenshots**

**View**

 <img src="https://raw.githubusercontent.com/chandrika1645/ShowFlix/main/public/media/login-page.png" width="700">

**Home page**

 <img src="https://raw.githubusercontent.com/chandrika1645/ShowFlix/main/public/media/home-page.png" width="700">

**Movies page**

  <img src="https://raw.githubusercontent.com/chandrika1645/ShowFlix/main/public/media/movies.png" width="700">

**Movie**

  <img src="https://raw.githubusercontent.com/chandrika1645/ShowFlix/main/public/media/movie-page.png" width="700">


---

## 🛠️ **Features**

### **User Authentication**
- Google OAuth-based authentication using **Firebase**.
- Secure login and session management.

### **movie Management**
- **Metadata Storage**: Stores movie details in a **local JSON file**.
- **Google Cloud Storage**: Hosts movie files for streaming.
- **Dynamic Fetching**: Loads movie details and streams them dynamically.

### **User-Friendly UI**
- Built with **React** for a smooth and responsive experience.
- Simple and intuitive navigation.

### **Scalability Considerations**
- While this version uses a JSON file for metadata, **real-world applications** should use a database (e.g., **PostgreSQL, Firebase Firestore, or MongoDB**).
- A **CDN** should be used for optimized movie delivery.

---

## 🔄 **How It Works**

1. **User Authentication**: Users log in via Firebase Google Authentication.
2. **Fetching movie Data**: The app retrieves movie details from the JSON file.
3. **Streaming movies**: The player loads and streams movies directly from Google Cloud Storage.
4. **User Experience**: Users can browse, search, and watch movies in an interactive UI.

---

## ⚙️ **Setup**

### **Prerequisites**
- Node.js installed
- Firebase project set up with Google Authentication enabled
- Google Cloud Storage bucket configured

### **Steps to Run**

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/chandrika1645/ShowFlix.git
   ```
   
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Configure Firebase:**
   - Create a `.env` file and add your Firebase credentials.
   ```sh
   REACT_APP_FIREBASE_API_KEY=
   REACT_APP_FIREBASE_AUTH_DOMAIN=
   REACT_APP_FIREBASE_PROJECT_ID=
   REACT_APP_FIREBASE_STORAGE_BUCKET=
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
   REACT_APP_FIREBASE_APP_ID=
   REACT_APP_FIREBASE_MEASUREMENT_ID=
   ```

4. **Start the Application:**
   ```sh
   npm start
   ```
   The app will now be available at `http://localhost:3000`.

---

## 🧑‍💻 **Technologies Used**

- **React.js** - Frontend framework for UI development.
- **Firebase Authentication** - Handles user authentication.
- **Google Cloud Storage** - Stores and serves movie content.
- **JavaScript** - Core logic and dynamic rendering.

---

**ShowFlix** is a simple yet powerful proof of concept for a movie streaming application. Future improvements may include **backend integration, database support, user roles, and adaptive streaming** for an enhanced experience. 🚀
