// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.usrProjectName}

  ![badge](https://img.shields.io/badge/License-${data.licenseBadge}-blue)

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
  

  ## Screenshots

  <img src ="${data.usrImage}" width="400">


  ## License

  ${data.licenseInput}

`;
}

module.exports = generateMarkdown;
