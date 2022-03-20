/*question 1*/
var city=prompt("enter city");
if(city==="karachi"){
    document.write("welcome to the city of lights");
}
/*question 2*/
var gender=prompt("enter gender");
if(gender==="male"){
alert("<br><br><br> welcome sir");
}
if(gender==="female"){
    document.write("<br><br><br> welcome ma'am");
}
/*question 3*/
var color=prompt("enter color of traffic light");
if(color==="red"){
    document.write("<br><br><br> Must stop");
}
else if(color==="yellow"){
    document.write("<br> ready to move");
}
else if(color==="green"){
    document.write("<br> move now");
}
/*question 4*/
var fuel=parseFloat(prompt("enter fuel"));
if(fuel<"0.25"){
    document.write("<br><br><br>need a refill");
}
else{
    document.write("<br><br><br>fuel is okay");
}

/*question 5a*/
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
/*question 5b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

/*question 5c*/

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

/*question 5d*/
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
/*question 5f*/

if("car" < "cat"){
    alert("car is smaller than cat");
    }

 /*question 6*/
 document.write("<br><br><br>"+"<b>marksheet</b>"+"<br><br><br>");
 var totalm=parseInt(prompt("ente total marks")),obtm=parseInt(prompt("ente obtain marks")),per=(obtm*100)/totalm,grade;
 document.write("<br>total marks="+totalm);
 document.write("<br>obtain marks="+obtm);
 document.write("<br>per="+per);
 if(per>"80"||per==="80"){
    document.write("<br>grade=A-one");
    document.write("<br>remarks:excellent");
 }
 else if(per>"70"||per==="70"){
    document.write("<br>grade=A");
    document.write("<br>remarks:good");
 }
 else if(per>"60"||per==="60"){
    document.write("<br>grade=B");
    document.write("<br>remarks:you need to improve");
 }
 else if(per<"60"){
    document.write("<br>grade=fail");
    document.write("<br>remarks:sorry");
 }
/*question 7*/
 var y = parseInt(prompt("guess number")),gNum=19;
 if (y===gNum){
document.write("<br><br><br> bingo! correct answer.")
 }
 else if(y===gNum-1)
{
    document.write("<br><br><br> close enough.")
};

/*question 8*/
var x=parseInt(prompt("enter random no"));
if (x%3===0){
document.write("<br><br>its divisible by 3")
}
/*question 9*/
if (x%2===0){
    document.write("<br><br>the number is even")
    }
    else{
            document.write("<br><br>the number is odd")
    }

    /*question 10*/
    var t=parseFloat(prompt("eneter temperature"));
    if(t>"40"){
        document.write("<br><br>its too hot outside");
    }
    else if(t>"30"){
        document.write("<br><br>weather is normal");
    }
    else if(t>"20"){
        document.write("<br><br>weather is cool");
    }
    else if(t>"10"){
        document.write("<br><br>OMG todays weather is so cool");
    }

 /*question 11*/
 var num1=parseInt(prompt("eneter num1")),num2=parseInt(prompt("eneter num2")),op=prompt("eneter operator");
 if(op==="+"){
     document.write("<br><br> a+b=" + (num1+num2));
 }
 else if(op==="-"){
    document.write("<br><br> a-b=" + num1-num2);
}
else if(op==="*"){
    document.write("<br><br> a*b=" + num1*num2);
}
else if(op==="/"){
    document.write("<br><br> a/b=" + num1/num2);
}
else if(op==="%"){
    document.write("<br><br> a%b=" + num1%num2);
}
