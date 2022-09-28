//TASK 1

var x= prompt("Завдання 1. Введіть число =","");
if(x>0){
    x++;
}
else if(x<0){
    x-=2;
}
else{
    x=10;
}
console.log("Число = ",x);


//TASK 2

var y= prompt("Завдання 2. Введіть число =","");
if(y>0){
    if(y%2==0){
        console.log("додатне парне число");
    }
    else{
        console.log("додатне непарне число");
    }
}
else if(y<0){
    if(y%2==0){
        console.log("від’ємне парне число");
    }
    else{
        console.log("від’ємне непарне число");  
    }
}
else{
    console.log("нульове число");
}


//TASK 3

var a1= prompt("Завдання 3. Введіть число =","");
var a2= prompt("Завдання 3. Введіть число =","");
var a3= prompt("Завдання 3. Введіть число =","");
var a4= prompt("Завдання 3. Введіть число =","");

if(a1==a2&&a1==a3){
    console.log(a4);
}
else if(a4!=a3){
    console.log(a3);
}
else if(a4!=a2){
    console.log(a2);
}
else{
    console.log(a1);
}


//TASK 4

var k= prompt("Завдання 4. Введіть число =","");

if(k<1 || k>5){
    console.log("помилка");
}
else{
    if(k==1){
        console.log("погано");
    }
    else if(k==2){
        console.log("незадовільно");
    }
    else if(k==3){
        console.log("задовільно");
    }
    else if (k==4){
        console.log("добре");
    }
    else{
        console.log("відмінно");
    }
}