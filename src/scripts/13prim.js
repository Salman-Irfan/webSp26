const arr1 = [1, 2, 3];
console.log(arr1)

const arr2 = arr1; // [1,2,3]
console.log(arr2)

arr2[0] = 10; // [10,2,3]
console.log(arr2) // [10,2,3]
console.log(arr1) // [10,2,3] or [1,2,3]?

// this is causing a problem, then how to copy an array without reference?
const arr3 = [...arr1] // spread operator
console.log(arr3) // [10,2,3]
arr3[0] = 100;
console.log(arr3) // [100,2,3]
console.log(arr1) // [100,2,3] or [10,2,3]?

const obj1 = {
    name: `ahad`,
    age: 23
}
console.log(obj1)

const obj2 = obj1; // {name: `ahad`, age: 23}
console.log(obj2)

obj2.name = `bilal`; // {name: `bilal`, age: 23}
console.log(obj2) // {name: `bilal`, age: 23}
console.log(obj1) // {name: `bilal`, age: 23} or {name: `ahad`, age: 23}?

// this is causing a problem, then how to copy an object without reference?
const obj3 = {...obj1} // spread operator
console.log(obj3) // {name: `bilal`, age: 23}
// change name in obj3
obj3.name = `chaudhary`;
console.log(obj3) // {name: `chaudhary`, age: 23}
console.log(obj1) // {name: `chaudhary`, age: 23} or {name: `bilal`, age: 23}?