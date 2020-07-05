// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.usrProjectName}

  
  ${data.usrDescription}
  
  
  ## Installation
  
  > ${data.usrInstall}
  
  
  ## Credits
  
  ${data.usrCredits}
  
  
  ## License
  
  ![badge](https://img.shields.io/badge/License-${data.usrLicense}-blue)

`;
}

module.exports = generateMarkdown;
