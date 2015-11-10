function main(){
  var input = document.getElementById('input');
  input.value = "default value";

  window.onChangeHandler = function(arg) {
    console.log("someting changed");
    console.log("the input value is: " + arg.value);
    console.dir(arg);
    if (arg.value === "wow") {
      arg.value = "It's really not that amazing";
    }
  }
}

window.onload = main //it is important not to do "main()" and instead just do "main" because I don't want to runt he function, the window.onload only wants the function object it does not need to be executed. 
