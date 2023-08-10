let numberDisplay = document.getElementById("numberDisplay");  
       let decrement = document.getElementById("decrement");  
       let reset = document.getElementById("reset");  
       let increment = document.getElementById("increment");  
       decrement.addEventListener('click',function decr(){
        numberDisplay.innerHTML--;
       });
       increment.addEventListener('click',function incr(){
        numberDisplay.innerHTML++;
       });
       reset.addEventListener('click',function reset(){
        numberDisplay.innerHTML = 0;
       });