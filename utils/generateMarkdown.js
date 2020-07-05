// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.usrProjectName}

  ${data.usrDescription}

  Email: ${data.usrEmail} <br>
  GitHub: https://github.com/${data.usrGitHub}
  

  ## Table of Contents

  * [Installation](#installation)
  * [Credits](#credits)
  * [License](#license)
  * [Screenshots](#screenshots)
  

  ## Installation
  
  > ${data.usrInstall}
  
  
  ## Credits
  
  ${data.usrCredits}
  
  
  ## License
  
  ![badge](https://img.shields.io/badge/License-${data.usrLicense}-blue)


  ## Screenshots

  <img src ="" width="400">
  <img src ="" width="400">

`;
}

module.exports = generateMarkdown;
