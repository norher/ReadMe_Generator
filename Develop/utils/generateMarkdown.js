// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.length === 0) {
      return ""
    } else if (license == "Apache License 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == "MIT License") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license == "GPLv3") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == "BSD License") {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) {
    return ""
  } else if (license == "Apache License 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == "MIT License") {
    return `https://opensource.org/licenses/MIT`
  } else if (license == "GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license == "BSD License") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return ""
  } else {
    return `## License
  ${renderLicenseBadge(license)}
  
  ${renderLicenseLink(license)} 
    `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test](#test)
  - [Questions](#questions)
    - [GitHub](#github)
    - [email](#email)

  ## Description 
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test
  ${data.tests}

  ## Questions
  ### @${data.github}
  ### ${data.email}
`
}

module.exports = generateMarkdown;