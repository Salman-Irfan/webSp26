let str = `      zoom class web      `
console.log(str)

// loop through the string
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}
// to upper case
console.log(str.toUpperCase())
// to lower case
console.log(str.toLowerCase())
// left trim the string
console.log(str.trimStart())
// right trim the string
console.log(str.trimEnd())
// trim the string
console.log(str.trim())

// index of a substring
console.log(str.indexOf('class'))
// last index of a substring
console.log(str.lastIndexOf('web'))

// slice
console.log(str.slice(6, 11))
// substring
console.log(str.substring(6, 11))
// substr
console.log(str.substr(6, 5))

// replace
console.log(str.replace('web', 'javascript'))
// replace all
console.log(str.replaceAll(' ', '-'))