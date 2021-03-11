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

// ARROW FUNCTION

const myName = (name) => {
  console.log(name)
}

myName('Mariele')

// CALLBACK FUNCTION

function MyName(name) {
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar a callback')
}

MyName(
  () => {
    console.log('estou em uma callback')
  }
)