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