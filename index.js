const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

const promptUser = function () {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project",
            name: "title"
        },
        {
            type: "input",
            message: "Write a brief description of your project: ",
            name: "description"
        },
        {
            type: "input",
            message: "Describe the installation process if any: ",
            name: "installation"
        },
        {
            type: "input",
            message: "How do you use this app/project?",
            name: "usage"
        },
        {
            type: "list",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ],
            name: "license",
        },
        {
            type: "input",
            message: "Who are the contributors of this project?",
            name: "contributing",
        },
        {
            type: "input",
            message: "Is there a test included?",
            name: "tests",
        },
        {
            type: "input",
            message: "Please enter your GitHub username: ", 
            name: "username"
        },
        {
            type: "input",
            message: "Please enter your email: ",
            name: "email"
        }

    ]).then((data) => {
        console.log(generateMarkdown(data));
    });
};

promptUser();