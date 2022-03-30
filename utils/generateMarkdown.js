// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![MIT](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if (license === "APACHE") {
    return `![APACHE](https://img.shields.io/badge/license-APACHE-brightgreen)`
  } else if (license === "GNU") {
    return `![GNU](https://img.shields.io/badge/license-GNU-brightgreen)`
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if (license === "APACHE") {
    return `[APACHE](http://www.apache.org/licenses/)`
  } else if (license === "GNU") {
    return `[GNU](https://fsf.org/)`
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === "APACHE") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === "GNU") {
    return `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`
  } else {
    return ``;
  }
};

// TODO: Create a function to generate markdown for README

// This is the layout for the readme file which is getting the data to enter into each section from the user input on the index.js file
function generateMarkdown(data) {
  return `# ${data.project}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installationInstructions}

## Usage
${data.usage}

## Walkthrough or Screenshot
${data.screenshot}

## Credits
${data.contributor}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Tests
${data.test}

## Questions
- GitHub Account: ${data.githubUsername}
- Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;
