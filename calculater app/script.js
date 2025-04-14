var input1 = document.getElementById("input1");

function inputvalue(data) {
    input1.value += data;
}

function clearinput() {
    input1.value = "";
}

function clearlastch(){
  input1.value = input1.value.slice(0,-1);
}


function calculate() {
    var expression = input1.value;
    var result = 0;           
    var operator = "+";            
    

    for (var i = 0; i < expression.length; i++) {
      var ch = expression[i]; 
  
     
      if ((ch >= "0" && ch <= "9") || ch === ".") {
        number = number + ch; 
      } else {
        
        var num = parseFloat(number); 
  
        if (operator === "+") {
          result = result + num; 
        } else if (operator === "-") {
          result = result - num; 
        } else if (operator === "*") {
          result = result * num; 
        } else if (operator === "/") {
          result = result / num; 
        }
  
        
        number = "";  
      }
    }
  
   
    var finalResult = parseFloat(number); 
    if (operator === "+") {
        result += finalResult;
    } else if (operator === "-") {
        result -= finalResult;
    } else if (operator === "*") {
        result *= finalResult;
    } else if (operator === "/") {
        result /= finalResult;
    }
    
    input1.value = result; 
}