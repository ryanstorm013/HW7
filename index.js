const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readMeGenerate = require("./utilities/readMeMaker.js");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
    type: "input",
    message: "What is your ReadMe title?",
    name: "title"
},
{
    type: "input",
    message: "What is yout GitHub username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
},
{
    type: "input",
    message: "Describe your project:",
    name: "description"
},
{
    type: "list",
    message: "Choose your license for this project: ",
    name: "license",
    choices: ["MIT", "Unlicense", "Apache", "GNU", "Mozilla", "ISC"]
},
{
    type: "input",
    message: "Your installation process:",
    name: "installation"
},
{
    type: "input",
    message: "How would you run this?",
    name: "test"
},
{
    type: "input",
    message: "What does the user need to know about?",
    name: "usage"
},
{
    type: "input",
    message: "Who contributed in this project?",
    name: "contribution"
}];

const readMePrompt = () => {
    return inquirer
        .prompt(questions);
}
async function init() {
    try {
        const input = await readMePrompt();
        const generate = readMeGenerate(input);

        await writeFileAsync("./readLoc/ReadMe.md", generate);
        console.log("Your ReadMe has been created. Thank you for using the generator!")

    } catch (err) {
        console.log(err);
    }
}

init();