angular.module('todoListApp')
.directive("Helloworld", function() {
  return {
    template:  "This is the hello world directive!"
  };
});


angular.module("foobar", [])
  .directive ("customDirective", function(){
    console.log("This is a custom directive");
  });
