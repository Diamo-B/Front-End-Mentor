let screen = document.getElementById("screen");
/* let key =  document.getElementById('key7');
key.addEventListener("click",eventhandeler);

function eventhandeler() 
{
    console.log(key.outerText);
    screen.value+= "7";
} */

let result;
let operands_operations = [];
let final = [];
function getKey(e) 
{
    

    console.log(e.outerText);
    const list = ['deleteInput', 'reset', 'submit'];
    if (list.some(className => e.classList.contains(className))) 
    {
        option(e);
    }
    else if (e.classList.contains('op')) 
    {
        final.push(operands_operations.join(''));
        operands_operations = [];
        if (e.outerText == "x") 
        {
            final.push('*');
        }
        else
        {
            final.push(e.outerText);
        }
        console.log(final);
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
        // remove from the operands_operations list
        break;

        case 'RESET':
            screen.value = '';
            operands_operations = [];
            final=[];
            return;
        
        case '=' :
            final.push(operands_operations.join(''));
            console.log(final);
            result = eval(final.join(''));
            screen.value = result;
            break;

        default:
            console.log('An unexpected error has occured');
            break;
    }
}
        