const bill = document.getElementById('billAmount');
let billAmount;
const billHandeler = function(e) {
  billAmount = e.target.value;
}
bill.addEventListener('input', billHandeler);


function percentValue(e) 
{
    console.log("hello");
    console.log(e.value);
}