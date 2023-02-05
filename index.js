
function table()
{
  var num1=document.getElementById("firstnum").value;
  var num2=document.getElementById("secnum").value
  var operate=document.getElementById("oper").value;
  x=parseInt(num1);
  y=parseInt(num2);
  oper=String(operate);
  
  if(oper=='+')
    {
     var result=(x+y); 
 document.getElementById("result").innerHTML="SUM = "+result;
    }
  if(oper=='-')
    {
     var result=(x-y); 
       document.getElementById("result").innerHTML="DIFFERENCE = "+result;
    }
  if(oper=='/')
    {
     var result=(x/y); 
 document.getElementById("result").innerHTML="DIVISION = "+result;
    }
  if(oper=='%')
    {
     var result=(x%y); 
 document.getElementById("result").innerHTML="MODULUS = "+result;
    }
   if(oper=='*')
    {
     var result=(x*y); 
 document.getElementById("result").innerHTML="PRODUCT = "+result;
    }
 
}