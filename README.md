# Welcome to PupSupport! 
This is a website that can help people learn more about dogs in one central place!
If you are unsure where to start research wise about what kind of dog that you are looking for, or just want to learn 
more about dogs then this is the place for you!
This web application has the capabilities to show cards that has information about different pet breads someone might be interested in. 

This website pages includes:
- Home Page: Where users can browse different breeds of dogs and favorite them. Users can also filter by dogs temperament the kind of dog that they are looking for. 
- Favorites Page: The location where all their saved dogs will go.  
- Recommendations: Where users can look at different recommendations based on the breeds that they have previously favorited. This page will also include the different tips/ pieces of information that a user would want to look into when considering being a dog owner. 

# Web Application Actions
- Create Account
- Log-in/out
- Browse Dog Breeds
- Favorite Dog Breeds
- Review Favorites
- Look at recommendations 
- Review tips that involve being a dog owner 

# Tech Stack
- Frontend: React (with Vite)
- Routing: React Router
- Database: Firebase Firestore
- Authentication: Firebase Authentication
- Styling: CSS (separate files for components)

# Firebase Setup Instructions
 1. Create a new Firebase project at firebase.google.com
2. Enable Authentication (Email/Password method)
3. Create a Firestore database
4. Get your Firebase configuration from the Firebase console
5. Add the configuration to the firebase.js file

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
