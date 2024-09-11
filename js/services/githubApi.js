// To fetch all repositories for a specific user
const BASE_URL_USER = "https://api.github.com/users";
//To fetch the readmes files data
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

      return {frameworks, tools };

    } catch (error) {
        console.error('Failed to fetch README:', error);
        return null;
    }
}

/*
expor async function createCompleteArray(owner, repoName){
  const frameorkAndTools = await fetch(fetchFrameworksAndTools(owner, repoName)); 
  const restOfData = await fetch (fetchData(owner));
  const dataArray = [];
  restOfData.forEach(repo => { 
    if(repoName === restOfData.name){
      dataArray.push(restOfData, frameorkAndTools);
    }
    
  });
}
*/

export async function createCompleteArray(owner) {
  try {
      const restOfData = await fetchData(owner);
      const dataArray = [];

      for (const repo of restOfData) {
          const frameworksAndTools = await fetchFrameworksAndTools(owner, repo.name);
          if (frameworksAndTools) {
              // Combine the data
              const repoWithDetails = {
                  ...repo,  // Include the original repo details (name, url, etc.)
                  ...frameworksAndTools  // Add frameworks and tools
              };
              dataArray.push(repoWithDetails);
          }
      }

      console.log('Complete Repo Data:', dataArray);
      return dataArray;
  } catch (error) {
      console.error('Error creating complete array:', error);
      return [];
  }
}

// Decodes the base64-encoded content of the README
export async function decodeContent(data) {
    try {
        const content = atob(data.content); // Decode base64 content
        //console.log('Decoded Content:', content);
        return content;
    } catch (error) {
        console.error('Failed to decode content:', error);
        return null;
    }
}

// Filters the README content for Frameworks and Tools sections
export async function filterREADME(content) {
    let repoDetails = [];

    // Use regex to match the Frameworks and Tools sections
    const frameworksSection = content.match(/### Frameworks(.|\n)*?(?=###|$)/);
    const toolsSection = content.match(/### Tools(.|\n)*?(?=###|$)/);

    // Check if both sections exist
    if (frameworksSection) {
        repoDetails = repoDetails.concat(frameworksSection[0]); // Add frameworks section
    } else {
        repoDetails.push("Visit the Repository to see the frameworks used.");
    }

    if (toolsSection) {
        repoDetails = repoDetails.concat(toolsSection[0]); // Add tools section
    } else {
        repoDetails.push("Visit the Repository to see the tools used.");
    }

    return repoDetails;
}


export async function fetchData(owner) {
    try {
        const response = await fetch(`${BASE_URL_USER}/${owner}/repos`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        //console.log(data);
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




// Helper function to extract framework and tool names using regular expressions
function extractNames(content, sectionTitle) {
  const sectionRegex = new RegExp(`### ${sectionTitle}([\\s\\S]*?)(?=###|$)`, 'g');
  const sectionMatch = sectionRegex.exec(content);

  if (sectionMatch) {
    const namesRegex = /-\s\*\*(.*?)\*\*/g;
    let match;
    const names = [];

    while ((match = namesRegex.exec(sectionMatch[0])) !== null) {
      names.push(match[1]);
    }

    return names;
  }
  return [];
}
