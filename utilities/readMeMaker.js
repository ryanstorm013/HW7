function readMeGenerate(answers) {
    return `
# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
    
${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## License 

This repository is licensed by ${answers.license}.

## Contribution

This project was make possible by: 
        
${answers.contribution}
    
## Tests

To run this, run the following:
    
\`
${answers.test}
\`

## Contact Me

For more information about this project or my other works please find me on:

Github: [${answers.username}](https://github.com/${answers.username})
Email: [${answers.email}](mailto:${answers.email})

`;
}

module.exports = readMeGenerate;