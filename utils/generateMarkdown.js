// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}

// Generates a list of steps on a new line with an * before each step
const getSteps = arr => {
	return arr.map(step => {
		return `1. ${step}\n  `
	}).join('')
}

const getContributers = arr => {
	return arr.map(contributer => {
		return `* ${contributer.contributerName}:  https://github.com/${contributer.contributerGithub}\n  `
	}).join('')
}

const hasLicense = data => {
	if (data.license === 'None') {
		return ''
	} else {
		return `* [License](#license)`
	}
}

const getLicense = data => {
	if (data.license === 'None') {
		return ''
	} else {
		return `
## License

${data.title} is released under the ${data.license}
        
    `
	}
}

const isOpenSource = data => {
	if (!data.isOpenSource) {
		return ''
	} else {
		return `
    ## Contributing

    [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
    `
	}
}

const getTestSteps = arr => {
	return arr.map(step => {
		return `
1. ${step}\n  `
	}).join('')
}

const getTestInstructions = data => {
	if (!data.testSteps) {
		return ''
	} else {
		return `
## Test Instructions

${getTestSteps(data.installSteps)}
    `
	}
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
	return `
# ${data.title}

## Description 

${data.description}


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${hasLicense(data)}


## Installation

${getSteps(data.installSteps)}


## Usage 

${data.usage}

${getTestInstructions(data)}

## Credits

${getContributers(data.contributers)}

${isOpenSource(data)}

## Questions

For additional questions please reach out to  https://github.com/${data.github} or by email ${data.email}
${getLicense(data)}
---

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


`
}

module.exports = generateMarkdown;
