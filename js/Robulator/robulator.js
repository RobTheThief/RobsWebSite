"use strict";

var temp = [];
var wrkNums = [];
var inputArray = [];
var inputPopList = [];
var perc = 0;
var calcPercentage = 0;
var percentOfResult = 0;
var sumIndicator = 0;
var sum = 0;
var multClick = 0;
var divClick = 0;
var a = 0;
var perc = 0;
var str = 0;
var result = 0;
var loop = 0;
var multRDivCount = 0;
var savedInput = 0;
var mode = "algebra";
var percOperator = 0;
var deciCheck = 0;
document.getElementById("result").innerHTML = " = ";
document.getElementById("modeDisp").innerHTML="ALGEBRA MODE";
document.getElementById("modeExample").innerHTML="E.g. 1+(2*3) = 7";

var hitsEnter = document.getElementById("input"); // submits input when you hit enter
hitsEnter.addEventListener("keyup", function(event) {
 if (event.keyCode === 13) {
   submit1();
 }
});

//CHECKBOX
function calcMode(){
 // Get the checkbox
 var checkBox = document.getElementById("modeCheckbox");

 // If the checkbox is checked, display the output text
 if (checkBox.checked == true){
   mode = "arithmetic";
   document.getElementById("modeDisp").innerHTML="ROBULATOR MODE";
   document.getElementById("modeExample").innerHTML="E.g. (1+2)*3 = 9";
 } else {
   mode = "algebra";
   document.getElementById("modeDisp").innerHTML="ALGEBRA MODE"
   document.getElementById("modeExample").innerHTML="E.g. 1+(2*3) = 7";
 }
}
// NUMBER PAD
function num1(){
document.getElementById("input").value += 1; //adds "1" to the end of the input
}

function num2(){
document.getElementById("input").value += 2;
}

function num3(){
document.getElementById("input").value += 3;
}

function num4(){
document.getElementById("input").value += 4;
}

function num5(){
document.getElementById("input").value += 5;
}

function num6(){
document.getElementById("input").value += 6;
}

function num7(){
document.getElementById("input").value += 7;
}

function num8(){
document.getElementById("input").value += 8;
}

function num9(){
document.getElementById("input").value += 9;
}

function num0(){
document.getElementById("input").value += 0;
}

function minusNum(){
document.getElementById("input").value += "-"; //adds "-" to the end of the input
}

function plusNum(){
document.getElementById("input").value += "+"; //adds "+" to the end of the input
}

function multiplyIt(){
document.getElementById("input").value += "*"; //adds "*" to the end of the input
}

function divideIt(){
document.getElementById("input").value += "/"; //adds "/" to the end of the input
}

function decimal(){
document.getElementById("input").value += "."; //adds "." to the end of the input
}

function percentage(){
document.getElementById("input").value += "%";
}

function backButton(){
 str = document.getElementById("input").value; //input numbers become string str
 inputArray = str.split("");//enters contents of input str into input array
 inputArray.pop(inputArray.length - 1);
 str = inputArray.join("");
 document.getElementById("input").value = str;
}

function clear1(){
 inputArray.splice(0,inputArray.length); //empties input array
 wrkNums.splice(0,wrkNums.length);//empties working number array
 temp.splice(0,temp.length);//empties temp array
 document.getElementById("input").value = "";
 document.getElementById("result").innerHTML = " = ";
 sumIndicator = 0;
 multClick = 0;
 divClick = 0;
 a = 0;
 str = 0;
 result = 0;
 loop = 0;
 multRDivCount = 0;
}

