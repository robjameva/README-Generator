// License Badge Links
const apacheBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
const BDS3Badge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
const BDS2Badge = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
const GNUGeneralBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
const GNULibraryBadge = 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
const MITBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
const mozillaBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
const CDDLBadge = 'https://img.shields.io/badge/License-CDDL-brightgreen';
const eclipseBadge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg';

// License URL Links
const apacheLink = 'https://opensource.org/licenses/Apache-2.0';
const BDS3Link = 'https://opensource.org/licenses/BSD-3-Clause';
const BDS2Link = 'https://opensource.org/licenses/BSD-2-Clause';
const GNUGeneralLink = 'https://www.gnu.org/licenses/gpl-3.0';
const GNULibraryLink = 'https://www.gnu.org/licenses/lgpl-3.0';
const MITLink = 'https://opensource.org/licenses/MIT';
const mozillaLink = 'https://opensource.org/licenses/MPL-2.0';
const CDDLLink = 'https://opensource.org/licenses/CDDL-1.0';
const eclipseLink = 'https://opensource.org/licenses/EPL-1.0';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
	switch (license) {
		case 'Apache License 2.0':
			return `[![License](${apacheBadge})](${apacheLink})`;
		case 'BSD 3-Clause "New" or "Revised" license':
			return `[![License](${BDS3Badge})](${BDS3Link})`;
		case 'BSD 2-Clause "Simplified" or "FreeBSD" license':
			return `[![License](${BDS2Badge})](${BDS2Link})`;
		case 'GNU General Public License (GPL)':
			return `[![License: GPL v3](${GNUGeneralBadge})](${GNUGeneralLink})`;
		case 'GNU Library or "Lesser" General Public License (LGPL)':
			return `[![License: LGPL v3](${GNULibraryBadge})](${GNULibraryLink})`;
		case 'MIT license':
			return `[![License: MIT](${MITBadge})](${MITLink})`;
		case 'Mozilla Public License 2.0':
			return `[![License: MPL 2.0](${mozillaBadge})](${mozillaLink})`;
		case 'Common Development and Distribution License':
			return `[![License](${CDDLBadge})](${CDDLLink})`;
		case 'Eclipse Public License version 2.0':
			return `[![License](${eclipseBadge})](${eclipseLink})`;
		default:
			return '';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
	switch (license) {
		case 'Apache License 2.0':
			return `(${apacheLink})`;
		case 'BSD 3-Clause "New" or "Revised" license':
			return `(${BDS3Link})`;
		case 'BSD 2-Clause "Simplified" or "FreeBSD" license':
			return `(${BDS2Link})`;
		case 'GNU General Public License (GPL)':
			return `(${GNUGeneralLink})`;
		case 'GNU Library or "Lesser" General Public License (LGPL)':
			return `(${GNULibraryLink})`;
		case 'MIT license':
			return `(${MITLink})`;
		case 'Mozilla Public License 2.0':
			return `(${mozillaLink})`;
		case 'Common Development and Distribution License':
			return `(${CDDLLink})`;
		case 'Eclipse Public License version 2.0':
			return `(${eclipseLink})`;
		default:
			return '';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = data => {
	if (data.license === 'None') {
		return ''
	} else {
		return `
## License

${data.title} is released under the ${data.license} ${renderLicenseLink(data.license)}
`
	}
}

// Generates a list of steps on a new line as an ordered list
const getInstallSteps = arr => {
	return arr.map(step => {
		return `1. ${step}\n`
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

const isOpenSource = data => {
	if (!data.isOpenSource) {
		return ''
	} else {
		return `
## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)`
	}
}

const getTestSteps = arr => {
	return arr.map(step => {
		return `1. ${step}\n`
	}).join('')
}

const getTestInstructions = data => {
	if (!data.testSteps) {
		return ''
	} else {
		return `
## Testing
${getTestSteps(data.testSteps)}`
	}
}

const getContibutingLink = data => {
	if (data.isOpenSource) {
		return `* [Contributing](#Contributing)`
	} else {
		return '';
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

${getInstallSteps(data.installSteps)}

## Usage 

${data.usage}

${getTestInstructions(data)}

## Credits

${getContributers(data.contributers)}

## Questions

For additional questions please reach out to  https://github.com/${data.github} or contact at ${data.email}
${renderLicenseSection(data)}
${isOpenSource(data)}

`
}

module.exports = generateMarkdown;
