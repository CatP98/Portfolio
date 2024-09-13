import { addInfiniteScrolling } from './services/infiniteScrolling.js';
import { createRepoBox } from './services/dynamicElements.js';
import { getRepositoriesDetails } from './services/dataService.js';
import { addSearchListener } from './services/search.js';
import { aboutOptionEvent } from './services/events.js';
import { aboutContent } from './services/dynamicElements.js'; 

document.addEventListener('DOMContentLoaded', async () => {
  localStorage.clear();
  console.log("Loading repository data...");
  console.log('1. getting repo details- before call');

  aboutContent();

  const allReposInfo = await getRepositoriesDetails();
  // Create repo boxes after fetching is done
  console.log('3. getting repo details - end');

  const searchBar = document.querySelector('.textbox-input');

    if (searchBar) {
        searchBar.addEventListener('click', () => {
            window.location.href = '../index.html'; // Adjust the path if necessary
    })
}
});
    

