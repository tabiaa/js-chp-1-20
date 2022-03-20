/*question 1*/
var a=10;
document.write("result<br>"+"the value of a is:"+a);
document.write("<br>...............................<br><br>");
++a;
document.write("the value of ++a is:<br>"+a);
document.write("now the value of a is:<br>"+a+"<br><br>");
a++;
document.write("the value of a++ is:<br>"+a);
document.write("now the value of a is:<br>"+a+"<br><br>");
--a;
document.write("the value of --a is:<br>"+a);
document.write("now the value of a is:<br>"+a+"<br><br>");
a--;
document.write("the value of a-- is:<br>"+a);
document.write("now the value of a is:<br>"+a+"<br><br>");

/*question 2*/
var a=2,b=1;
var result=--a - --b + ++b + b--;
document.write(a+"<br>"+b+"<br>"+result);

/*question 3*/
var name=prompt("enter name");
alert("welcome "+ name);

/*question 5*/
var num=prompt("enter number"),i;
if (num ==""){
    for(i=1;i<=10;i++){
        document.write("<br><br>"+5+"x"+i+"="+5*i+"<br>");
    }
}
else{
    num1=parseInt(num);
    for(i=1;i<=10;i++){
        document.write(num1+"x"+i+"="+num1*i+"<br>");
    }
}


