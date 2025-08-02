function convert(){
  let degree=parseFloat(document.getElementById("degree").value);
  let type = document.getElementById("type").value;
  let result;
  if(type==="fahrenheit"){
    result=(degree*9/5)+32;
  }
  else{
    result=(degree-32)*5/9;
  }
  document.getElementById("result").value=result.toFixed(2);
  let container =document.querySelector(".container");
  if(result>=40){
    container.style.backgroundColor="#ec540dff";

  }
  else if(result>=20){
    container.style.backgroundColor="#f0a417ff";
  }
  else if(result>=10){
     container.style.backgroundColor="#66b3ff";
  }
  else{
     container.style.backgroundColor="#bae5ebff";
  }
}