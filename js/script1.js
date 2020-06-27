(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "shyaam";
  var greeting = "goodbye";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);
