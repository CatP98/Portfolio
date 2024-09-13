import { createRepoBox } from "./dynamicElements.js";

function searchInput(input, dataContainer) {
    const trimmedInput = input.trim().toLowerCase(); 
    const searchTerms = trimmedInput.split(' '); 
    const allReposInfo = JSON.parse(localStorage.getItem(dataContainer)); 

    if (!allReposInfo) {
        console.error('No repository data found.Try reloading the page');
        return [];
    }

    // Filter repos based on search terms
    const foundMatches = allReposInfo.filter(repo => {
        const repoData = `${repo.name.toLowerCase()} ${repo.languages?.toLowerCase()} ${repo.frameworksAndTools.frameworks.join(' ').toLowerCase()} ${repo.frameworksAndTools.tools.join(' ').toLowerCase()}`;
        return searchTerms.every(term => repoData.includes(term));
    });

    return foundMatches;
}

function displayBoxes(repos, searchTerms) {
    const container = document.querySelector('.box-container');
    container.innerHTML = ''; // Clear existing boxes
    if (repos.length === 0) {
        container.innerHTML = `<p>No results found for: ${searchTerms.join(' ')}.</p>`; 
    } else {
        repos.forEach(repo => createRepoBox(repo));
    }
}

export function addSearchListener(searchElement, dataContainer) {
    console.log("initiate search");
    const searchBar = document.querySelector(searchElement);
    searchBar.addEventListener('input', () => {
        const input = searchBar.value;
        const results = searchInput(input, dataContainer);
        displayBoxes(results);
        console.log("end search");
    });
}
