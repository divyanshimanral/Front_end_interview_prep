// Array methods

let list = [1,2, 3, 4,5]
map_arr = list.map((el) => el * 2)
// console.log(map_arr) //creates new array

// -----------------------------------------------------------------------------------------------------------
filter_arr = list.filter((el) => el % 2 === 0)
// console.log(filter_arr) //returns a new array

// -----------------------------------------------------------------------------------------------------------
reduce_arr = list.reduce((total, item) => total + item, 0)
// console.log(reduce_arr) // find total

// -----------------------------------------------------------------------------------------------------------
find_arr = list.find((el) => el === 3)
// console.log(find_arr) //find element

// -----------------------------------------------------------------------------------------------------------
// console.log(list.indexOf(3)) // 2
// console.log(list.indexOf(6)) // -1

// -----------------------------------------------------------------------------------------------------------
// console.log(list.includes(2)) // true
// console.log(list.includes(20)) // false

// -----------------------------------------------------------------------------------------------------------
// list.pop() // to remove last elt
// list.push(6) // to add last elt
// -----------------------------------------------------------------------------------------------------------
// list.shift() // to remove first elt
// list.unshift(0) // to remove first elt
// -----------------------------------------------------------------------------------------------------------
// list.reverse() //to reverse the list
// -----------------------------------------------------------------------------------------------------------
console.log(list)

some_arr = list.some((el) => el % 2 === 0) //checks if some elts in list are even and return boolean answer
// console.log(some_arr)
every_arr = list.every((el) => el % 2 === 0) //checks if every elts in list are even and return boolean answer
// console.log(every_arr)

elt0 = list.at(0) // returns the element at that index
// console.log(elt0)

months = ["Jan", "Mar", "Apr"]
months.splice(1, 0, 'Feb') // modifies the original arr array
// console.log(months)
list.splice(1, 0, 1.1)
// console.log(list)

joined_list = list.join(', ') // returns a new joined str
// console.log(joined_list)
console.log(typeof joined_list)



