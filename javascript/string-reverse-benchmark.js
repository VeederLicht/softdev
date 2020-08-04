// best run from a terminal using node, method 7 & 8 have been commented out because of callstack overflow


console.log( `
**************************************************
Benchmarking JS string reverse methods
  inspiration: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
` );


( function() {
     let sTestString, sNewString;
     let iStartTime, iC, iMax;
     let aResults;


     sTestString = '0123456789';
     iMax = 1000000;
     aResults = [];

     console.log( `
Test with SHORT string  
Teststring length: ${sTestString.length}
  Loop count: ${iMax}` );
     process.stdout.write( '  Progress: ' );


     //     ========Method1=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod1( sTestString );
     }
     sNewString = sReverseStringMethod1( sTestString );
     sNewString = sReverseStringMethod1( sNewString );     
     aResults.push( [ 'Method  1', Date.now() - iStartTime, sTestString === sNewString ] );



     //   ========Method2=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod2( sTestString );
     }
     sNewString = sReverseStringMethod2( sTestString );
     sNewString = sReverseStringMethod2( sNewString );     
     aResults.push( [ 'Method  2', Date.now() - iStartTime, sTestString === sNewString ] );



     //    ========Method3=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod3( sTestString );
     }
     sNewString = sReverseStringMethod3( sTestString );
     sNewString = sReverseStringMethod3( sNewString );     
     aResults.push( [ 'Method  3', Date.now() - iStartTime, sTestString === sNewString ] );



     //    ========Method4=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod4( sTestString );
     }
     sNewString = sReverseStringMethod4( sTestString );
     sNewString = sReverseStringMethod4( sNewString );     
     aResults.push( [ 'Method  4', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method5=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod5( sTestString );
     }
     sNewString = sReverseStringMethod5( sTestString );
     sNewString = sReverseStringMethod5( sNewString );     
     aResults.push( [ 'Method  5', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method6=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod6( sTestString );
     }
     sNewString = sReverseStringMethod6( sTestString );
     sNewString = sReverseStringMethod6( sNewString );     
     aResults.push( [ 'Method  6', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method7=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod7( sTestString );
     }
     sNewString = sReverseStringMethod7( sTestString );
     sNewString = sReverseStringMethod7( sNewString );     
     aResults.push( [ 'Method  7', Date.now() - iStartTime, sTestString === sNewString ] );


     //     ========Method8=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod8( sTestString );
     }
     sNewString = sReverseStringMethod8( sTestString );
     sNewString = sReverseStringMethod8( sNewString );     
     aResults.push( [ 'Method  8', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method9=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod9( sTestString );
     }
     sNewString = sReverseStringMethod9( sTestString );
     sNewString = sReverseStringMethod9( sNewString );     
     aResults.push( [ 'Method  9', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method10=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod10( sTestString );
     }
     sNewString = sReverseStringMethod10( sTestString );
     sNewString = sReverseStringMethod10( sNewString );     
     aResults.push( [ 'Method 10', Date.now() - iStartTime, sTestString === sNewString ] );

     console.log(`
     
  RESULT (total time in ms):`)
     console.log( aResults.sort( ( a, b ) => {
          if ( a[ 1 ] < b[ 1 ] ) return -1;
          if ( a[ 1 ] > b[ 1 ] ) return 1;
          return 0;
     } ) );



     // Create unicode test-string
     sTestString = '';
     for ( iC = 0; iC <= 136755; iC++ ) {  // Unicode 10.0 136755, although javascript internally works with UTF-16
          sTestString += String.fromCharCode(iC);
     }
     iMax = 100;
     aResults = [];

     console.log( `
Test with LONG string  
Teststring length: ${sTestString.length}
  Loop count: ${iMax}` );
     process.stdout.write( '  Progress: ' );


     //     ========Method1=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod1( sTestString );
     }
     sNewString = sReverseStringMethod1( sTestString );
     sNewString = sReverseStringMethod1( sNewString );     
     aResults.push( [ 'Method  1', Date.now() - iStartTime, sTestString === sNewString ] );



     //   ========Method2=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod2( sTestString );
     }
     sNewString = sReverseStringMethod2( sTestString );
     sNewString = sReverseStringMethod2( sNewString );     
     aResults.push( [ 'Method  2', Date.now() - iStartTime, sTestString === sNewString ] );



     //    ========Method3=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod3( sTestString );
     }
     sNewString = sReverseStringMethod3( sTestString );
     sNewString = sReverseStringMethod3( sNewString );     
     aResults.push( [ 'Method  3', Date.now() - iStartTime, sTestString === sNewString ] );



     //    ========Method4=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod4( sTestString );
     }
     sNewString = sReverseStringMethod4( sTestString );
     sNewString = sReverseStringMethod4( sNewString );     
     aResults.push( [ 'Method  4', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method5=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod5( sTestString );
     }
     sNewString = sReverseStringMethod5( sTestString );
     sNewString = sReverseStringMethod5( sNewString );     
     aResults.push( [ 'Method  5', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method6=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod6( sTestString );
     }
     sNewString = sReverseStringMethod6( sTestString );
     sNewString = sReverseStringMethod6( sNewString );     
     aResults.push( [ 'Method  6', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method7=========` );
//     process.stdout.write( '.' );
//     iStartTime = Date.now();
//     for ( iC = 0; iC < iMax; iC++ ) {
//          sReverseStringMethod7( sTestString );
//     }
//     sNewString = sReverseStringMethod7( sTestString );
//     sNewString = sReverseStringMethod7( sNewString );     
//     aResults.push( [ 'Method  7', Date.now() - iStartTime, sTestString === sNewString ] );


     //     ========Method8=========` );
//     process.stdout.write( '.' );
//     iStartTime = Date.now();
//     for ( iC = 0; iC < iMax; iC++ ) {
//          sReverseStringMethod8( sTestString );
//     }
//     sNewString = sReverseStringMethod8( sTestString );
//     sNewString = sReverseStringMethod8( sNewString );     
//     aResults.push( [ 'Method  8', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method9=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod9( sTestString );
     }
     sNewString = sReverseStringMethod9( sTestString );
     sNewString = sReverseStringMethod9( sNewString );     
     aResults.push( [ 'Method  9', Date.now() - iStartTime, sTestString === sNewString ] );



     //     ========Method10=========` );
     process.stdout.write( '.' );
     iStartTime = Date.now();
     for ( iC = 0; iC < iMax; iC++ ) {
          sReverseStringMethod10( sTestString );
     }
     sNewString = sReverseStringMethod10( sTestString );
     sNewString = sReverseStringMethod10( sNewString );     
     aResults.push( [ 'Method 10', Date.now() - iStartTime, sTestString === sNewString ] );

     console.log(`
     
  RESULT (total time in ms):`)
     console.log( aResults.sort( ( a, b ) => {
          if ( a[ 1 ] < b[ 1 ] ) return -1;
          if ( a[ 1 ] > b[ 1 ] ) return 1;
          return 0;
     } ) );
} )();

