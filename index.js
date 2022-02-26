// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquire.prompt([
    {
      type: "input",
      name: "project",
      message: "What is the title of your project? (Required)",
      validate: (projectInput) => {
        if (projectInput) {
          return true;
        } else {
          console.log("Please enter a project title!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project. (Required)",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description!");
                return false;
            }
        },
    },
    {
        type: "confirm",
        name: "installation",
        message: "Does your project require installation instructions?",
        default: true,
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "What are the installation instructions for your project?",
        // when: 
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Success!")
    });
};

// TODO: Create a function to initialize app
function init() {
    questions().then((answers) => {
        console.log(answers.project)
      let data = generateMarkdown(answers);
      writeToFile("./dist/Readme.md", data);
    });
};

// Function call to initialize app
init();
