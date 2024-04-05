// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What would you like the description to be for this project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation instructions for this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information for this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the contribution guidelines for this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is the test instructions for this project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What license would you like to include in this project?',
        name: 'license',
        choices: ['MIT', 'Apache-2.0','GPL-3.0'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        console.log(`${fileName} has been saved.`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

// Function call to initialize app
init();
