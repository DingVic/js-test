import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {

      //use the equation of a circle to check
      //if the point is inside the circle
      //stanard form
      //(x-a)^2 + (y-b)^2 = r^2
      //where a and b is the center
      //if the left side is smaller or equal to r^2
      //then the point is inside
      if ((Point.x - center.x) ** 2 + (Point.y - center.y) ** 2 <= radius ** 2){
        return true
      }

      return false
    }
  }
}
