// let start = document.createElement("dev") ;

// start.setAttribute("class" , "calc")

// let xyz = document.createElement("div") ;

// xyz.setAttribute("class" , "top-container") ;

// let idk = document.createElement("div") ;

// idk.setAttribute("class" , "clock") ;

// let www = document.createElement("span") ;

// www.setAttribute("class" , "hour" )

// let zzz = document.createElement("span") ;

// zzz.setAttribute("class" , "minute") ; 

// let an = document.createElement("dev") ;

// an.setAttribute("class" , "status") ;

// let image = document.createElement("img") ;
// image.src = './status.png' ;

// let vs = document.createElement("dev") ;

// vs.setAttribute("class" , "value") ;

// vs.innerText = "0" ;

// let btn = document.createElement("div") ;

// btn.setAttribute("class" , "button-container") ;

// let ac = document.createElement("dev") ;

// ac.setAttribute("class" , "button function ac") ;

// ac.innerText = "AC" ;

// let pm = document.createElement("dev") ;

// pm.setAttribute("class" , "button function pm") ;

// pm.innerText = "±" ;

// let percent = document.createElement("dev") ;

// percent.setAttribute("class" , "button function percent") ;

// percent.innerText = "%" ;


// let div = document.createElement("dev") ;

// div.setAttribute("class" , "button function division") ;

// div.innerText = "÷" ;

// let seven = document.createElement("dev") ;

// seven.setAttribute("class" , "button number-7") ;

// seven.innerText = "7" ;

// let eight = document.createElement("dev") ;

// eight.setAttribute("class" , "button number-8") ;

// eight.innerText = "8" ; 

// let nine = document.createElement("dev") ;

// nine.setAttribute("class" , "button number-9") ;

// nine.innerText = "9" ; 

// let multi = document.createElement("dev") ;

// multi.setAttribute("class" , "button operator multiplication") ;

// multi.innerText = "×" ; 

// let four = document.createElement("dev") ;

// four.setAttribute("class" , "button number-4") ;

// four.innerText = "4" ; 

// let five = document.createElement("dev") ;

// five.setAttribute("class" , "button number-5") ;

// nine.innerText = "5" ; 

// let six = document.createElement("dev") ;

// six.setAttribute("class" , "button number-6") ;

// six.innerText = "6" ; 

// let subb = document.createElement("dev") ;

// subb.setAttribute("class" , "button operator subtraction") ;

// subb.innerText = "-" ; 

// let one = document.createElement("dev") ;

// one.setAttribute("class" , "button number-1") ;

// one.innerText = "1" ;

// let two = document.createElement("dev") ;

// two.setAttribute("class" , "button number-2") ;

// two.innerText = "2" ;

// let three = document.createElement("dev") ;

// three.setAttribute("class" , "button number-3") ;

// three.innerText = "3" ;

// let add = document.createElement("dev") ;

// add.setAttribute("class" , "button operator addition") ;

// add.innerText = "+" ; 

// let zero = document.createElement("dev") ;

// zero.setAttribute("class" , "button number-0") ;

// zero.innerText = "0" ;

// let dec = document.createElement("dev") ;

// dec.setAttribute("class" , "button decimal") ;

// dec.innerText = "." ; 

// let brb = document.createElement("dev") ;

// brb.setAttribute("class" , "button operator equal") ;

// brb.innerText = "=" ; 


// let bottom = document.createElement("dev") ;

// bottom.setAttribute("class" , "bottom") ; 


// btn.append(ac) ;
// btn.append(pm) ;
// btn.append(percent) ;
// btn.append(div) ;
// btn.append(seven) ;
// btn.append(eight) ;
// btn.append(nine) ;
// btn.append(multi) ;
// btn.append(four) ;
// btn.append(five) ;
// btn.append(six) ;
// btn.append(subb) ;
// btn.append(one) ;
// btn.append(two) ;
// btn.append(three) ;
// btn.append(add) ;
// btn.append(zero) ;
// btn.append(dec) ;
// btn.append(brb) ;


// vs.append(btn) ;
// vs.append(bottom) ;

// an.append(image) ;

// idk.append(www) ;
// idk.append(zzz) ;

// xyz.append(idk) ;
// xyz.append(an) ;

// start.append(xyz) ;
// start.append(vs) ;

// document.body.append(start)






const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const value = document.querySelector('.value');

const ac = document.querySelector('.ac');
const pm = document.querySelector('.pm');
const percent = document.querySelector('.percent');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');

const decimal = document.querySelector('.decimal');
const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');



number0.addEventListener('click', function(){

    value.innerText += number0.innerText;
}) ;

number1.addEventListener('click', function(){

    value.innerText += number1.innerText;
}) ;

number2.addEventListener('click', function(){

    value.innerText += number2.innerText;
}) ;

number3.addEventListener('click', function(){

    value.innerText += number3.innerText;
}) ;

number4.addEventListener('click', function(){

    value.innerText += number4.innerText;
}) ;

number5.addEventListener('click', function(){

    value.innerText += number5.innerText;
}) ;

number6.addEventListener('click', function(){

    value.innerText += number6.innerText;
}) ;

number7.addEventListener('click', function(){

    value.innerText += number7.innerText;
}) ;

number8.addEventListener('click', function(){

    value.innerText += number8.innerText;
}) ;

number9.addEventListener('click', function(){

    value.innerText += number9.innerText;
}) ;



ac.addEventListener('click', function(){
    
    value.innerText='  '
    
}) ;




