import { createCompleteArray } from './services/githubApi';
import { fetchFrameworksAndTools, fetchData } from '/js/services/githubApi.js';  

document.addEventListener('DOMContentLoaded', async () => {
  console.log("Loading README content...");

  try {
    const repoDetails = await fetchFrameworksAndTools('CatP98', 'DynamicContainers');
    
    if (repoDetails) {
      console.log('README Content- tools and Frameworks:', repoDetails);
      // Display or process the README content
      // document.getElementById('readme-container').textContent = repoDetails.join("\n");
    } else {
      console.error('No content found or error fetching README.');
    }
  } catch (error) {
    console.error('Error during README fetch:', error);
  }

  var apiData= fetchData("CatP98");
  console.log("rest of the data: " + apiData);

  const completeData = createCompleteArray("CatP98");

});
