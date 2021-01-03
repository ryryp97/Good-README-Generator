const inquirer = require("inquirer");

const generateReadme = require("./utils/generateMarkdown.js")

const promptUser = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            
        }
    ])
}