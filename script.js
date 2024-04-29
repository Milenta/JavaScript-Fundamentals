'use strict'

/* Functions */
/*************************
 *  ---  Functions  ---  *
 *************************/

function logger() {
    console.log('log my name : Marko')
}
logger() // calling, running, invoking a function

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice is made with ${apples} apples, and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
const orangeJuice = fruitProcessor(0, 3)
const mixedJuice = fruitProcessor(4, 2)
console.log(`Apple ${appleJuice}`)
console.log(`Orange ${orangeJuice}`)
console.log(`Mixed ${mixedJuice}`)

// neke built in funkcije : console.log() ; Number('23') ; String()

/************************************
 *  ---  Function declaration  ---  *
 ************************************/

function calcAge1(birthYear) { // create a function to calculate your age
    return 2024 - birthYear
}
const age1 = calcAge1(1989) // call a function and store its value
console.log(age1) // take a look what happend

/* Function expresion */
const calcAge2 = function (birthYear) { // this is called anonimus function. it is called and stored in value
    return 2024 - birthYear
}

const age2 = calcAge2(1991)

/***********************************************************
 *  ---  Arrow function - type of function expresion  ---  *
 ***********************************************************/

birthYear => 2024 - birthYear // ide prvo parametar pa telo funkcije posle =>. onda je blok koda 2024 - parametar. rerurn ide automatski za ovu vrstu funkcije
const calcAge3 = birthYear => 2024 - birthYear // koristimo arrow funkciju i cuvamo njenu vrednost u promenljivu
const age3 = calcAge3(1990)

const yearsUntilRetirenment = (birthYear, retirenmentAge) => birthYear + retirenmentAge - 2024
const markoRetirenment = yearsUntilRetirenment(1989, 70)
console.log(markoRetirenment)

const yearsUntilRetirenment2 = (birthYear, retirenmentage, firstName) => {
    const retirenment = birthYear + retirenmentage - 2024
    return `${firstName} retiers in ${retirenment} years`
}
console.log(yearsUntilRetirenment2(1989, 70, 'Marko'))

/****************************************
 *  ---  Function inside function  ---  *
 ****************************************/

function cutFruitPieces(fruit) { // funtion to cut fruit in 4 pieces
    return fruit * 4
}

