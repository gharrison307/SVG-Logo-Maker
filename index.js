const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./Lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter three characters for your text.",
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
    fs.writeFile("./Logo.svg", createFile(data), (error) => {
      error ? console.log("error") : console.log("Generated logo.svg");
    });
  });

// function to create the SVG
function createFile(data) {
  const { letters, textColor, shape, shapeColor } = data;
  console.log(shape);

  // if triangle
  if (shape === "triangle") {
    const triangleObj = new shapes.Triangle(letters, textColor, shapeColor);

    return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${triangleObj.render()}
    <text
    x="150"
    y="100"
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
    const circleObj = new shapes.Circle(letters, textColor, shapeColor);

    return `
    <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
    ${circleObj.render()}

      <text
        x="150"
        y="100"
        font-size="60"
        text-anchor="middle"
        fill="${textColor}"
      >
        ${letters}
      </text>
    </svg>`;
  } else if (shape === "square") {
    const squareObj = new shapes.Square(letters, textColor, shapeColor);
    return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${squareObj.render()}
    <text
        x="150"
        y="100"
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
