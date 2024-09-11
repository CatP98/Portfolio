import {filterREADME, decodeContent, extractNames} from "./helpers.js";

// To fetch all repositories for a specific user -> get the name, url, languages
const BASE_URL_USER = "https://api.github.com/users";
//To fetch the readme file data from a repo -> get the tools and frameworks
const BASE_URL_REPOS = "https://api.github.com/repos";

// Fetches the README.md content and decodes it -> to get the tools/techniques/frameworks
export async function fetchFrameworksAndTools(owner, repoName) {
    const url = `${BASE_URL_REPOS}/${owner}/${repoName}/contents/README.md`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error fetching README');

      const data = await response.json();

      const decodedContent = await decodeContent(data);

      const frameworks = extractNames(decodedContent, 'Frameworks and Libraries');
      const tools = extractNames(decodedContent, 'Tools'); 

      return {frameworks, tools};

    } catch (error) {
        console.error('Failed to fetch README:', error);
        return null;
    }
}

export async function fetchData(owner) {
    try {
        const response = await fetch(`${BASE_URL_USER}/${owner}/repos`);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        
        // Extract the needed details: name, html_url, url, language
        const repoDetails = data.map(repo => ({
          name: repo.name,
          html_url: repo.html_url,
          url: repo.url,
          languages: repo.language
        }));

        console.log(repoDetails);
        return repoDetails

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}





