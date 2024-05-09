 
/*
 function addToDisplay(value){
    document.getElementById("display").value
    +=value;
}

function calculate(){
    let result=document.getElementById("display").value;
    let output=eval(result);
    document.getElementById("display").value=output;
}

function clearValue(){
    document.getElementById("display").value="";
}

function del(){
    document.getElementById("display").value="";
}

*/


/*
function myfunction(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let calculate=document.getElementById('calculate').value;

    if(calculate==='+'){

        let num1= parseInt(document.getElementById('num1').value);
        let num2= parseInt(document.getElementById('num2').value);
        document.getElementById('result').value=num1+num2;
    }
    */

   /* [ADDING TWO INPUTS]

 var box1=document.getElementById("num1")
 var box2=document.getElementById("num2")
 var result=document.getElementById("result")

     function output(){

         var box1value=Number(box1.value)
         var box2value=Number(box2.value)

         var total=box1value+box2value
         result.textContent=total
    }
   
    */
  

     /* [WEB PAGE]
    function big(img){
        document.querySelector('.big').src=
        img;
    }

    function path(color){
        const path=document.querySelector('.path');
        path.style.background=color;
    }

    function bg(background){
        const bg=document.querySelector('.container');
        bg.style.background=background;
    }

    function changeText(newText){
        document.querySelector('#displayText').textContent=newText;
    }
    */


    function updateClock(){
        var currentDate=new Date();
        var hours=currentDate.getHours();
        var minutes=currentDate.getMinutes();
        var seconds=currentDate.getSeconds();
        var merideim='AM';

     if(hours>12){
        hours=hours-12;
        merideim='PM';
     }  
     
     minutes=(minutes<10?"0":"")+minutes;
     seconds=(seconds<10?"0":"")+seconds;
     
     var clock=document.querySelector(".clock");
     clock.textContent=hours+":"+minutes+":"+seconds+""+merideim;
    }
 
    setInterval(updateClock,1000);
    updateClock();

    

/*  [CEL TO FARH CONVERTER]
    function convert(){
        var cmval=Number(document.getElementById("input").value);
        var inval=cmval*9/5+32;
        var result=document.getElementById("result");
        result.innerHTML=inval.toFixed(3)+"fahrenheit";
    }
*/

/*
    let setDate = new Date();
    console.log(setDate);

    setDate.setDate(26);
    console.log(setDate);
    
    setDate.setHours(7);
    console.log(setDate);

    setDate.setMinutes(7);
    console.log(setDate);

    setDate.setSeconds(7);
    console.log(setDate);

    */
