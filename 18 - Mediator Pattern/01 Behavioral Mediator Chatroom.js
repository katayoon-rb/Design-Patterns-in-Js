class Person {
  constructor(name) {
    this.name = name
    this.chatLog = []
  }

  receive(sender, message) {
    let s = `${sender}: '${message}'`
    console.log(`[${this.name}'s chat session] ${s}`)
    this.chatLog.push(s)
  }

  say(message) {
    this.room.broadcast(this.name, message)
  }

  pm(who, message) {
    this.room.message(this.name, who, message)
  }
}

class ChatRoom {
  constructor() {
    this.people = []
  }

  broadcast(source, message) {
    for (let p of this.people)
      if (p.name !== source) {
        p.receive(source, message)
      }
  }

  join(p) {
    this.broadcast('room', `${p.name} joins the chat`)
    p.room = this
    this.people.push(p)
  }

  message(source, destination, message) {
    for (let p of this.people)
      if (p.name === destination) {
        p.receive(source, message)
      }
  }
}


let room = new ChatRoom()

let john = new Person('John')
let jane = new Person('Jane')
let simon = new Person('Simon')

room.join(john)
room.join(jane)

john.say('hi room')
jane.say('oh, hey john')

room.join(simon)
simon.say('hi everyone!')

jane.pm('Simon', 'glad you could join us!')