function fruitProcessor2(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice is made with ${apples} apples - ${cutFruitPieces(apples)} pieces, and ${oranges} oranges - ${cutFruitPieces(oranges)} pieces.`
    return juice
}

const appleJuice2 = fruitProcessor2(5, 0)
const orangeJuice2 = fruitProcessor2(0, 3)
const mixedJuice2 = fruitProcessor2(4, 2)
console.log(`Apple ${appleJuice2}`)
console.log(`Orange ${orangeJuice2}`)
console.log(`Mixed ${mixedJuice2}`)

// ***

const calcAge = function (birthYear) {
    return 2024 - birthYear
}
const yearsUntilRetirement3 = function (birthYear) {
    const age = calcAge(1949)
    if (70 - age >= 0) return 70 - age
    else return 'Olready retired'
}
console.log(yearsUntilRetirement3(1989))

/**********************
 *  ---  ARRAYS  ---  *
 **********************/

let friend1 = 'Milos'
let friend2 = 'Ana'
let friend3 = 'Nikola'

const friends = ['Milos', 'Ana', 'Nikola']
const friends2 = new Array('Dzoni', 'Nidza', 'Pidza')

console.log(friends) // ['Milos', 'Ana', 'Nikola']
console.log(friends[1]) // 'Ana'
console.log(friends.length) // 3 ... lenght je properti, u ovom slucaju array property
console.log(friends[friends.length - 1]) // vraca zadnju varijablu arraya

friends[2] = 'Jay' // menja varijablu 'nikola' za varijablu 'jay'

const nameForArray = 'Jonas'
const Jonas = [nameForArray, 'prezime', 2024 - 1989, friends]
// sadrzi varijablu od ranije - nameForArray, string, formulu za godine i drugi array kao varijable

const calcAgeForArray = function (birthYear) {
    return 2024 - birthYear
}

const yearsArray = [1989, 1958, 2013, 2004, 1987]
const agesAray = [calcAgeForArray(yearsArray[0]), calcAgeForArray(yearsArray[1]), calcAgeForArray(yearsArray[calcAgeForArray.length - 1])] // koristimo funkcije da dobijemo varijable 

friends.push('Jasmin') // ubacuje novi element na kraj elementa
friends.unshift('John') // ubacuje novi element na pocetak arraya
friends.pop() // izbacuje zadnji element arraya
friends.shift() // izbacuje prvi element arraya
const popped = friends.pop() // izbacuje zadnji elemnet i cuva ga u novoj varijabli
console.log(friends.indexOf('Ana')) // vraca index nekog elementa koji je naveden
console.log(friends.includes('Ana')) // vraca true ili false

if (friends.includes('Ana')) console.log('You have a friend called Ana')

/***********************
 *  ---  OBJECTS  ---  *
 ***********************/

const bob = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 37,
    birthYear: 1989,
    job: 'teacher',
    friends: ['Ann', 'John', 'Dilan'],
    hasDriversLicence: false,
    calcAgeObject: function (birthYear) { return 2024 - birthYear }, // objekat moze da sadrzi function expression kao vrednost - onda mu se pristupa sa bob.calcAgeObject(1989)
    calcAgeObject2: function () { return 2024 - this.birthYear }, // objekat moze da sadrzi function expression kao vrednost - onda mu se pristupa sa bob.calcAgeObject()
    // this zamenjuje vrednost objekta u kom se nalazi tako da je ovde bob.firstName = this.firstName
    calcAgeObject3: function () {
        this.age = 2024 - this.birthYear
        return this.age
    },
    getSummery: function () {
        return `${this.firstName} is a ${this.calcAgeObject3()} year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`
    }
}

console.log(bob) // prikaze ceo objekat
console.log(bob.lastName) // prikaze property lastname
console.log(bob['lastName'])
console.log(bob['last' + 'Name'])

const interestedIn = prompt('What do you want to know about Bob? firstName, lastName, age, job or friends?')
console.log(bob[interestedIn])

if (bob[interestedIn]) {
    console.log(bob[interestedIn])
} else {
    console.log(`${interestedIn} is wrong request. Try with firstName, lastName, age, job or friends`)
}

bob.location = 'Dalas' // setuje se nov property objekta bob
bob['pet'] = 'dog' // setuje se nov property objekta bob

console.log(`${bob.firstName} has ${bob.friends.length} friends. And his best friend is ${bob.friends[0]}`)
// Bob has 3 friends. And his best friend is Ann
console.log(bob.calcAgeObject(1989))

console.log(bob.getSummery())

/*************************
 *  ---  FOR LOOPS  ---  *
 *************************/

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

const forLoopArray = [
    'Bob',
    'Smith',
    37,
    'John',
    1989,
    true,
    ['marko', 'milica', 'vuki']
]

const typesInArray = []

for (let i = 0; i < forLoopArray.length; i++) {
    typesInArray.push(typeof forLoopArray[i]) // ubacuj tip podataka forLoopArray u novi array
    console.log('for loop create new array ' + forLoopArray[i], typeof forLoopArray[i])
}
console.log(typesInArray) // odstampaj ceo array typesInArray

const birthYearsArray = [1989, 1973, 2013, 1948] // random godine rodjenja

const agesArray = [] // deklarisanje praznog array-a koji treba da se popuni
for (let i = 0; i < birthYearsArray.length; i++) { // iteracija kroz for petlju
    agesArray.push(2024 - birthYearsArray[i]) // upisivanje vrednosti u nov array
}
console.log(agesArray) // ispisivanje celog array-a u console log

/******************************************* 
 *  ---  FOR LOOP continue and break  ---  *
 *******************************************/

for (let i = 0; i < forLoopArray.length; i++) {
    if (typeof forLoopArray[i] !== 'string') continue // print all strings from array
    console.log('for loop continue ' + forLoopArray[i], typeof forLoopArray[i])
}

for (let i = 0; i < forLoopArray.length; i++) {
    if (typeof forLoopArray[i] === 'number') break // when you see first number stop everything
    console.log('for loop break ' + forLoopArray[i], typeof forLoopArray[i])
}

/********************************** 
 *  ---  FOR LOOP backwords  ---  *
 **********************************/

for (let i = forLoopArray.length - 1; i >= 0; i--) {
    console.log('backwords loop ' + i + ' ' + forLoopArray[i])
}

/********************************
 *  ---  LOOP inside LOOP  ---  *
 ********************************/

const exerciseArray = ['banch', 'squad', 'pushup']
for (let exercise = 0; exercise < exerciseArray.length; exercise++) { // loop through array
    console.log(`Starting excersize : ${exerciseArray[exercise]}`)
    for (let i = 1; i < 11; i++) { // loop 10 timmes for each element of array
        console.log(`Excersize is ${exerciseArray[exercise]}, repetition is ${i}`)
    }
}

/**************************
 *  ---  WHILE loop  ---  *
 **************************/

let rep = 1
while (rep <= 5) { // while condition is true loop is running
    console.log(`Counting to ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
let numOfTimes = 0;
while (dice !== 6) {
    console.log(`Your rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    numOfTimes++
    if (dice === 6) console.log('You got 6, loop is about to end...')
}
console.log(numOfTimes)
