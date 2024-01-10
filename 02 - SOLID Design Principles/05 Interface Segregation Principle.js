class Document {}

class Machine {
  constructor() {
    if (this.constructor.name === 'Machine') {
      throw new Error('Machine is abstract!')
    }
  }
  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class NotImplementedError extends Error {
  constructor(name) {
    super(`${name} is not implemented!`)
    if (Error.captureStackTrace){
      Error.captureStackTrace(this, NotImplementedError)
    }
  }
}

class OldFashionedPrinter extends Machine {
  print(doc) {}
  scan(doc) {
    throw new NotImplementedError('OldFashionedPrinter.scan')
  }
}

class Printer {
  constructor() {
    if (this.constructor.name === 'Printer')
      throw new Error('Printer is abstract!')
  }
  print(){}
}

class Scanner {
  constructor() {
    if (this.constructor.name === 'Scanner') {
      throw new Error('Scanner is abstract!')
    }
  }
  scan(){}
}

class Photocopier {
  print() {}
  scan() {}
}


let printer = new OldFashionedPrinter()
printer.scan()