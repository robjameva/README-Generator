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

const getSteps = arr => {
  return arr.map(step => {
    return `* ${step}\n  `
  }).join('')
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
  * [License](#license)


  ## Installation
  ${getSteps(data.installSteps)}


  ## Usage 



  ## Credits



  ## License


  ---

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


  ## Features

  If your project has a lot of features, consider adding a heading called "Features" and listing them there.


  ## Contributing

  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

  ## Tests

  Go the extra mile and write tests for your application. Then provide examples on how to run them.
  `;
}

module.exports = generateMarkdown;
