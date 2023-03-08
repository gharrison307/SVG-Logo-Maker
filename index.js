const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    message: "Please enter three charcters for your text?",
    name: "letters",
  },
  {
    type: "input",
    message: "Please enter a text color (color keyword or hexadecimal).",
    name: "textColor",
  },
  {
    type: "input",
    message: "Please choose a shape.",
    name: "installInstructions",
  },
  {
    type: "list",
    message: "Please enter the usage information.",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    message: "Please enter a shape color (color keyword or hexadecimal).",
    name: "shapeColor",
  },
]);
