class Percentage {
  constructor(percent) {
    this.percent = percent
  }

  toString() {
    return `${this.percent}%`
  }
  valueOf() {
    return this.percent / 100
  }
}

let fivePercent = new Percentage(5)
let num = 50
console.log(`${fivePercent} of ${num} is ${num * fivePercent}`)