const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter three charcters for your text.",
      name: "letters",
    },
    {
      type: "input",
      message: "Please enter a text color (color keyword or hexadecimal).",
      name: "textColor",
    },
    {
      type: "list",
      message: "Please pick a shape.",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Please enter a shape color (color keyword or hexadecimal).",
      name: "shapeColor",
    },
  ])
  .then((data) => {
    fs.writeFile("../SVGLogo.html", createFile(data), (error) => {
      error ? console.log("error") : console.log("creating your SVG logo now.");
    });
  });
