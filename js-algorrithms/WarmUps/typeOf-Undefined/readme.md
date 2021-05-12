Run the following code and explain the output:

```javascript
var sample = function(){
  var a = b = 3;
}
sample();
console.log("Is a defined?", typeof a !== "undefined");
console.log("Is b defined?", typeof b !== "undefined");

```