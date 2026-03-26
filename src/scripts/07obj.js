const user = {
  name: "John",
  age: 30,
  "is Admin": true,
  8: "eight",
  9: "nine",
  address: {
    country: "USA",
    city: "New York",
    town: "Manhattan",
    street: "5th Avenue",
  }
};

console.log(user);
console.log(typeof user);

console.log(user.name) // John
console.log(user.age) // 30
console.log(user["is Admin"]) // true
console.log(user[8]) // conceptual understanding of how objects can be used as arrays 
console.log(user[9])

console.log(user.address)
console.log(user.address.country)
console.log(user.address.city)
console.log(user.address.town)
console.log(user.address.street)