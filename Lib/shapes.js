// Parent Shape class
class Shape {
  constructor(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// Child Circle class
class Circle extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

// Child Square class
class Square extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<rect x="10" y="10" width="300" height="200" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`;
  }
}

// Child Triangle class
class Triangle extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<polygon points="100,0 200,200 0,200" stroke="${this.shapeColor}" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
