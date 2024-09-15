export async function createRepoBox(repo){
    const boxHTML = `
        <div class="box">
          <h1>${repo.name}</h1>
          <div class="project-details" style="display: none">
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

  export async function resultsNotFound(){
    const notFoundInfo = document.createElement('h1');
    notFoundInfo.classList.add('not-found-text');
    notFoundInfo.innerHTML='404: Ooops... Repositories Not Found.';
    const boxContainer = document.querySelector('.box-container');
    boxContainer.appendChild(notFoundInfo);
  }

  export async function displayElement(elementClass) {
    const element = document.createElement('div');
    element.classList.add(elementClass);
    
    const boxContainer = document.querySelector('.box-container');
    boxContainer.appendChild(element);

    return element;
}

export async function aboutContent(){
  const aboutContent =  await displayElement('about');
  aboutContent.innerHTML = `
        <h1>About This Website</h1>
        <p>Welcome to my portfolio website! This site is a showcase of my skills, projects, and the tools I've worked with as a developer.</p>
        <p>Here’s how it works:</p>
        <ul>
            <li><strong>Search Feature:</strong> Use the search bar to explore projects by typing keywords related to programming languages, frameworks, or tools used in the projects.</li>
            <li><strong>Project Display:</strong> All my GitHub repositories are listed here. Hover over any project to see the languages and technologies used. Clicking on a project will take you directly to the repository on GitHub.</li>
            <li><strong>Infinite Scrolling:</strong> The site is designed to automatically load more projects as you scroll down. No need to click "next page"—just keep exploring!</li>
            <li><strong>CV & Contact:</strong> Check out my CV and use the contact links to get in touch with me on LinkedIn or GitHub.</li>
        </ul>
        <p>I hope you enjoy exploring my work as much as I enjoyed building it!</p>
    `;
}

export async function letsStart(){
  const letsStart =  await displayElement('auth');
  letsStart.innerHTML = `
        <h1>Welcome to my portfolio website!</h1>
        <p>This site is a showcase of my skills, projects, and the tools I've worked with as a developer.</p>
        
        <p>Click anywhere to start and login with GitHub!</p>
    `;
}