console.log( `
**************************************************
` );

/*
1: Decrementing for-loop with concatenation
The original way that I achieved the intended result was to use a decrementing for-loop that appended each character of the input to a new string in reverse order. I was able to access the parsed strings individual characters similar to the way you would reference an array’s items.
*/
function sReverseStringMethod1( s ) {
     var o = '';
     for ( var i = s.length - 1; i >= 0; i-- )
          o += s[ i ];
     return o;
}

/*
2: Incrementing/decrementing for-loop with two arrays
Another way I formed to reverse a string was to create an empty array and iterate over the length of the string with both incrementing/decrementing counters. The array position uses the incrementing counter where as the parsed in string uses the decrementing one. Finally the created array is joined into a single string and returned.
*/
function sReverseStringMethod2( s ) {
     var o = [];
     for ( var i = s.length - 1, j = 0; i >= 0; i--, j++ )
          o[ j ] = s[ i ];
     return o.join( '' );
}

/*
3: Incrementing for-loop with array pushing and charAt
The above example is a modification of the second example. Instead of using two counters however we use one incrementing value that gets deducted from the total length of the parsed in string. This calculated value determines the position of the next character to be pushed onto the new array (using the ‘push()’ function instead of ‘[]’). The other difference from the last example is that it uses the strings ‘charAt()’ method instead of its array capabilities.
*/
function sReverseStringMethod3( s ) {
     var o = [];
     for ( var i = 0, len = s.length; i <= len; i++ )
          o.push( s.charAt( len - i ) );
     return o.join( '' );
}

