//GLOBALS
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//prompt questions
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "usrProjectName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "licenseBadge",
            message: "Which license would you like to use? (i.e. Apache, GNU, MIT, ISC)"
        },
        {
            type: "input",
            name: "usrDescription",
            message: "Please enter a description for your project:"
        },
        {
            type: "input",
            name: "usrEmail",
            message: "Please enter a email address for your project:"
        },
        {
            type: "input",
            name: "usrGitHub",
            message: "Please enter your GitHub unsername for your project:"
        },
        {
            type: "input",
            name: "usrInstall",
            message: "Steps required to install your project?"
        },
        {
            type: "input",
            name: "usrCredits",
            message: "Who would you like to credit?"
        },
        {
            type: "input",
            name: "licenseInput",
            message: "Please enter a license description:"
        },
    ])
}

//function to write file
promptUser()
    .then(function(data){
        const markdown = generateMarkdown(data);
        fs.writeFile("testREADME.md", markdown, function(err){
            if (err){
                throw err;
            }
            console.log("You've successfully created a README.md file!");
        })
        return 
    })
