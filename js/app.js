import { addInfiniteScrolling } from './services/infiniteScrolling.js';
import { createRepoBox } from './services/dynamicElements.js';
import { getRepositoriesDetails } from './services/dataService.js';
import { addSearchListener } from './services/search.js';

document.addEventListener('DOMContentLoaded', async () => {
  localStorage.clear();
  console.log("Loading repository data...");
  console.log('1. getting repo details- before call');
  
  await getRepositoriesDetails(); // Await the fetching repo details to be finnished, so that only then the search event is set
  console.log('3. getting repo details - end');
  
  addSearchListener('.textbox input', 'completeReposData');
});

  