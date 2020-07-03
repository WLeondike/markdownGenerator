// copy and paste a readme template then add placeholders${} where text values the user will insert  

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.usrProjectName}

  ## Description 
  
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
