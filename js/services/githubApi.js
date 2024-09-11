
var BASE_URL = "https://api.github.com/repos"

async function fetchContent(owner, repoName){
    const url = `${BASE_URL}/${owner}/${repoName}/contents/README.md`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error fetching README');

    console.log('Response: ', response);

    const data = await response.json();

    const decodedData = decodeContent(data);

  } catch (error) {
    console.error('Failed to fetch README:', error);
    return null;
  }
}

async function decodeContent(data){
    const content = atob(data.content);
    console.log(content); 
    return content;
}

async function filterREADME(content, searchingFor){

    if(searchingFor === "Languages"){
        
    } 
}
async function getReadTools(){}
async function getRepoLanguages(languages){}

export {fetchContent};
