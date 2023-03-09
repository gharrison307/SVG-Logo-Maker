// parent Shape class

class Shape {
  constructor(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// child circle class
class circle {
  constructor(shape) {
    Shape.call(this, letters, textColor, shapeColor);
    this.shape = shape;
  }
}

// child square class
class square {
  constructor(shape, shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.shape = shape;
  }
}

// child trianlge class
class triangle {
  constructor(shape, shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.shape = shape;
  }
}
