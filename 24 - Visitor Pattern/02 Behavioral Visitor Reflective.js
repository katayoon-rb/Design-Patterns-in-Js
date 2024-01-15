class NumberExpression {
  constructor(value) {
    this.value = value
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left
    this.right = right
  }
}

class ExpressionPrinter {
  print(exp, buffer) {
    if (exp instanceof NumberExpression) {
      buffer.push(exp.value)
    }
    else if (exp instanceof AdditionExpression) {
      buffer.push('(')
      this.print(exp.left, buffer)
      buffer.push('+')
      this.print(exp.right, buffer)
      buffer.push(')')
    }
  }
}


let exp = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(
    new NumberExpression(2),
    new NumberExpression(3)
  )
)
let buffer = []
let ep = new ExpressionPrinter()
ep.print(exp, buffer)
console.log(buffer.join(''))