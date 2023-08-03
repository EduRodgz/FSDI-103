function calculate(){
    let num1 = Number(prompt("Please enter the 1st number "));
    let num2 = Number(prompt("Please enter the 2nd number "));
    let option = prompt("Please enter the option + - * / ");

    if(option == "+"){
        let sum = num1 + num2;
        document.getElementById("result").innerHTML = `<p> ${num1} + ${num2} = ${sum} </p>`;                       
    }
    else if(option == "-"){
        let subtraction = num1 - num2;
        document.getElementById("result").innerHTML = `<p> ${num1} - ${num2} = ${subtraction} </p>`;                       
    }
    else if(option == "*"){
        let multiplication = num1 * num2;
        document.getElementById("result").innerHTML = `<p> ${num1} * ${num2} = ${multiplication} </p>`;                       
    }
    else if(option == "/"){
        if (num2 == 0){
            console.log("You cannot divide by zero.");
        }
        let division = num1 / num2;
        document.getElementById("result").innerHTML = `<p> ${num1} / ${num2} = ${division} </p>`;                       
    }
    else{
        console.log("Symbol is not valid");
    }


}