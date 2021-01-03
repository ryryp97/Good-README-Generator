// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
  
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

    ### Description
    ${data.description}

    ### Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ### Installation
    ${data.installation}

    ### Usage
    ${data.usage}

    ### License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br />
    This application is covered by the ${data.license} license. 

    ### Contributing
    ${data.contributing}

    ### Tests
    ${data.tests}

    ### Questions

    Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />

    Email me with any questions: ${data.email}<br /><br />
  `;
}

module.exports = generateMarkdown;
