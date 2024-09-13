import { fetchFrameworksAndTools, fetchData } from './githubApi.js';
const LOCAL_STORAGE_KEY = 'repoDetailsData';

export async function getRepositories(){
   
    const storedRepoDetails = localStorage.getItem(LOCAL_STORAGE_KEY);

    let reposDetails;

    if(storedRepoDetails){
        console.log("Data already stored in local storage cache ");
        reposDetails = JSON.parse(storedRepoDetails);
    } else {
        try{
            reposDetails = await fetchData('CatP98');

            if(reposDetails){
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reposDetails));
            
        
            }else {
                console.error('No content found or error fetching Repositories.');
            }
        
        }catch (error) {
            console.error('Error during repository data fetch:', error);
        }
    } 
    return reposDetails;

}

export async function getRepositoriesDetails(){
    console.log('2. getting repo details');
    const reposDetails = await getRepositories();
    
    if (reposDetails) {
        console.log("Repositories names, languages and url fetched diretly from api: ", reposDetails);
    
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
            console.log("All repository data including data from README file (frameworks +technologies, and tools):", allReposInfo);
      
        
            localStorage.setItem('completeReposData', JSON.stringify(allReposInfo));
            return allReposInfo;

        } catch (error) {
            console.error('Error during README fetch or repository data fetch:', error);
    }
  }
};

