function saySomething(message){
    return this.name + " is " + message
}

var person4 = {name:"John"}

console.log(saySomething.call(person4, "awesome"))
console.log(saySomething.apply(person4, ["awesome"]))