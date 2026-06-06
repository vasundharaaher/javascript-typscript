const str = "  hello-world-how are-you doing  "

// character at that index
console.log(str.charAt(4))

// first accurance of that string at index
console.log(str.indexOf('-'))

// sub string from to to
console.log(str.substring(4,8))

// slicing takes negative index also
console.log(str.slice(-4,8))

// split on the base
console.log(str.split('-'))

// remove space befor and after
console.log(str.trim())

