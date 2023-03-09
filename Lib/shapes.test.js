const shapes = require("./shapes");

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

describe("Shape Tests", () => {
  describe("Triangle", () => {
    it("should produce a string of text", () => {
      // arrange step - set up variables for your test

      const shapeColor = "red";

      const testString = `<polygon points="100,0 200,200 0,200" stroke="${shapeColor}" fill="${shapeColor}"/>`;

      const triangleObj = new shapes.Triangle("FUN", "blue", shapeColor);

      // asses step = check that the values meet certaion conditions

      expect(triangleObj.render()).toEqual(testString);
    });
  });

  describe("Circle", () => {
    it("should produce a string of text", () => {
      // arrange step - set up variables for your test

      const shapeColor = "red";

      const testString = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      // act step -where you excecute code
      const circleObj = new shapes.Circle("FUN", "blue", shapeColor);

      // asses step = check that the values meet certaion conditions

      expect(circleObj.render()).toEqual(testString);
    });
  });

  describe("Square", () => {
    it("should produce a string of text", () => {
      // arrange step - set up variables for your test

      const shapeColor = "red";

      const testString = `<rect x="10" y="10" width="300" height="200" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>`;

      // act step -where you excecute code
      const squareObj = new shapes.Square("FUN", "blue", shapeColor);

      // asset step = check that the values meet certaion conditions
      // toEqual - a matcher
      expect(squareObj.render()).toEqual(testString);
    });
  });
});
