
import { fetchContent } from './services/githubApi.js';  // Adjust path as necessary

document.addEventListener('DOMContentLoaded', async () => {
  console.log("Loading README content...");

  try {
    const content = await fetchContent('CatP98', 'DynamicContainers');
    
    if (content) {
      console.log('README Content:', content);
      // Display or process the README content
      //document.getElementById('readme-container').textContent = content;
    } else {
      console.error('No content found or error fetching README.');
    }
  } catch (error) {
    console.error('Error during README fetch:', error);
  }
});
