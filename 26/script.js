const number = new Number(500)
console.dir(number)
console.dir(Number.prototype.__proto__)
console.dir(Number.prototype.__proto__.__proto__)

const str = new String("hello")
console.dir(str)
console.dir(String.prototype.__proto__)
console.dir(String.prototype.__proto__.__proto__)

const b = new Boolean(true)
console.dir(b)
console.dir(Boolean.prototype.__proto__)
console.dir(Boolean.prototype.__proto__.__proto__)