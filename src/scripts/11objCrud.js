const user = {
    name: 'John',
    age: 30,
    city: 'New York'
}
console.log(user)
console.log(user.name) // read
console.log(user.age) // read
console.log(user.city) // read

// create
user.email = `john@example.com`
console.log(user)
console.log(user.email)

// update:
user.age = 31
console.log(user)

// delete:
delete user.city
console.log(user)