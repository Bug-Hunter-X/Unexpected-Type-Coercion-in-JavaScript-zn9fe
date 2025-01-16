```javascript
function myFunction(a, b) {
  // Ensure both inputs are numbers before performing addition
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  return a + b; 
}

console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(5, '5')); // Throws an error
```