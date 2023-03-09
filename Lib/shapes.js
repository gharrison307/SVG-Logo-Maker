// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// parent Shape class

class Shape {
  constructor(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// child circle class
class Circle extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

// child square class
class Square extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<rect x="10" y="10" width="300" height="200" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`;
  }
}

// child triangle class
class Triangle extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<polygon points="100,0 200,200 0,200" stroke="${this.shapeColor}" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
