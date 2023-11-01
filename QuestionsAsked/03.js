let people = [
  { name: "Alice", age: 21 },
  { name: "Alice", age: 24 },
  { name: "Max", age: 21 },
  { name: "June", age: 23 },
  { name: "July", age: 24 },
];

// first create a obj to store the resulting sorted items
// now iterate through each object
// check if that field is present as value is no create the property as empty array
// if it is there then push the field items into the array
//  return the obj
function sortBy(arr, field) {
  let resultObj = {};
  arr.forEach((item) => {
    const value = item[field];
    if (!resultObj[value]) {
      resultObj[value] = [];
    }
    resultObj[value].push(item);
  });
  return resultObj;
}

console.log(sortBy(people, "age"))
