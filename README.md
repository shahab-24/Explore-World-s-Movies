# Arabian World Movies

### Explore World Movies  
**Live Link:** [Explore World Movies](https://explore-world-movies.web.app/)

## About the Project  
Arabian World Movies is an interactive movie portal designed to enhance the movie-watching experience. Users can explore a diverse range of movies, rate them, write reviews, and maintain a personalized favorites list. The platform prioritizes user engagement, responsiveness, and a seamless user interface to create an enjoyable browsing experience.

---

## Features  
1. **Dynamic Movie Portal:**  
   Users can view, search, and explore movies with detailed information, including ratings, genres, and release years.

2. **User Authentication:**  
   Secure login and registration using Firebase authentication with options for social login (Google).

3. **Featured Movies Section:**  
   Highlights top-rated movies with a sleek carousel effect, integrated with SweetAlert2 for notifications.

4. **Responsive Design:**  
   Built with Tailwind CSS and DaisyUI, ensuring flawless display across all devices.

5. **Smooth Animations:**  
   Uses AOS and Animate.css for visually appealing animations on page load and user interactions.

6. **Star Rating System:**  
   Users can rate movies dynamically using React Rating Star.

7. **Advanced Search Functionality:**  
   Search movies by title and filter results based on rating and release year.

---

## Technology Stack  

### Frontend:  
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square) **React.js:** A powerful JavaScript library for building user interfaces.  
- ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square) **Tailwind CSS:** A utility-first CSS framework for rapid and responsive design.  
- ![DaisyUI](https://img.shields.io/badge/-DaisyUI-5A0FC8?logo=daisyui&logoColor=white&style=flat-square) **DaisyUI:** Pre-built components for Tailwind CSS to streamline UI development.  
- ![AOS](https://img.shields.io/badge/-AOS-00A8CC?style=flat-square) **AOS (Animate on Scroll):** Smooth scroll animations for a modern feel.  
- ![Animate.css](https://img.shields.io/badge/-Animate.css-FF4088?logo=css3&logoColor=white&style=flat-square) **Animate.css:** A CSS library for engaging animations.  
- ![React Hook Form](https://img.shields.io/badge/-React%20Hook%20Form-EC5990?logo=react&logoColor=white&style=flat-square) **React Hook Form:** Simplified form handling and validation.  
- ![React Rating Star](https://img.shields.io/badge/-React%20Rating%20Star-FFD700?logo=star&logoColor=white&style=flat-square) **React Rating Star:** For intuitive movie rating displays.  
- ![SweetAlert2](https://img.shields.io/badge/-SweetAlert2-5A5?style=flat-square) **SweetAlert2:** For user-friendly alerts and notifications.

### Backend:  
- ![Express](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=flat-square) **Express.js:** A robust web framework for Node.js, enabling server-side API development.  
- ![CORS](https://img.shields.io/badge/-CORS-FF5722?style=flat-square) **CORS:** Ensures secure Cross-Origin Resource Sharing for seamless client-server interaction.  
- ![dotenv](https://img.shields.io/badge/-dotenv-00C7B7?style=flat-square) **dotenv:** Manages environment variables securely.

### Authentication and Database:  
- ![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-square) **Firebase:** Handles user authentication and client-side hosting.  
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square) **MongoDB:** Stores movie data for dynamic CRUD operations.


---

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.0.0",
    "daisyui": "^2.0.0",
    "firebase": "^9.0.0",
    "react-router-dom": "^6.0.0",
    "react-rating-star": "^1.0.0",
    "sweetalert2": "^11.0.0",
    "react-hook-form": "^7.0.0",
    "axios": "^0.27.0",
    "aos": "^2.0.0",
    "animate.css": "^4.0.0",
    "dotenv": "^16.0.0"
  }
}
{
  "devDependencies": {
    "vite": "^4.0.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.0.0",
    "babel-eslint": "^10.0.0"
  }
}
## Learning Implementation and Goals  
This project showcases my ability to:  
1. Design and implement a responsive, dynamic, and interactive web application.  
2. Work with modern frontend frameworks like React and integrate them with robust backend services.  
3. Securely handle user authentication and manage sensitive data with Firebase and MongoDB.  
4. Create smooth animations and user-friendly designs with tools like AOS, Animate.css, and DaisyUI.  
5. Develop advanced search and filtering functionalities for an enhanced user experience.  
6. Showcase strong problem-solving and debugging skills through real-time CRUD operations.  
7. Demonstrate my understanding of full-stack development, database management, and API integration.  
8. Build an engaging user interface with seamless navigability, improving user experience.  
9. Work on deploying and maintaining both frontend and backend for a smooth user interaction.

---

## Deployment  
- **Frontend:** Hosted on Firebase for fast and reliable client-side delivery.  
- **Backend:** Deployed on Vercel for seamless server-side performance.

---

## Running the Project Locally  

### Prerequisites  
Make sure you have the following installed on your local machine:  
- **Node.js** (with npm)  
- **MongoDB** (if working with the database locally)  
- **Firebase** (for authentication and hosting setup)

### Steps to Run Locally  
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/your-username/arabian-world-movies.git
   cd arabian-world-movies


Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root of your project.
Add your Firebase credentials and MongoDB URL to the .env file:
makefile
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_MONGODB_URI=your-mongodb-uri
Start the project locally:

bash
Copy code
npm start
Visit http://localhost:3000 to view the project in your browser.

Repository Insights
This repository is pinned to highlight my web development expertise, focusing on full-stack development, responsive design, and user experience optimization. I welcome feedback from recruiters and fellow developers to improve further and look forward to contributing to exciting projects globally.

Contact
Name: Shahab Uddin
LinkedIn: www.linkedin.com/in/shahab-uddin24
GitHub: https://github.com/shahab-24
Email: shahabctg24@gmail.com
