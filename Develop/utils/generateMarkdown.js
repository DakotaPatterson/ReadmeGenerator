// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license || license === 'None') {
    return '';
  }

  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  };

  return `![License Badge](${licenseBadges[license]})`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license || license === 'None') {
    return '';
  }

  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
  };

  return `[${license} License](${licenseLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license || license === 'None') {
    return '';
}

return `
## License
This project is licensed under the ${renderLicenseLink(license)} license.
`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}


## Usage
${data.usage}


## Contribution
${data.contribution}

## Tests
${data.test}

${renderLicenseSection(data.license)}

## Questions
For any questions, please contact [${data.gitHub}](https://github.com/${data.gitHub}) or email ${data.email}.

`;
}

module.exports = generateMarkdown;
