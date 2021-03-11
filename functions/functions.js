// FUNCTION SCOPE

let subject

function createThink() {
  subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

// FUNCTION HOISTING

sayMyName()

function sayMyName() {
  console.log('Mariele')
}