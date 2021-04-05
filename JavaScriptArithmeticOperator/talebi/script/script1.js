function add(){
    var operand1 = Number(document.getElementById("value1").value);
    var operand2 = Number(document.getElementById("value2").value);
    var result = operand1+operand2;
    document.getElementById("screen").value = operand1 + ' + ' + operand2 +' = '+ result;
}
function multiply(){
  var operand1 = Number(document.getElementById("value1").value);
  var operand2 = Number(document.getElementById("value2").value);
  result = operand1*operand2;
  document.getElementById("screen").value = operand1 + " x " + operand2 +' = '+ result;

}
function divide(){
    var operand1 = Number(document.getElementById("value1").value);
    var operand2 = Number(document.getElementById("value2").value);
    result = operand1/operand2;
    document.getElementById("screen").value = operand1 + " / " + operand2 +' = '+ result;
  
}
// function clear(){
    // document.getElementById("value1").value='';
    // document.getElementById("value2").value='';
    // document.getElementById("screen").value='';
    // }