//Refer to week 5 -> day 1 -> 15-Stu_Inquirer-Users
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "usrProjectName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "usrDescription",
            message: "Please enter a description of your project:"
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
            name: "usrLicense",
            message: "Which license would you like? (i.e. Apache, GNU, MIT, ISC)"
        },
    ])
}

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
