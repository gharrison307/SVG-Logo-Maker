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
    fs.writeFile("../Logo.svg", createFile(data), (error) => {
      error ? console.log("error") : console.log("Generated logo.svg");
    });
  });

// function to create the SVG
function createFile(data) {
  const { letters, textColor, shape, shapeColor } = data;
  console.log(shape);

  // if triangle
  if (shape === "triangle") {
    return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,0 200,200 0,200"
    stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>
    <text
    x="100"
    y="125"
    font-size="60"
    text-anchor="middle"
    fill="${textColor}"
  >
    ${letters}
  </text>

    </svg>
`;
    //  if circle
  } else if (shape === "circle") {
    return `
    <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="${textColor}"
      >
        ${letters}
      </text>
    </svg>`;
  } else if (shape === square) {
    return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>
    <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="${textColor}"
      >
        ${letters}
      </text>

    </svg>
  `;
  }
}
