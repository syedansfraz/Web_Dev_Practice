// const navEl= document.createElement(".container_nav")
window.addEventListener("scroll",()=>
{
    document.querySelector('.container_nav').classList.toggle('scroll-window',window.scrollY>0)

})