function submit1(){
perc = 0;
inputArray.splice(0,inputArray.length); //empties input array
wrkNums.splice(0,wrkNums.length);//empties working number array
temp.splice(0,temp.length);//empties temp array
str = document.getElementById("input").value; //input numbers become string str
inputArray = str.split("");//enters contents of input str into input array

//PARSING INVALID CHARS OR COMBINATIONS
//Pre display input correction
for (let b = 0; b < inputArray.length; b++){

  if (isNaN(inputArray[b]) == true && inputArray[b] !== "-" && inputArray[b] !== "+" && inputArray[b] !== "." && inputArray[b] !== "*" && inputArray[b] !== "/" && inputArray[b] !== "%"){
    inputPopList.push(b);
  }

  if (inputArray[b] == "." && inputArray[b+1] == "."){
    inputPopList.push(b);
  }

  if (inputArray[b] == "%"){
    inputArray.splice(b+1,inputArray.length-1);
  }

}

for (let b = inputPopList.length -1; b >= 0; b--){
  inputArray.splice(inputPopList[b],1);
}

inputPopList.splice(0,inputPopList.length);
str = inputArray.join("");
document.getElementById("input").value = str;

savedInput = document.getElementById("input").value;//saves the input to put it back at the end

//Post display input correction
for (let b = 0; b < inputArray.length; b++){

    if (inputArray[b] == "." && isNaN(inputArray[b-1]) == true){
      if(inputArray[b-1] == "+" || inputArray[b-1] == "-" || inputArray[b-1] == "*" || inputArray[b-1] == "/"){
        inputArray.splice(b,0,"0");
      }
    }

    if (inputArray[b] == "%" && isNaN(inputArray[b-1]) == true && inputArray[b-1] !== "*" && inputArray[b-1] !== "/"){
      document.getElementById("result").innerHTML = "PLEASE CHECK INPUT";
      return;
    }
    if (inputArray[b] == "*" || inputArray[b] == "/"){
      if(inputArray[b+1] == "*" || inputArray[b+1] == "/" || inputArray[b+1] == "%" || b == inputArray.length - 1){
        document.getElementById("result").innerHTML = "PLEASE CHECK INPUT";
        return;
      }
    }
    if (inputArray[b] == "-" || inputArray[b] == "+"){
      if(inputArray[b+1] == "*" || inputArray[b+1] == "/"){
        document.getElementById("result").innerHTML = "PLEASE CHECK INPUT";
        return;
      }
    }
} //end of parsing inputArray for loop

str = inputArray.join("");
document.getElementById("input").value = str;

//savedInput = document.getElementById("input").value;//saves the input to put it back at the end

//PERCENTAGE CALCULATION PREP
if(inputArray[inputArray.length - 1] == "%"){
  calcPercentage = 1;
  inputArray.pop(inputArray.length - 1);
  for(var b = inputArray.length - 1; b >= 0; --b){
    if (isNaN(inputArray[b]) == false || inputArray[b] == "."){
      temp.unshift(inputArray[b]);
      inputArray.pop(b);
    }else{
      perc = temp.join("");
      percOperator = inputArray[b];
      inputArray.pop(b);
      str = inputArray.join("");
      document.getElementById("input").value = str;
      b = -1;
    }
  }
}

multRDivCount = 0;
for(var b = 0; b < inputArray.length; ++b){ // counts how many multiplications or divisions there are to do
  if(inputArray[b] == "*" || inputArray[b] == "/"){
  multRDivCount++;
  }
}

while (multRDivCount >= 0){
   multClick = 0;
   divClick = 0;
   window.sumIndicator = 0;
   inputArray.splice(0,inputArray.length); //empties display array
   wrkNums.splice(0,wrkNums.length);//empties number array
   temp.splice(0,temp.length);//empties temp array
   str = document.getElementById("input").value; //input numbers become string str
   inputArray = str.split("");//enters contents of input str into array



   for (let b = 0; b < inputArray.length; b++){ //loops through the input array
             if (isNaN(inputArray[b]) == false && b == 0){ //checks if the first char is + or - to avoid this being discounted. This is why sumIndicator is set to 0 initially
               window.sumIndicator++;
             }

             if (inputArray[b] == "-" || inputArray[b] == "+"){
               window.sumIndicator++;
             }

             if ( inputArray[b] == "*"){
               a = temp.join(""); //a = temp array as string
               wrkNums.push(a);//push a as one item into array of number we calculate from
               temp.splice(0,temp.length);// empties temp array
               wrkNums.push("*");//pushes "*" to working array
               multClick = 1;
               window.sumIndicator = 0; //used to fix having a symbol after multiplication or division. This also means that there must be a "+" even if not input by user

                 if (inputArray[b+1] >= 0 && inputArray[b+1] !== "-" && inputArray[b+1] !== "+"){ // add "+" to input before num after "*" as sumIndicator was zeroed previously to accomodate having a symbol after multiplication or division.
                   inputArray.splice(b+1,0,"+");
                 }
              }

             if ( inputArray[b] == "/"){
               a = temp.join(""); //a = temp array as string
               wrkNums.push(a);//push a as one item into array of number we calculate from
               temp.splice(0,temp.length);// empties temp array
               wrkNums.push("/");//pushes "/" to working array
               divClick = 1;
               window.sumIndicator = 0; //used to fix parsing error caused by having a symbol after multiplication or division. This also means that there must be a "+" even if not input by user

               if (inputArray[b+1] >= 0 && inputArray[b+1] !== "-" && inputArray[b+1] !== "+"){ // add "+" to input before the num after "/" as sumIndicator was zeroed previously to accomodate having a symbol after multiplication or division.
                 inputArray.splice(b+1,0,"+");
               }
              }

             if (window.sumIndicator == 2){
               a = temp.join(""); //a = temp array as string
               wrkNums.push(a);//push a as one item into array of number we calculate from
               temp.splice(0,temp.length);// empties temp array
               window.sumIndicator = 1;
              }

             if (isNaN(inputArray[b]) == false || inputArray[b] == "-" || inputArray[b] == "+" || inputArray[b] == "."){ // if it IS a number, - or + we push it from the input array to the temp array
               temp.push(inputArray[b]);
              }

             if (wrkNums.indexOf("*") > wrkNums.indexOf("/") && divClick == 1){ //checks if there is multiplication after division and prevents the multiplication happening first
               multClick = 0;
              }


             if (inputArray.length - 1 == b && multClick == 1 && loop == 0){
/****ALGEBRAIC MULTIPLICATION******/
               if(mode == "algebra"){
                   a = temp.join(""); // join temp array as sting a
                   wrkNums.push(a);//push this as one item in array
                   temp.splice(0,temp.length);// empties temp array
                   result=+ parseFloat(wrkNums[wrkNums.indexOf("*")-1]) * parseFloat(wrkNums[wrkNums.indexOf("*")+1]);//divides the item in the array after the "*" with the item before "*"

                   if (result >= 0){ //if the result is positive or "0" we add a + symbol so that the input string is sorted correctly
                     result = "+"+result;
                   }

                   b = 0;//resets the for loop
                   loop++;//adds 1 to the loop counter to prevent it repeating next time
                   wrkNums.splice(wrkNums.indexOf("*")-1,3,result);//replaced the multiplied section off the array with the result of the multiplication
                   document.getElementById("input").value=wrkNums.join("");// inserts the working array as a string into the input box
                   str = document.getElementById("input").value; //input numbers become string str
                   inputArray = str.split("");//enters contents of str into input array
                   }else{
/*****ARITHMETIC MULTIPLICATION******/
                   a = temp.join(""); // join temp array as sting a
                   wrkNums.push(a);//push this as one item in array
                   temp.splice(0,temp.length);// empties temp array
                   for (var i = 0, sum = 0; i < wrkNums.indexOf("*"); sum += parseFloat(wrkNums[i++])){} //adds up all the nmbers as far as "*"
                   result=parseFloat(sum) * parseFloat(wrkNums[wrkNums.indexOf("*")+1]);//multiplies the above sum with the number after "*"
                   wrkNums.splice(0,(wrkNums.indexOf("*")+1));//empties number array as far as "*"
                   wrkNums.splice(0,0,sum);//replaces it with the sum
                   wrkNums.splice(1,0,"*");//puts the "*" symbol back in after the sum
                   b = 0;//resets the for loop
                   loop++;//adds 1 to the loop counter to prevent it repeating next time
                   wrkNums.splice(0,3,result);//to accomodate more than one multiplications
                   document.getElementById("input").value=wrkNums.join("");// inserts the working array as a string into the input box
                   str = document.getElementById("input").value; //input numbers become string str
                   inputArray = str.split("");//enters contents of str into input array
                 }
              }

              if (inputArray.length - 1 == b && divClick == 1 && loop == 0){
/**ALGEBRAIC DIVISION***/
                if(mode == "algebra"){
                    a = temp.join(""); // join temp array as sting a
                    wrkNums.push(a);//push this as one item in array
                    temp.splice(0,temp.length);// empties temp array
                    result=+ parseFloat(wrkNums[wrkNums.indexOf("/")-1]) / parseFloat(wrkNums[wrkNums.indexOf("/")+1]);//divides the item in the array after the "*" with the item before "*"

                    if (result >= 0){ //if the result is positive or "0" we add a + symbol so that the input string is sorted correctly
                      result = "+"+result;
                    }
                    b = 0;//resets the for loop
                    loop++;//adds 1 to the loop counter to prevent it repeating next time
                    wrkNums.splice(wrkNums.indexOf("/")-1,3,result);//replaced the multiplied section off the array with the result of the multiplication
                    document.getElementById("input").value=wrkNums.join("");// inserts the working array as a string into the input box
                    str = document.getElementById("input").value; //input numbers become string str
                    inputArray = str.split("");//enters contents of str into input array
                    }else{
/******ARITHMETIC DVISION*****/
                    a = temp.join(""); // join temp array as sting a
                    wrkNums.push(a);//push this as one item in array
                    temp.splice(0,temp.length);// empties temp array
                    for (var i = 0, sum = 0; i < wrkNums.indexOf("/"); sum += parseFloat(wrkNums[i++])){} //adds up all the nmbers as far as "/"
                    result=parseFloat(sum) / parseFloat(wrkNums[wrkNums.indexOf("/")+1]);//multiplies the above sum with the number after "/"
                    wrkNums.splice(0,(wrkNums.indexOf("/")+1));//empties number array as far as "/"
                    wrkNums.splice(0,0,sum);//replaces it wth the sum
                    wrkNums.splice(1,0,"/");//puts the "/" symbol back in after the sum
                    b = 0;//resets the for loop
                    loop++;//adds 1 to the loop counter to prevent it repeating next time
                    wrkNums.splice(0,3,result);//to accomodate more than one multiplications or divsions
                    document.getElementById("input").value=wrkNums.join("");// inserts the working array as a string into the input box
                    str = document.getElementById("input").value; //input numbers become string str
                    inputArray = str.split("");//enters contents of str into input array
                  }
             }

             if (inputArray.length - 1 == b && loop == 1){//resets loop counter to allow further multiplication. Is not run immediattly after multiplication code as "b" is reset to "0"
               loop = 0;
             }

           } // for loop end

               multRDivCount--; //reduces while loop counter

   } //while loop end



/****SUMMING****/
  if (multClick == 0 && divClick == 0){//if there is no multiplication or division we can just sum up
    a = temp.join("");// join temp array as sting a
    wrkNums.push(a);//pushes it to the working array
    for (var i = 0, sum = 0; i < wrkNums.length; sum += parseFloat(wrkNums[i++])){}//summs up the contents of the working array
    document.getElementById("result").innerHTML=" = "+ parseFloat(sum);//displays the result
    result = parseFloat(sum);
    }

  document.getElementById("input").value = savedInput;//puts the original input back

  if (calcPercentage == 1){
      perc = perc / 100;
      percentOfResult = result * perc;
      if(percOperator == "*"){
        result = result * perc;
      }
      if(percOperator == "/"){
        result = result / perc;
      }
      if(percOperator == "-"){
        result = result - percentOfResult;
      }
      if(percOperator == "+"){
        result = result + percentOfResult;
      }
    document.getElementById("result").innerHTML = "= "+result;
    calcPercentage = 0;
  }
  if (isNaN(result)){
  document.getElementById("result").innerHTML = "PLEASE CHECK INPUT";
  return;
  }
}// submit function end
