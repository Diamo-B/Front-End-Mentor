let menu;
let shadow;
let expand;
function showMenu()
{
    menu = document.querySelector('.settings');
    shadow =  document.querySelector('.black'); 
    menu.style.cssText = "display:flex;";
    shadow.style.cssText = "display:flex;";
}

function hideMenu() 
{
    menu.style.cssText = "display:none;";
    shadow.style.cssText = "display:none;";
}

function expandMenu(e)
{
    let path = e.firstElementChild.src;   

    if(e.firstElementChild.id == 'features')
    {
        expand = document.getElementById('featuresExp');
        if (path.includes('arrow-down'))
        {
            expand.style.cssText = "display:flex;";
            e.firstElementChild.src= path.replace('arrow-down', "arrow-up");
        }
        if (path.includes('arrow-up'))
        {
            expand.style.cssText = "display:none;";
            e.firstElementChild.src= path.replace('arrow-up', "arrow-down");
        }
    }
    else if(e.firstElementChild.id== 'company')
    {
        expand = document.getElementById('companyExp');
        if (path.includes('arrow-down'))
        {
            expand.style.cssText = "display:flex;";
            e.firstElementChild.src= path.replace('arrow-down', "arrow-up");
        }
        if (path.includes('arrow-up'))
        {
            expand.style.cssText = "display:none;";
            e.firstElementChild.src= path.replace('arrow-up', "arrow-down");
        }
    }

}