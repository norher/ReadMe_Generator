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
        type: 'list',
        name: 'license',
        message: 'Which license is used for this project:',
        choices: ["Apache License 2.0", "MIT License", "BSD License", "GPLv3"]
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
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile("./utils/README.md", generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('Success!');
      });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function(answer) {
      const fileName =
        answer.title
          .split(' ')
          .join('') + '.md';
      
      writeToFile(fileName, answer);
    });
}

// Function call to initialize app
init();