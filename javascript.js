let display = documant.getElementByid("display");
let expression ="";
function appendToDisplay(value) {
 expression += value;
     display.innerHTML = espression;
    }

    function clearDisplay() {
     expression ="";
     display.innerHTML ="0";
    }
function calculateResult(){
      try {
       const result =eval(expression);
       expression = result;
       display.innerHTML = result;
      } catch(error) {
        document.innerHTML= 'Error';
      }
    }

   
