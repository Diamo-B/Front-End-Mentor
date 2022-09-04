let billAmount=0;
let tipAmount=0;
let pplNumber=0;

let tip = document.getElementById('tip');
let total = document.getElementById("total");


let bill = document.getElementById('billAmount');

const billHandeler = function(e) {
  billAmount = e.target.value;
  calculate();
}
bill.addEventListener('input', billHandeler);


let tipsButtons = document.querySelectorAll(".percent");

function offButtons() 
{
  for(let i=0; i<tipsButtons.length; i++)
  {
    tipsButtons[i].classList.remove('clicked');
    tipsButtons[i].classList.add("off");
  }
}


for(let i=0; i<tipsButtons.length; i++)
{
  tipsButtons[i].addEventListener('click', function() {
    offButtons();
    this.classList.add("clicked");
    this.classList.remove("off");
    tipAmount = this.value;
    calculate();
  });
}

let customTip = document.getElementById('customTip');

const tipHandeler = function(e) {
  tipAmount=e.target.value;
  offButtons();
  calculate();
}
customTip.addEventListener('input', tipHandeler);


let ppl = document.getElementById('ppl');

const pplHandeler = function(e) {
  pplNumber = e.target.value;
  calculate();
}
ppl.addEventListener('input', pplHandeler);


function calculate()
{
  let Tp;
  let Tot;
  if (billAmount!==0 && pplNumber!==0) 
  {
    console.log('hey');
    Tp=(billAmount*tipAmount/100/pplNumber).toFixed(2);
    Tot=(billAmount/pplNumber).toFixed(2);
  }

  if (Tp!==undefined && Tot!==undefined && Tp !== Infinity && Tot !== Infinity) 
  {
    console.log('hello');

    tip.innerHTML = Tp;
    total.innerHTML = Tot;
  }
  else
  {
    console.log('hi');

    tip.innerHTML = "0.00";
    total.innerHTML = "0.00";
  }
}

function reset()
{
  location.reload();
}