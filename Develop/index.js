// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// // TODO: Create an array of questions for user input
const questions = [];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        }
    ]);
};


const promptInstall = projectData => {
    if (!projectData.installSteps) {
        projectData.installSteps = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'install',
            message: 'Please list the steps required to install your project(one step at a time)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please list the steps required to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNextStep',
            message: 'Would you like to add another install step?',
            default: false
        }
    ])
        .then(installData => {
            projectData.installSteps.push(installData.install);
            if (installData.confirmNextStep) {
                return promptInstall(projectData)
            } else {
                return projectData
            }
        })
        .then(data => console.log(data))
};


// Function call to initialize app
init()
    .then(promptInstall);
