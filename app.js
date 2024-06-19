

function calc(){
        let num1="";
        let num2="";
        let operator=document.getElementById("operaters").value;
        num1=new Number(document.getElementById("num 1").value);
        num2=new Number(document.getElementById("num 2").value); 
        let lblOutput=document.getElementById("output");
        let answer;
       
        switch(operator){
            case "+":answer=num1+num2;break;
            case "-":answer=num1-num2;break;
            case "*":answer=num1*num2;break;
            case "/":answer=num1/num2;break;
           
       
        }
        lblOutput.innerHTML=answer;


    //     num1=new Number(document.getElementById("num 1").value);
    //      num2=new Number(document.getElementById("num 2").value); 
    //     let lblOutput=document.getElementById("output1");
    //     let answer=num1+num2;
    
    //    lblOutput.innerHTML=answer;
 }

//  function calcmin(){
//     let num1="";
//     let num2="";

//      num1=new Number(document.getElementById("num 3").value);
//      num2=new Number(document.getElementById("num 4").value);
//     let lblOutput=document.getElementById("output2");
//     let answer=num1-num2;

//    lblOutput.innerHTML=answer;
// }

// function calcmul(){
//     let num1="";
//     let num2="";

//      num1=new Number(document.getElementById("num 5").value);
//      num2=new Number(document.getElementById("num 6").value);
//     let lblOutput=document.getElementById("output3");
//     let answer=num1*num2;

//    lblOutput.innerHTML=answer;
// }

// function calcdiv(){
//     let num1="";
//     let num2="";

//      num1=new Number(document.getElementById("num 7").value);
//      num2=new Number(document.getElementById("num 8").value);
//     let lblOutput=document.getElementById("output4");
//     let answer=num1/num2;

//    lblOutput.innerHTML=answer;
// }