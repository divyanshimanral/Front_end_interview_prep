let myName = 'Divyanshi    '
let myChannel = "CODE    "

// console.log(myName.trueLength)


let myHeros = ["thor", 'spider']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        // console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    // console.log(`Hitesh is present in all objects`)
}

// heroPower.hitesh()
// myHeros.hitesh()

Array.prototype.heyHiteds = function () {
    // console.log(`Hitesh says hello`)
}

// myHeros.hitesh()
// myHeros.heyHiteds() //have access 
// heroPower.heyHiteds() //donot have access

// Inheritance

const User = {
    name:"user",
    email:"jdjsfjkfd@gamial.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User


// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser ="chaiAurCode    "

String.prototype.trueLength = function() {
    // console.log(`${this.name}`)
    console.log(`${this}`)
    console.log(`True lenght is: ${this.trim().length}`)
}

anotherUser.trueLength()
"hitesh".trueLength()
"Divyanshi    ".trueLength()
