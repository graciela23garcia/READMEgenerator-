var inquirer = require("inquirer");
var fs = require("fs");
const os = require("os");
const util = require("util")

// array of questions for user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "gitHubUserName",
      message: "What is your github username?"
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "How would you describe your project?"
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "What is your table of contents"
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your project?"
    },
    {
      type: "input",
      name: "licence",
      message: "Provide your license information?"
    },
    {
      type: "input",
      name: "contributing",
      message: "Did you have any contributers in your project, if so, who was it?"
    },
    {
      type: "input",
      name: "tests",
      message: "What testing methods did you use for your project?"
    }
  ])
}
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data.join(""), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Questions were written in file for README!");
  });
}

function init() {
  promptUser()
    .then((data) => {
      console.log(data);
      let title = data.title;
      let description = data.description;
      let tableOfContents = data.tableOfContents;
      let installation = data.installation;
      let usage = data.usage;
      let licence = data.licence;
      let contributing = data.contributing;
      let tests = data.tests;

      writeToFile("README.md", [

        "# " + title + "\n",
        "## Project description" + "\n\n" + description + "\n\n",
        "## Table of content" + "\n" + tableOfContents + "\n\n",
        "## Installation" + "\n" + installation + "\n\n",
        "## Usage" + "\n" + usage + "\n\n",
        "## License" + "\n" + licence + "\n\n",
        "## Contributing" + "\n" + contributing + "\n\n",
        "## Tests" + "\n" + tests,
      ])
    });


}
init();

// function call to initialize program


