// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquire.prompt([
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your GitHub username. (Required)",
        validate: (githubUsername) => {
            if (githubUsername) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address for additional questions. (Required)",
        validate: (email) => {
            if (email) {
                return true;
            } else {
                console.log("Please enter an email address!")
                return false;
            }
        }
    },
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
        message: "Does your project require installation instructions? (Required)",
        default: true,
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "What are the installation instructions for your project?",
        when: ({installation}) => {
            if (installation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
      type: "input",
      name: "usage",
      message: "What is the reason for this project? Enter how and why to use this project. (Required)",
      validate: (usage) => {
          if (usage) {
              return true;
          } else {
              console.log("Please enter a reason for this project?")
              return false;
          }
      }  
    },
    {
        type: "input",
        name: "contributor",
        message: "Please enter all the contributors for this project. (Required)",
        validate: (contributor) => {
            if (contributor) {
                return true;
            } else {
                console.log("Please enter all the contributors!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please enter the test instructions for this project. (Required)",
        validate: (test) => {
            if (test) {
                return true;
            } else {
                console.log("Please enter the test instructions!")
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "projectLicense",
        message: "Select the 'Licenses' that need to be included with this project. (Select all that apply)",
        choices: [
            "MIT",
            "APACHE",
            "GNU"
        ],
    }
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
