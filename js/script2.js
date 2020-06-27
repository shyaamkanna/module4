(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hello ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);



