let screen = document.getElementById("screen");
let result;
let operands_operations = [];
let final = [];
function getKey(e) 
{
    const list = ['deleteInput', 'reset', 'submit'];
    if (list.some(className => e.classList.contains(className))) 
    {
        option(e);
    }
    else if (e.classList.contains('op')) 
    {
        final.push(operands_operations.join(''));
        if (e.outerText == "x") 
        {
            final.push('*');
        }
        else
        {
            final.push(e.outerText);
        }
        operands_operations=[];
        screen.value='';
    }
    else
    {
        operands_operations.push(e.outerText);
        screen.value+=e.outerText; 
    }
    
}


function option(e) 
{
    switch (e.outerText) 
    {
        case 'DEL':
            screen.value =screen.value.slice(0, -1);
            //remove the values from operator_operands
            break;

        case 'RESET':
            screen.value = '';
            operands_operations = [];
            final=[];
            return;
        
        case '=' :
            console.log(operands_operations.join());
            final.push(operands_operations.join());
            operands_operations = [];
            console.log(final);
            break;

        default:
            console.log('An unexpected error has occured');
            break;
    }
}
        