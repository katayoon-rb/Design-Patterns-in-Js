class Memento {
  constructor(balance) {
    this.balance = balance
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance
    this.changes = [new Memento(balance)]
    this.current = 0
  }

  deposit(amount) {
    this.balance += amount
    let memento = new Memento(this.balance)
    this.changes.push(memento)
    this.current++
    return m
  }

  restore(memento) {
    if (memento) {
      this.balance = memento.balance
      this.changes.push(memento)
      this.current = this.changes.count - 1
    }
  }

  undo() {
    if (this.current > 0) {
      let memento = this.changes[--this.current]
      this.balance = memento.balance
      return memento
    }
    return null
  }

  redo() {
    if (this.current+1 < this.changes.length) {
      let memento = this.changes[++this.current]
      this.balance = memento.balance
      return memento
    }
    return null
  }

  toString() {
    return `Balance: $${this.balance}`
  }
}


let bank = new BankAccount(100)
bank.deposit(50)
bank.deposit(25)
console.log(bank.toString())

bank.undo()
console.log(`Undo 1: ${bank.toString()}`)
bank.undo()
console.log(`Undo 2: ${bank.toString()}`)
bank.redo()
console.log(`Redo 2: ${bank.toString()}`)