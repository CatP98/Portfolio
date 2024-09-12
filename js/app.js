import { fetchFrameworksAndTools, fetchData } from '/js/services/githubApi.js';

document.addEventListener('DOMContentLoaded', async () => {
  localStorage.clear();
  console.log("Loading repository data...");

  const LOCAL_STORAGE_KEY = 'repoDetailsData';
  const storedRepoDetails= localStorage.getItem(LOCAL_STORAGE_KEY);

  let reposDetails;

  if(storedRepoDetails){
    console.log("Data already stored in local storage cache ");
    reposDetails = JSON.parse(storedRepoDetails);
    console.log("reposDetails",reposDetails);
  } else {
      try{
        reposDetails = await fetchData('CatP98');

        if(reposDetails){
          console.log("repositories details: ", reposDetails);

          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reposDetails));
        
        } else {
          console.error('No content found or error fetching Repositories.');
        }
      } catch (error) {
        console.error('Error during repository data fetch:', error);
      }
  }
  if (reposDetails) {
    try {
      // Fetch tools and frameworks for each repository
      const allReposInfo = await Promise.all(reposDetails.map(async (repo) => {
        return {
          name: repo.name,
          html_url: repo.html_url,
          languages: repo.languages,
          frameworksAndTools: await fetchFrameworksAndTools("CatP98", repo.name)
        };
      }));

      console.log("All repository data including technologies:", allReposInfo);
      
      // Optionally, store the complete data with technologies in localStorage
      localStorage.setItem('completeReposData', JSON.stringify(allReposInfo));

      allReposInfo.forEach(repo => createRepoBox(repo));

    } catch (error) {
      console.error('Error during README fetch or repository data fetch:', error);
    }
  }
});

function createRepoBox(repo){
  const boxHTML = `
      <div class="box">
        <h1>${repo.name}</h1>
        <div class="project-details">
          <p><strong>Languages:</strong> ${repo.languages || 'N/A'}</p>
          <p><strong>Frameworks:</strong> ${repo.frameworksAndTools.frameworks.length ? repo.frameworksAndTools.frameworks.join(', ') : 'N/A'}</p>
          <p><strong>Tools:</strong> ${repo.frameworksAndTools.tools.length ? repo.frameworksAndTools.tools.join(', ') : 'N/A'}</p>
        </div>
      </div>
    `;

  const box = document.createElement('div');
  box.innerHTML = boxHTML;

  box.querySelector('.box').addEventListener('click', () => {
    window.open(repo.html_url, '_blank');
  })

  const projectDetails = box.querySelector(".project-details");
  box.querySelector('.box').addEventListener('mouseenter', () => {
    projectDetails.style.display = 'block';
  });

  box.querySelector('.box').addEventListener('mouseleave', () => {
    projectDetails.style.display = 'none';
  })

  document.querySelector('.box-container').appendChild(box);
}