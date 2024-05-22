// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "no license") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "no license") {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache 2.0") {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GPL 3.0") {
    return `[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "BSD 3") {
    return `[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "no license") {
    return `This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`
  } else if (license === "Apache 2.0") {
    return `This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).`
  } else if (license === "GPL 3.0") {
    return `This project is licensed under the [GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0).`
  } else if (license === "BSD 3") {
    return `This project is licensed under the [BSD 3 License](https://opensource.org/licenses/BSD-3-Clause).`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

${data.welcome}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description
${data.description}

## Installation
Please run the following command to install the required dependencies:
${data.installation}

## Usage
Please run the following command to run the application:
${data.usage}

## Tests
Please run the following command to run the tests:
${data.tests}

## Contributing
Feel free to contribute to this project by following the guidelines below:
${data.contributing}

## Questions
If you have any questions, you can reach me through the following:
- GitHub: [${data.github}](
- Email: ${data.email}

## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
