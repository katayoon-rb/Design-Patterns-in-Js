CoordinateSystem = {
  CARTESIAN : 0,
  POLAR : 1
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static get factory() {
    return new PointFactory()
  }
}

class PointFactory {
  newCartesianPoint(x, y) {
    return new Point(x, y)
  }

  static newPolarPoint(rho, theta) {
    return new Point(
      rho * Math.cos(theta), rho * Math.sin(theta)
    )
  }
}

let p1 = Point.factory.newCartesianPoint(4, 5)
console.log(p1)

let p2 = PointFactory.newPolarPoint(5, Math.PI/2)
console.log(p2)