window.onload = function()
{
    let dice = document.getElementById('dice');
    let quote = document.getElementById('quote');
    let id = document.getElementById('idNum');
    dice.addEventListener('click',getdata);
    function getdata() 
    {
        fetch('https://api.adviceslip.com/advice').then(function(response) {
            return response.json();
          }).then(function(data) {
            quote.innerHTML = data.slip.advice;
            id.innerHTML = data.slip.id;
          }).catch(function(message) {
            console.log(message);
          });
    }
}

