import { addInfiniteScrolling } from './services/infiniteScrolling.js';
import { createRepoBox } from './services/dynamicElements.js';
import { getRepositoriesDetails } from './services/dataService.js';
import { addSearchListener } from './services/search.js';
import { aboutOptionEvent } from './services/events.js';
import { displayElement } from './services/dynamicElements.js'; 

document.addEventListener('DOMContentLoaded', async () => {
  localStorage.clear();
  console.log("Loading repository data...");
  console.log('1. getting repo details- before call');

  const allReposInfo = await getRepositoriesDetails();
  // Create repo boxes after fetching is done
  allReposInfo.forEach(repo => createRepoBox(repo)); // Await the fetching repo details to be finnished, so that only then the search event is set
  console.log('3. getting repo details - end');

  addSearchListener('.textbox input', 'completeReposData');
});

  