/*
4: In-built functions
This implementation takes advantage of the ‘reverse()’ method provided by the Array prototype. First it splits the string into a real array, then calls the ‘reverse()’ method and finally returns the joined array.
*/
function sReverseStringMethod4( s ) {
     return s.split( '' )
          .reverse()
          .join( '' );
}

/*
5: Decrementing while-loop with concatenation and substring
Using a decrementing while-loop I was able to implement this method. Again harnessing concatenation, I was able to achieve the iteration through the string in a similar fashion to the for-loop used in the first two examples. I was then able to use the strings ‘substring()’ function to retrieve each desired character.
*/
function sReverseStringMethod5( s ) {
     var i = s.length,
          o = '';
     while ( i > 0 ) {
          o += s.substring( i - 1, i );
          i--;
     }
     return o;
}

/*
6: Single for-loop declaration with concatenation
This is most likely my favorite implementation, due to its unnecessary cryptic nature. Using only a single for-loops parameters, I was able to decrement through the parsed in string and concatenate each character to a new string to return.
*/
function sReverseStringMethod6( s ) {
     for ( var i = s.length - 1, o = ''; i >= 0; o += s[ i-- ] ) {}
     return o;
}

/*
7: Recursion with substring and charAt
The above example recursively calls itself, passing in the inputted string, excluding the first character on each iteration, which is instead appended to the result. Iterating through this process until no input is present (the base case) results in a reversed string.
*/
function sReverseStringMethod7( s ) {
     return ( s === '' ) ? '' : sReverseStringMethod7( s.substr( 1 ) ) + s.charAt( 0 );
}

/*
8: Internal function recursion
This is another example of using recursion to reverse a string. The implementation above uses an internal function, which is first called by the outer function, parsing in the inputted string, its length and an empty string. The internal function is then recursively called by itself until the string length has been decremented to zero - at which time the originally empty parsed in string has been concatenated with the inputted string characters in reverse.
*/
function sReverseStringMethod8( s ) {
     function rev( s, len, o ) {
          return ( len === 0 ) ? o : rev( s, --len, ( o += s[ len ] ) );
     }
     return rev( s, s.length, '' );
}

/*
9: Half-index switch for-loop
I found this method to be a very effective way of reversing a string, highlighting its benefits when processing large strings. The strings half-point is first calculated and then iterated over. Upon each iteration the upper half’s value (calculated by deducting the current position by the string length) is temporary stored and replaced by the lower half’s value. The temporary value then replaces the lower half’s value to finally result in a reversed string.
*/
function sReverseStringMethod9( s ) {
     s = s.split( '' );
     var len = s.length,
          halfIndex = Math.floor( len / 2 ) - 1,
          tmp;
     for ( var i = 0; i <= halfIndex; i++ ) {
          tmp = s[ len - i - 1 ];
          s[ len - i - 1 ] = s[ i ];
          s[ i ] = tmp;
     }
     return s.join( '' );
}


/* 
10: Half-index recursion
The final method I wish to show uses the same ideology as the last implementation (half-indexing) but instead relies on recursion to reverse the string instead of a for-loop.
*/
function sReverseStringMethod10( s ) {
     if ( s.length < 2 )
          return s;
     var halfIndex = Math.ceil( s.length / 2 );
     return sReverseStringMethod10( s.substr( halfIndex ) ) +
          sReverseStringMethod10( s.substr( 0, halfIndex ) );
}
