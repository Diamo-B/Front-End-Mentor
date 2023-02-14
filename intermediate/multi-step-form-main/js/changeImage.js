let changeImage = () => {
    let desktop = 768;
    let image = document.getElementById("image");
    console.log(screen.width);
    if(screen.width < desktop)
    {
        image.src = "./assets/images/bg-sidebar-mobile.svg";
    }
    else
    {
        image.src="./assets/images/bg-sidebar-desktop.svg";
    }
}

window.onload = ()=>{
    changeImage();
};

window.addEventListener("resize",()=>{
    changeImage();
})