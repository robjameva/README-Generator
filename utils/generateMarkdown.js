// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
	switch (license) {
		case 'Apache License 2.0':
			return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
		case 'BSD 3-Clause "New" or "Revised" license':
			return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
		case 'BSD 2-Clause "Simplified" or "FreeBSD" license':
			return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
		case 'GNU General Public License (GPL)':
			return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
		case 'GNU Library or "Lesser" General Public License (LGPL)':
			return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
		case 'MIT license':
			return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
		case 'Mozilla Public License 2.0':
			return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
		case 'Common Development and Distribution License':
			return '[![License](https://img.shields.io/badge/License-CDDL-brightgreen)](https://opensource.org/licenses/CDDL-1.0)';
		case 'Eclipse Public License version 2.0':
			return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
		default:
			return '';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
	switch (license) {
		case 'Apache License 2.0':
			return '(https://opensource.org/licenses/Apache-2.0)';
		case 'BSD 3-Clause "New" or "Revised" license':
			return '(https://opensource.org/licenses/BSD-3-Clause)';
		case 'BSD 2-Clause "Simplified" or "FreeBSD" license':
			return '(https://opensource.org/licenses/BSD-2-Clause)';
		case 'GNU General Public License (GPL)':
			return '(https://www.gnu.org/licenses/gpl-3.0)';
		case 'GNU Library or "Lesser" General Public License (LGPL)':
			return '(https://www.gnu.org/licenses/lgpl-3.0)';
		case 'MIT license':
			return '(https://opensource.org/licenses/MIT)';
		case 'Mozilla Public License 2.0':
			return '(https://opensource.org/licenses/MPL-2.0)';
		case 'Common Development and Distribution License':
			return '(https://opensource.org/licenses/CDDL-1.0)';
		case 'Eclipse Public License version 2.0':
			return '(https://opensource.org/licenses/EPL-1.0)';
		default:
			return '';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}

// Generates a list of steps on a new line as an ordered list
const getSteps = arr => {
	return arr.map(step => {
		return `1. ${step}\n  `
	}).join('')
}

const getContributers = arr => {
	return arr.map(contributer => {
		return `* ${contributer.contributerName}: https://github.com/${contributer.contributerGithub}\n`
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

${data.title} is released under the ${data.license} ${renderLicenseLink(data.license)}
        
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
1. ${step}\n`
	}).join('')
}

const getTestInstructions = data => {
	if (!data.testSteps) {
		return ''
	} else {
		return `
## Testing

${getTestSteps(data.installSteps)}
    `
	}
}

const getContibutingLink = data => {
	if (data.isOpenSource) {
		return `* [Contributing](#Contributing)`
	}
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
	return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Description 

${data.description}


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Credits](#credits)
* [Questions](#Questions)
${hasLicense(data)}
${getContibutingLink(data)}


## Installation

${getSteps(data.installSteps)}


## Usage 

${data.usage}

${getTestInstructions(data)}

## Credits

${getContributers(data.contributers)}

## Questions

For additional questions please reach out to  https://github.com/${data.github} or contact at ${data.email}
${getLicense(data)}

${isOpenSource(data)}

`
}

module.exports = generateMarkdown;
