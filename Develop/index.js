//Install Fs, inquirer and import generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    //Title of project
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project"
    },
    //Description of the project
    {
        type: "input",
        name: "description",
        message: "Please describe the contents of your project"
    },
    //Licenses used
    {
        type: "checkbox",
        name: "license",
        message: "Please select one of the following license",
        choices: ["MIT", "APACHE 2.0", "GLP 3.0"]
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies"
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?"
    },
    //Github username
    {
        type: "input",
        name: "creator",
        message: "Enter Github username"
    },
    {
        type: "input",
        name: "constributors",
        message: "Please list any contributors to the project. (Use Github username)",
    },
    //email address formation
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    },
    {
        type: "input",
        name: "test",
        message: "Run following test commands"
    }

];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();
