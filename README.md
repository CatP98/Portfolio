# Portfolio Website
A single-page application (SPA) showcasing my portfolio, including GitHub repositories with details on frameworks, tools, and languages used. The website features search functionality, infinite scrolling, and GitHub OAuth authentication.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [How to Run the Project](#how-to-run-the-project)
- [Future Improvements](#future-improvements)
- [Problems Encountered](#problems-encountered)
- [What I Have Learned](#what-i-have-learned)

## Project Description

The Portfolio Website is designed to showcase the developer's skills, projects, and tools used. It integrates with the GitHub API to fetch and display repository details, including frameworks and tools used, providing users with an interactive and engaging experience. The site features a search function to explore projects, infinite scrolling to view more repositories, and GitHub OAuth authentication for personalized access.

**Key Concepts Covered:**
- Single-Page Application (SPA) development
- GitHub API integration
- Search and filtering functionality
- Infinite scrolling
- OAuth authentication

## Features

- **Dynamic Repository Display:** Fetches and displays GitHub repositories, showing project names, languages, and frameworks/tools used.
- **Search Functionality:** Allows users to search for projects based on keywords related to languages, frameworks, or tools.
- **Infinite Scrolling:** Automatically loads more projects as users scroll down, enhancing user experience.
- **OAuth Authentication:** Integrates GitHub OAuth for user authentication.
- **Interactive UI:** Project boxes display additional details on hover and link to the GitHub repository.

## Project Structure


**File Descriptions:**

- **about.js:** Manages the functionality for the About page.
- **app.js:** Handles the main application logic on the home page.
- **auth.js:** Contains OAuth authentication logic.
- **githubApi.js:** Interacts with the GitHub API to fetch repository data.
- **dataService.js:** Manages data fetching and caching.
- **dynamicElements.js:** Creates and manipulates project boxes in the DOM.
- **events.js:** Sets up event listeners for UI interactions.
- **infiniteScrolling.js:** Implements infinite scrolling for repository listing.
- **search.js:** Provides search functionality for projects.
- **main.css:** Styles the application.

### Technologies Used 
## Languages

- **JavaScript (+ES6)** 

## Frameworks and Libraries
  - **OAuth:** GitHub OAuth for authentication
  - **Fetch API:** For making HTTP requests to the GitHub API

## Tools
  - **Git:** Version control system
  - **GitHub Pages:** Hosting for the portfolio website

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CatP98/my-portefolio.git```


2. **Open index.html in a web browser:**

    Simply open the index.html file in your preferred web browser to view the portfolio website.