# 🎬 Netflix Clone - Frontend Project 🍿

## ✨ Overview

This project is a frontend-only implementation of a Netflix-style movie streaming platform. 🚀 It allows users to browse movies, view details, search, filter by categories, add movies to favorites, and toggle between light and dark modes. 🌙 This project is built using React, HTML, CSS, Bootstrap, and JavaScript, focusing on creating a dynamic and responsive user interface. 💻

## ✅ Project Goals

-   ✅ Build an industry-standard, fully responsive UI using React, Bootstrap, and CSS.
-   ✅ Implement dynamic rendering of movie content using JavaScript.
-   ✅ Use React Router for navigation between different pages.
-   ✅ Store favorite movies in LocalStorage for persistence.
-   ✅ Implement a dark mode toggle for an enhanced user experience.
-   ✅ Deploy the project on Netlify or Vercel. ☁️

## 🚀 Live Demo

[**Visit the Live Demo!**](https://netflix-clone-livid-theta.vercel.app/) 🌐

## 🌟 Features

-   **🏠 Homepage (Movie Dashboard):**
    -   ✨ Hero Banner showcasing the latest movie.
    -   🎞️ Movie Grid displaying multiple movies with images, titles, and ratings.
    -   🖱️ Clicking on a movie navigates to the Movie Details Page.
-   **🧭 Navigation & Routing:**
    -   🔗 A Navbar with links to Home, Favorites, and Search.
    -   ➡️ Uses React Router for seamless page transitions.
-   **ℹ️ Movie Details Page:**
    -   🎬 Displays movie name, description, genre, release date, and rating.
    -   ▶️ Shows the trailer of the movie or a fallback image if the trailer is not available
    -   ❤️ Includes an "Add to Favorites" button.
-   **⭐ Favorites Page:**
    -   💖 Displays a list of saved favorite movies.
    -   🗑️ Users can remove movies from favorites.
    -   💾 Uses LocalStorage to retain data after refresh.
-   **🔍 Search & Filter Functionality:**
    -   🔎 A search bar to find movies by title.
    -   🗂️ Genre filter dropdown to filter movies by category.
    -   🔄 Movies update dynamically based on search/filter inputs.
-   **🌓 Dark Mode Toggle:**
    -   🔆 A button to switch between light and dark themes.
    -   💡 Implemented using React Context API.
-   **🎨 UI/UX Enhancements:**
    -   👆 Hover effects on movie cards.
    -   💫 Smooth animations & transitions.
    -   ⏳ Loading spinner while fetching data.
-   **📱 Fully Responsive Design:**
    -   💯 Works seamlessly on mobile, tablet, and desktop devices.
    -   🧱 Utilizes Bootstrap Grid and CSS media queries for responsiveness.

## 🛠️ Technologies Used

-   **⚛️ React:** A JavaScript library for building user interfaces.
-   **📃 HTML:** Standard markup language for creating web pages.
-   **🎨 CSS:** Used for styling the user interface.
-   **💙 Bootstrap:** A CSS framework for developing responsive and mobile-first web sites.
-   **📜 JavaScript:** Programming language for implementing dynamic behavior.
-   **📍 React Router:** For handling navigation in the React application.
-   **▶️ React Player**: For playing YouTube video trailer.
-   **🔗 Axios:** For making HTTP requests to the movie database API.
-   **🗂️ TMDB API:** The Movie Database API for fetching movie data.
-   **💾 LocalStorage:** Used for storing favorite movies locally.
-   **☯️ React Context API:** For managing and toggling dark mode.

## ⚙️ Setup Instructions

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd [project-directory]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Obtain API Keys:**

    -   🔑 Create an account on [TMDB](https://www.themoviedb.org/) to get your API key.
    -   📝 Replace `'YOUR_API_KEY'` in `src/components/MovieDetails.js` and `src/pages/Home.js` with your actual API key.
    -   Also replace `"YOUR_SERVER_URL"` in `src/components/MovieDetails.js` with your server url.

4.  **Start the application:**

    ```bash
    npm start
    ```

    This will start the development server, and the application will be accessible at `http://localhost:3000`. 🌐

## 🌍 Environment Variables

The project requires the following environment variables to be set:

-   `REACT_APP_TMDB_API_KEY`: Your TMDB API key. 🔑

## 🚀 Deployment

This project is deployed on Vercel.

[**Live Deployment Link:**](https://netflix-clone-livid-theta.vercel.app/)

-   To deploy this project yourself, you can use platforms like Netlify or Vercel. Here’s a general outline:
    1.  **Create a production build:**

        ```bash
        npm run build
        ```

    2.  **Deploy to Netlify:**

        *   ☁️ Sign up or log in to [Netlify](https://www.netlify.com/).
        *   📁 Drag and drop the `build` folder into Netlify to deploy.
        *   ⚙️ Set environment variables for the TMDB API key in Netlify's settings.

    3.  **Deploy to Vercel:**

        *   ⚡ Sign up or log in to [Vercel](https://vercel.com/).
        *   📦 Import the project from your Git repository.
        *   Vercel will automatically detect it's a React project and deploy it.
        *   ⚙️ Set environment variables for the TMDB API key in Vercel's settings.

## ⚠️ Known Issues

-   **Responsiveness:** While the application is designed to be responsive, certain screen sizes or devices may experience layout issues. Further testing and adjustments may be required. 🔍
-   **Error Handling:** There could be improvement in the application's error handling to inform the user more effectively. 🤔

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1.  🍴 Fork the repository.
2.  🌿 Create a new branch for your feature or bug fix.
3.  ✍️ Make your changes and commit them with descriptive commit messages.
4.  🚀 Push your changes to your fork.
5.  📤 Submit a pull request to the main repository.

Please follow the [Code of Conduct](link-to-code-of-conduct) when contributing. 📜

## 🧑‍💻 Contact

Harsh Benuskar - [harshbenuskar007@gmail.com](mailto:harshbenuskar007@gmail.com) 📧

## 🙏 Acknowledgments

-   This project uses the [TMDB API](https://www.themoviedb.org/documentation/api) for movie data. 🗂️
-   The UI is inspired by Netflix's design. 🌟

## 🔮 Future Enhancements

-   🔐 Implement user authentication and login functionality.
-   ℹ️ Add more detailed movie information, such as cast and crew details.
-   🎥 Implement a video streaming feature (using a third-party video player).
-   ✨ Enhance the UI with more advanced animations and transitions.
-   🧪 Add unit and integration tests for improved code quality.

## 🧑‍💼 Credits

-   Harsh Benuskar (Lead Developer) 😎
