const textareaEl=document.getElementById('textarea');
const totalCounterEl=document.getElementById('total-character');
const remainingCounterEl=document.getElementById('remaining-character');


textareaEl.addEventListener('keydown',()=>{
    totalCounterEl.innerText=textareaEl.value.length;
   updateReaminingCounter();
})
updateReaminingCounter();
function updateReaminingCounter(){
    remainingCounterEl.innerText=textareaEl.getAttribute("maxLength")-textareaEl.value.length;
}