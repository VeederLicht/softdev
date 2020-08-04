// genomen uit https://www.youtube.com/playlist?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX

/**  AFLEVERING 1 */
// let ipv var om de scope te beperken tot binnen de brackets (en de daarbinnen gedefinieerde brackets)
{
     let a = 1;
}

// const om onveranderbare 'variabelen' te kunnen maken
const a = 1;

// template literals mogelijk maken met backticks " ` "
let b = `Deze string maakt gebruik van javascript binnen de string mogelijk zoals ${a}`;





/**  AFLEVERING 2 */
// arrow functions, mooiere syntax, maar ook zonder 'this' binding, dus wanneer 'this' in een arrow function gebruikt wordt, wordt automatisch de scope erbuiten opgezocht, de parent
// "The interesting thing to note is that the this value (internally) is not actually bound to the arrow function. Normal functions in JavaScript bind their own this value, however the this value used in arrow functions is actually fetched lexically from the scope it sits inside. It has no this, so when you use this you’re talking to the outer scope." https://toddmotto.com/es6-arrow-functions-syntaxes-and-lexical-scoping/
function FooCtrl( FooService ) {
     this.foo = 'Hello';
     FooService.doSomething( response => this.foo = response );
}





/**  AFLEVERING 3 */
// rest parameters, parameters worden normaal gesproken in object vorm doorgegeven, maar met rest (...) parameter als array waardoor array-methods gebruikt kunnen worden
let sum = function( ...args ) {
     return args.reduce( ( prev, curr ) => prev + curr ) // returns sum of arguments
}

let multiply = ( mul, ...args ) => {
     return args.map( ( n ) => {
          return mul * n // returns array of args multiplied by mul
     } )
}



// spread operator, doet het omgekeerde, het maakt van een enkele array een arguments-object
let numbers = [ 4, 6, 8, 2 ]
let max = Math.max( ...numbers ) // returns 8

let newNumbers = [ 1, 5, 3, 9, ...numbers ] // concats, dus [1,5,3,9,4,6,8,2]






/**  AFLEVERING 4 */
// destructuring, een manier om data uit data structures zoals arrays en objecten 'om te gieten'
let person = {
     name: "John",
     age: 39,
     location: "New York"
}

let {
     someage
} = person // someage = 39

let {
     location: currentPlace
} = person // currentPlace = "New York"

let someVar = "age"
let {
     [ someVar ]: newAge
} = person // newAge = 39

// en
let aN = [ 1, 2, 3, 4 ]
let [ a, b, , d ] = aN // a,b,d, = 1,2,4 respectievelijk
let [ a, b, ...rest ] // rest = [3,4], combinatie met rest params

// en (belangrijk!)
import {
     func1,
     func2,
     func3
}
from 'some-library' // importeert ineens meerdere functies







/**  AFLEVERING 6 */
// promises, 3 'states': pending, resolved, reject. Als een promise eenmaal een 'state' heeft gekregen kan deze niet meer veranderen.
let myPromise = new Promise( ( resolve, reject ) => {
     setTimeout( () => {
          resolve( "All Good!" ) // breng 'state' resolve teweeg met 'reason' "All Good!"
     }, 1000 );

     setTimeout( () => {
          reject( "Not Good!" ) // breng 'state' reject teweeg met 'reason' "Not Good!"
     }, 500 );
} )

myPromise.then( // aanroepen...
     res => console.log( res ), // resolve state
     rej => console.log( rej ) // reject state
);

// ook
myPromise
     .then( res => console.log( res ) )
     .catch( rej => console.log( rej ) );


// èn, meerdere promises
let myPromise1 = new Promise( ( resolve, reject ) => {
     setTimeout( () => {
          resolve( "Promise1 OK!" )
     }, 1000 );
} );
let myPromise2 = new Promise( ( resolve, reject ) => {
     setTimeout( () => {
          reject( "Promise2 FAIL!" )
     }, 1500 );
} );
let myPromise3 = new Promise( ( resolve, reject ) => {
     setTimeout( () => {
          reject( "Promise3 FAIL!" )
     }, 5000 );
} );

Promise.all( [ myPromise1, myPromise2, myPromise3 ] ) // wachten tot ze allemaal afgelopen zijn
     .then( res => console.log( res ) ) // alléén .then als ALLE promises resolven
     .catch( rej => console.log( rej ) ); // zodra één of meerdere promises rejecten (!) en toont dan de reject 'reasons'

Promise.race( [ myPromise1, myPromise2, myPromise3 ] ) // zodra de eerste klaar is
     .then( res => console.log( res ) ) // alléén .then als ALLE promises resolven
     .catch( rej => console.log( rej ) ); // onmiddelijk zodra één (!) rejects en toont dan de reject 'reason'


// real world, met fetch()
fetch( 'http://baseballipsum.apphb.com/api/' )
     .then( res => res.json()
          .then( res2 => console.log( res2 ) ) );



/**  AFLEVERING 9  :  modules*/

// ES5 -->
//  file1.js
define( function( arg ) {} );

//  file2.js
const cArg = require( 'file1' );

// ------------------------

// ES6 -->
//  file1.js
export default function( arg ) {} // default export
export function namedFunc( someArg ) {} // named export

//  file2.js
import testMod from './file1'; // import default
import { namedFunc as thisFunc, someOtherFunc as thatFunc } from './file1'; // named import
import * as funcObj from './file1';   // alle functies binnenhalen als methoden op het object funcObj





/**  AFLEVERING 13  :  arrays*/

var a1 = [1,2,3];

// methode 1, klassiek
for( var i = 0; i < a1.length; i++ ) {
     console.log( a1[i] );
}

// methode 2, ES6
for( const a1_ of a1 ) {  // kan ook 'let' gebruiken
     console.log( a1_ );
}


// methode 3, ES6
a1.forEach( (a1_) => console.log( a1_ ));


// array van object maken
function f1 (){
     console.log( arguments );  // arguments is een object die alle ingevoerde argumenten bevat
     aArgs = Array.from( arguments ); // nu zijn alle array.methods beschikbaar op deze argumenten !!!
     console.log( aArgs.reduce( ( prev, cur ) => prev + cur ) );
}





/**  AFLEVERING 14  :  Map() & Set() */
// Map() is een soort veredelde array van arrays waarbij methods zijn geimplementeerd om bv set, get, delete, clear uit te voeren
// Set() is een soort veredelde enkele array, waarbij alleen UNIEKE waarden zijn toegestaan, tevens bewerkbaar met get, set, delete etc.





/**  AFLEVERING 15  :  Generators */
// Generators zijn functies die iterable zijn, ze returnen op gezette plaatsen in de functie een waarde en een status-object
function* myGenerator() {
    console.log('Hi!');
    yield;
    console.log("Bye!");
}
let testFunc = myGenerator();
testFunc.next();    // "Hi!", 'done'=false
testFunc.next();    // "Bye!", 'done'=true


// EOF    
