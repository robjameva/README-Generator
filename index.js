// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// // TODO: Create an array of questions for user input
const questions = [{
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
    type: 'editor',
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
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
},
{
    type: 'rawlist',
    name: 'license',
    message: 'Choose an open source license',
    choices: [
        'Apache License 2.0',
        'BSD 3-Clause "New" or "Revised" license',
        'BSD 2-Clause "Simplified" or "FreeBSD" license',
        'GNU General Public License (GPL)',
        'GNU Library or "Lesser" General Public License (LGPL)',
        'MIT license',
        'Mozilla Public License 2.0',
        'Common Development and Distribution License',
        'Eclipse Public License version 2.0'
    ],
    default: 0,
    loop: false
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address (Required)',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'isOpenSource',
    message: 'Is this intended to be an open source project?',
    default: false
},
{
    type: 'input',
    name: 'contribution',
    message: 'Provide some guidelines for contribution to your project',
    when: ({ isOpenSource }) => isOpenSource
}
];

// // TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
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
            name: 'confirmNextInstallStep',
            message: 'Would you like to add another install step?',
            default: false
        }
    ])
        .then(installData => {
            projectData.installSteps.push(installData.install);
            if (installData.confirmNextInstallStep) {
                return promptInstall(projectData)
            } else {
                return projectData
            }
        })
};

const promptTest = projectData => {
    if (!projectData.testSteps) {
        projectData.testSteps = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'test',
            message: 'Please list the steps required to test your project(one step at a time)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please list the steps required to test your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNextTestStep',
            message: 'Would you like to add another test step?',
            default: false
        }
    ])
        .then(testData => {
            projectData.testSteps.push(testData.test);
            if (testData.confirmNextTestStep) {
                return promptTest(projectData)
            } else {
                return projectData
            }
        })
};

const promptContributers = projectData => {
    if (!projectData.contributers) {
        projectData.contributers = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'contributerName',
            message: 'Please enter the contributer\'s name',
            validate: contributerInput => {
                if (contributerInput) {
                    return true;
                } else {
                    console.log('Please enter the contributer\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributerGithub',
            message: 'Please enter the contributer\'s gitHub username',
            validate: contributerGitgubInput => {
                if (contributerGitgubInput) {
                    return true;
                } else {
                    console.log('Please enter the contributer\'s gitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNextcontributer',
            message: 'Would you like to add another contributer?',
            default: false
        }
    ])
        .then(contributerData => {
            projectData.contributers.push(contributerData);
            if (contributerData.confirmNextcontributer) {
                return promptContributers(projectData)
            } else {
                return projectData
            }
        })
};


// Function call to initialize app
init()
    .then(promptInstall)
    .then(promptTest)
    .then(promptContributers)
    //.then(data => console.log(generateMarkdown(data)))
    .then(data => console.log(data))


