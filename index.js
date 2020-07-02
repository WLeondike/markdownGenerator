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
    ])
}

promptUser()
    .then(function(answers){
        const markdown = generateMarkdown(answers);
        fs.writeFile("README.md", markdown, function(err){
            if (err){
                throw err;
            }
            console.log("You've successfully created a README.md file!");
        })
        return 
    })
