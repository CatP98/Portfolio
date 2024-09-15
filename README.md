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


## Future Improvements

- **Enhanced Search Functionality**: Improve search algorithms to handle complex queries and provide more relevant results. Maybe based on the number of searched keys that relate to a repo, the more correspondences the more relavant, and therefore the order of boxes displaying goes accordingly.
- **Additional Filters**: Add more filtering options for repositories based on stars, forks, or update frequency.
- **User Authentication**: Integrate user-specific features based on authenticated GitHub users. Finnish the OAuth authentication implementation.
- **Performance Optimization**: Optimize performance and loading times, especially for large numbers of repositories.
- **localStorage expiration date**: Create  way of make the localStorage have an expiration date, so that thre's no need to clear it everytime the Home poage is reloaded. 
- **Background switch per Session**: Make the background change everytime a neew session starts, using the local storage expiration date as reference and a checker.
- **Work on the modularity structure of the project**: Reduce redundancy and improve the modularity of the project structure.
- **Testing**

## Problems Encountered

- **API Rate Limits**: Handling GitHub API rate limits during development and production.
- **OAuth Implementation**: Managing OAuth authentication and securing tokens in a frontend-only environment.
- **Cross-Origin Resource Sharing (CORS)**: Handling CORS issues when making requests to the GitHub API.

## What I Have Learned

- **API Integration**: Gained experience in integrating and interacting with the GitHub API.
- **OAuth Authentication**: Learned about OAuth authentication flows and token management in a frontend application.
- **Asynchronous Programming**: Improved skills in handling asynchronous operations and data fetching.
- **UI/UX Design**: Enhanced ability to design interactive and user-friendly web interfaces.
- **Modular JavaScript**: Gained experience in writing modular and maintainable JavaScript code.
