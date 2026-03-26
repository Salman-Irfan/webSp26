const users = [`ahad`, `sajjad`, `mohammad`, `ali`, `hassan`, `hussain`, `amjad`, `murtaza`, `mohsin`, `mohib`, `umar`];

console.log(users)

// Create
users.push(`hassan`); // last insertion
console.log(users)

users.unshift(`hussain`); // start insertion
console.log(users)

// Read
console.log(users[0]) // first element
console.log(users[3]) // fourth element
console.log(users[users.length - 1]) // last element

// udate
users[0] = `amjad`
console.log(users)

// delete
let lastDel = users.pop() // last element deletion
console.log(users)
console.log(lastDel)

let firstDel = users.shift() // first element deletion
console.log(firstDel)
console.log(users)

// range read with slice
console.log(users.slice(0, 3)) // first three elements
console.log(users.slice(3, 6)) // next three elements


const names = [`ahad`, `bilal`, `chaudhary`, `daniyal`]
console.log(names)
// create with splice
names.splice(2, 0, `sajjad`) // insert at index 2
console.log(names)
// delete with splice
names.splice(1, 2) // delete 1 element from index 1
console.log(names)
// create, delete, and update with splice
names.splice(1, 2, `ehsan`, `faizan`, `gul`) // delete 2 elements from index 1 and insert `mohammad`
console.log(names)


let title = `web engg`
console.log(title) 
title = `mobile app`
console.log(title)


let ans1 = 23 // 23
console.log(ans1)

let ans2 = ans1 // 23
console.log(ans2)

ans2 = 45 // 45
console.log(ans2) // 45

console.log(ans1) // 45 or 23?
console.log(ans1)

