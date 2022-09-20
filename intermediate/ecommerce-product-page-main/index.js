let menu;
let cart;
let mediaQuery = window.matchMedia('(min-width:934px)');
let productImages = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg']

/*---------------Adjustments desktop/mobile mobile/desktop------------*/

window.matchMedia('(min-width:934px)').addListener(handleTabletChange);

function handleTabletChange(e) 
{
    menu = document.querySelector('.categories');
    let cart_expansion_items = document.querySelector('.cart--expansion__items')
    let cart_item_text = document.querySelectorAll('.item__label');
    if (e.matches) 
    {
        /*desktop size*/
        menu.style.display="flex";
        cart_item_text.forEach((e)=>{
            e.innerHTML = "Fall Limited Edition Sneakers";
        });
        cart_expansion_items.classList.remove('margin-inline');
    }
    else
    {
        menu.style.display="none";
        cart_item_text.forEach((e)=>{
            e.innerHTML = "Autumn Limited Edition...";
        });
        cart_expansion_items.classList.add('margin-inline');
    }
}

window.onload = ()=>{handleTabletChange(mediaQuery);}  
/*-----------------------------------------------------------------------------*/

/*----------------------Toggle menu mobile-------------------------*/
function menuToggle()
{
    menu = document.querySelector('.categories');
    if(window.getComputedStyle(menu).display == 'none')
    {
        menu.style.display = "flex";
    }
    else if(window.getComputedStyle(menu).display == 'flex')
    {
        menu.style.display = "none";
    }
}

/*-----------------------------------------------------------------------------*/

/*----------------------Toggle Cart-------------------------*/

function cartToggle()
{
    cart = document.querySelector('.cart--expansion');
    if(window.getComputedStyle(cart).display == 'none')
    {
        cart.style.display = "flex";
    }
    else if(window.getComputedStyle(cart).display == 'flex')
    {
        cart.style.display = "none";
    }
}

/*-----------------------------------------------------------------------------*/

/*----------------------Toggle focus-------------------------*/
let focus_window = document.querySelector('.Desktop_focus');
function focusOpen()
{
    focus_window.style.display = "flex";
}

function focusClose()
{
    focus_window.style.display = "none";
}

/*-----------------------------------------------------------------------------*/


/*----------------------Show Cart item Count in navbar-------------------------*/

let itemQuantity = document.getElementById('itemQuantity');
let itemsCount = document.querySelector('.items-count');
function removeCartItem(e) 
{
    
    if (itemQuantity.innerText <= 1) 
    {
        e.parentElement.style.display = "none";
        let empty_cartMsg = document.querySelector('.empty-cart');
        empty_cartMsg.style.display = 'block';

        let checkout = document.getElementById('cartCheckout');
        checkout.style.display = "none";

        
        itemsCount.style.display = "none";
    }
    else
    {
        itemQuantity.innerHTML--;
        itemsCount.innerHTML =  itemQuantity.innerHTML;
        calculate_cart_price(itemsCount.innerHTML);
    }
    
}

/*-----------------------------------------------------------------------------*/

/*----------------------Switch product image with arrows-------------------------*/


function changeImage(action, _focus=null) 
{
    let currentFull;
    let current;
    let indexOfCurrent;
    if (_focus == null) 
    {
        currentFull = document.getElementById('currentImage');
        current = currentFull.src.slice(57);
        indexOfCurrent = productImages.indexOf(current);
    }
    else
    {
        currentFull = document.getElementById('currentFocus');
        current = currentFull.src.slice(57);
        indexOfCurrent = productImages.indexOf(current);
    }
    if (action == "prev" || action == "focusPrev") 
    {
        if (indexOfCurrent == 0) 
            indexOfCurrent = productImages.length-1;
        else
            indexOfCurrent--; 
    } 
    else 
    {
        if (indexOfCurrent == productImages.length-1) 
            indexOfCurrent = 0;
        else
            indexOfCurrent++;
    }    
    currentFull.src = './images/'+productImages[indexOfCurrent];
}

/*-----------------------------------------------------------------------------*/

/*---------- Switch product image with click on thumbnail in desktop ----------*/

function replaceMainImage(e)
{
    let mainSpace = document.getElementById('currentImage');
    let replacement = e.src.slice(57);
    replacement = replacement.replaceAll('-thumbnail', '');
    mainSpace.src = "./images/"+replacement;
}

function replaceFocusImage(e)
{
    let FocusBigSpace = document.getElementById('currentFocus');
    let replacement = e.src.slice(57);
    replacement = replacement.replaceAll('-thumbnail', '');
    FocusBigSpace.src = "./images/"+replacement;
}

/*-----------------------------------------------------------------------------*/

/*------------------------------ Change Quantity ------------------------------*/

function ChangeQuantity(op) 
{
    let Quantity = document.getElementById('Quantity');
    switch (op) {
        case '+':
            Quantity.innerText++;
            break;
        case '-':
            if (Quantity.innerText>0) 
            {
                Quantity.innerText--;
            }
            break;
    }  
}

/*-----------------------------------------------------------------------------*/

/*-------------------------------- Add to cart --------------------------------*/

function AddToCart()
{
    let Quantity = document.getElementById('Quantity').innerText;
    if (Quantity != 0) 
    {    
        let cartCount = document.querySelector('.items-count');
        cartCount.style.display = 'block';
        cartCount.innerHTML = Quantity; 
        let emptyCart_Msg = document.querySelector('.empty-cart');
        emptyCart_Msg.style.display = 'none';
        let cart_item = document.querySelectorAll('.cart_item');
        cart_item.forEach(e => {
            e.style.display = 'flex'
        });
        calculate_cart_price(Quantity);
    }    
}

function calculate_cart_price(Quantity) 
{
    let unit_price = document.getElementById('uni-price');
    let itemQuantity = document.getElementById('itemQuantity');
    itemQuantity.innerHTML = Quantity;
    let totalItemPrice = document.getElementById('totalItemPrice');
    totalItemPrice.innerHTML = '$'+(unit_price.innerText.replace('$','') * itemQuantity.innerText).toFixed(2); 
}