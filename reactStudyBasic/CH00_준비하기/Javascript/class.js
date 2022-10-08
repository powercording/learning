/**
 * ES6 이후에 등장한 클래스.Class
 *
 */
class Rectangle {
  //생성자
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  //Getter
  get area() {
    return this.calcArea();
  }

  //method
  calcArea() {
    return this.width * this.height;
  }
}
const p = new Rectangle(3, 7);
const square = new Rectangle(10.1);

console.log(square.area());
