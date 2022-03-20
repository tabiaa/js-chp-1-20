/*question 1*/
var a=parseInt(prompt("enter any number a"));
var b=parseInt(prompt("enter any number b"));
var c=a+b;
document.write("sum of "+a+" and "+b+" is "+c+"<br>");

/*question 2*/
var c=a-b;
document.write("subtraction of "+a+" and "+b+" is "+c+"<br>");
var c=a*b;
document.write("multiplication of "+a+" and "+b+" is "+c+"<br>");
var c=a/b;
document.write("division of "+a+" and "+b+" is "+c+"<br>");
var c=a%b;
document.write("modulus of "+a+" and "+b+" is "+c+"<br>");

/*question 3*/
var a;
document.write("<br><br><br>"+"value after variable declaration is:??"+"<br>");
a=5;
document.write("initial value is "+a+"<br>");
a++;
document.write("value after increment is "+a+"<br>");
a=a+7;
document.write("value after adding 7 is "+a+"<br>");
--a;
document.write("value after decrement is "+a+"<br>");
a=a%3;
document.write("remainder is "+a+"<br>");

/*question 4*/
var ticket1=600;
document.write("<br><br><br>"+"Total cost to buy 5 tickets to a movie is "+ticket1*5+"PKR");

/*question 5*/
var table=parseInt(prompt("number of a table you wanna print"));
document.write("<br><br><br>"+"table of "+table+"<br>");
for(var i=1;i<=10;i++)
{
 document.write(table+"x"+i+"="+table*i+"<br>");
}

/*question 6*/
var celsiusT=parseInt(28);
var fahrT=(celsiusT*9/5)+32;
var fahrenheitT=parseInt(83);
var celsT=(fahrenheitT-32)*5/9;
document.write("<br><br><br>"+celsiusT+"C"+" "+"is "+fahrT+"F"+"<br>");
document.write(fahrenheitT+"F"+" "+"is "+celsT+"C"+"<br>");

/*question 7*/
var item1=650,item2=100,quantity1=3,quantity2=7;
document.write("<br><br><br>"+"<b>Shopping Cart</b>"+"<br><br><br>");
document.write("price of item 1 is "+item1+"<br> quantity of item 1 is "+quantity1+"<br> price of item 2 is "+item2+"<br> quantity of item 2 is "+quantity2);

/*question 8*/ 
var total=850, obt=745, per=(obt*100)/total;
document.write("<br><br><br>"+"<b>Marks sheet</b>"+"<br><br><br>");
document.write("total marks="+total+"<br>");
document.write("obtained marks="+obt+"<br>");
document.write("percentage="+per+"%<br>");

/*question 9*/ 
var us=10,saudi=25, conUs=us*104.80,conSaudi=28*saudi,totalrs=conSaudi+conUs;
document.write("<br><br><br>"+"<b>Currency in PKR </b>"+"<br><br><br>"+"total currency in PKR="+totalrs+"<br>");

/*question 10*/
var a=19;
document.write("<br><br><br> "+a+"<br>") ;
a=a+5;
document.write("<br><br><br> "+a+"<br>") ;
a=a*10;
document.write("<br><br><br> "+a+"<br>") ;
a=a/2;
document.write("<br><br><br> "+a+"<br>") ;

/*question 11*/
var cYear=parseInt(prompt("enter current year")),bYear=parseInt(prompt("birth year"));
var age=cYear-bYear;
document.write("<br><br><br>"+"<b>age calculato</b>"+"<br><br><br>");
document.write("current year="+cYear+"<br>");
document.write("birth year="+bYear+"<br>");
document.write("age="+age+"<br>");

/*question 12*/
var radius=26,circumference=2*3.142*radius,area=3.142*radius*radius;
document.write("<br><br><br>"+"<b>radius of a circle</b>"+"<br><br><br>");
document.write("radius of a circle="+radius+"<br>");
document.write("the circumference="+circumference+"<br>");
document.write("area="+area+"<br>");

/*question 13*/
var snack=ramen,myage=19,maxAge=80,estAmount=2,lifetime=(80-19)*2;
document.write("<br><br><br>"+"you will need "+lifetime+" to last you until the ripe old age of "+maxAge);

