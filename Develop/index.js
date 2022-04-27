// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a concise description of your project"
    },
    {
        type: "input",
        name: "install",
        message: "How will the user install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does your project aim to do?"
    },
    {
        type: "input",
        name: "contribution",
        message: "State your guidelines for making a contribution to this project"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the instructions for testing?"
    },
    {
        type: "checkbox",
        name: "licenseType",
        message: "Please select your license",
        choices: ["Apache License 2.0", "MIT License", "BSD License", "GNU Public License"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    // console.log(`${questions}`)
];


// TODO: Create a function to write README file

function createMarkdown(fileName, data) {
    return fs.writeFile(fileName, data), function(err) {
        if (err) {
            return console.log("Sorry, an error was made while making your README, please try again");
        } else {
            console.log("Success! your README is being created");
        }
     }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        createMarkdown("./MD/README.md", generateMarkdown(data));
    })
};

// Function call to initialize app
init();