let screen = document.getElementById("screen");
let list = ['deleteInput','reset','submit','op','dot'];
let allowedOps = ['+','-','/','*'];
let finalOperation=[];
let operand = [];
let result=0;
let calculated;


function getKey(e) 
{
    if (list.some(l => e.classList.contains(l))) 
    {
        
        if (e.classList.contains('op')) 
        {
            calculated = false;
            if (!allowedOps.some(op => finalOperation[finalOperation.length-1] == op)) 
            {
                operand=operand.join('');
                finalOperation.push(operand);
                operand = [];
                screen.value = '';
                operation(e);
            }
        } 
        else if(e.classList.contains('dot'))
        {
            calculated = false;
            if (!operand.includes('.')) 
            {
                screen.value += '.'; 
                operand.push('.');
            }
        } 
        else
        {
            option(e)
        }
    } 
    else 
    {
        calculated = false;
        screen.value += e.outerText; 
        operand.push(e.outerText);       
    }
}

function operation(e) 
{
    
    switch (e.outerText) 
    {
        case '+':
            finalOperation.push('+');
            break;
        case '-':
            finalOperation.push('-');
            break;
        case 'x':
            finalOperation.push('*');
            break;
        case '/':
            finalOperation.push('/');
            break;
        default:
            console.log("An unexpected error has occured");
            break;
    }
}

function option(e) 
{
    switch (e.outerText) 
    {
        case 'DEL':
            if (calculated === false)  
            {
                operand.pop();
                screen.value = screen.value.slice(0,-1);
            }
            break;

        case 'RESET':
            finalOperation=[];
            operand = [];
            result = 0;
            screen.value = '';
            break;

        case '=' :
            calculated = true;
            finalOperation.push(operand.join(''));
            operand = [];
            finalOperation = finalOperation.filter(e =>  e);
            result = calculate(finalOperation);
            screen.value = result;
            break;

        default:
            console.log("An unexpected error has occured");
            break;
    }    
}


function calculate(fulloperation) 
{
    let littleOp; 
    let result;
    let divOn0 = false;
    divOn0 = checkForDivOnZero(fulloperation);
    if (divOn0 === true) 
    {
        return "Math Error: Division by 0";
    }
    else
    {
        while (fulloperation.length>=3) 
        {
            littleOp = fulloperation.slice(0, 3);
            littleOp = littleOp.join('');
            result = eval(littleOp);
            for (let i = 0; i < 3; i++) 
            {
                fulloperation.shift();
            }
            fulloperation.unshift(result);   
        }
        return fulloperation;
    }
}

function checkForDivOnZero (fulloperation)
{
    for (let i = 0; i < fulloperation.length; i++) {
        const element = fulloperation[i];
        const nextElement = fulloperation[i+1];
        if (element == '/' && nextElement == '0')
            return true;
    }
    return false;
}