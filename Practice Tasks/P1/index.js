const textareaEl= document.getElementById("textarea")
const totalCount= document.getElementById("total-counter")
const remainCount= document.getElementById("remaining")

textareaEl.addEventListener("keyup",()=>
{
    updateCounter()   
})
function updateCounter()
{
    totalCount.innerText=textareaEl.value.length
    remainCount.innerText=150-textareaEl.value.length
}