function calculate(x) {
    return function(a) {
      return function(b) {
        if( x === '+' ) {
            return( a + b );
        } else if( x === '*' ) {
            return( a * b );
            // just in case of ... :))
        } else if( x === '/') {
            return ( a / b );
        } else if( x === '-' ) {
            return ( a - b );
        }
        return 'Wrong operator'
      }
    }
  }

  console.log(calculate('+')(1)(2));
  console.log(calculate('*')(2)(3));
  console.log(calculate('/')(12)(3));
  console.log(calculate('-')(2)(1));