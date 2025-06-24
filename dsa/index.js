//Call method 
const flights = { // Parent or common function
    name: '',
    airline: '',
    iataCode:'',
    book(flightName, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightName}`)
    }
}

const lufthansa = {
    airline: 'Lufthansa',
    name: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
}

const eurowings = {
    airline: 'euro',
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const swiss = {
    airline: 'Swiss',
    name: 'Swiss',
    iataCode: 'SW',
    bookings: [],
}

// call functions +++++
// <FUNCTION>.call(thisFn, arr1,arr2, .....)
flights.book.call(
    eurowings // The value you want to use as "this"
    ,23,'Hitesh' // arguments 
)
flights.book.call(
    swiss // The value you want to use as "this"
    ,23,'Saara' // arguments 
)
flights.book.call(lufthansa, 25, 'Jao')

//  Argument pass under array in apply method
// <FUNCTION>.apply(thisFn, [arr1,arr2, .....])
flights.book.apply(swiss, [35, 'Other booking swiss'])
const person = [30, 'Binding name'];

// <FUNCTION>.bind(thisFn, arr1,arr2, .....)
// it return the function values
const bindFlight = flights.book.bind(swiss,...person)
bindFlight()