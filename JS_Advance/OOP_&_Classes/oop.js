// Object literal
// Object is base unit
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIm: true,
  getUserDetails: function () {
    // console.log(
    //   "My instructor name is ",
    //   this.username + " today he logged in " + this.loginCount + " times."
    // );

    // current context
    // console.log(this)
  },
};


// console.log(user.getUserDetails())

// console.log(user.username);

// console.log(this)

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const user1 = new User("hitesh", 2, true)
const user2 = new User("chaiaurCode", 1, false)

console.log(user2.constructor)
console.log(user1)
