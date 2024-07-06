const display = document.getElementById("display");

function clickbutton(input){
  display.value += input;
}
 function cleardata(){
display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);

    }
    catch(error){
        display.value="Error"; 
    }
}
function backspace(){
    let currentvaue=display.value;
    display.value=currentvaue.slice(0,-1);
}
