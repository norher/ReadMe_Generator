// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #**${data.title}**

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
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

  ## License
  ${data.licenseType}

  ## Questions
  ### @${data.github}
  ### ${data.email}
`;
}

module.exports = generateMarkdown;
