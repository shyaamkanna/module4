(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "shyaam";
  var greeting = "good bye";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);
