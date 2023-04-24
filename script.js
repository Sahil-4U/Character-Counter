const textareaEl=document.getElementById('textarea');
const totalCounterEl=document.getElementById('total-character');
const remainingCounterEl=document.getElementById('remaining-character');


textareaEl.addEventListener('keydown',()=>{
    totalCounterEl.innerText=textareaEl.value.length;
   updateReaminingCounter();
})
updateReaminingCounter();
function updateReaminingCounter(){
    if(textareaEl.getAttribute("maxlength")-textareaEl.value.length==491){
        remainingCounterEl.innerText=(textareaEl.getAttribute("maxlength")-textareaEl.value.length)+9;
    }else{
        remainingCounterEl.innerText=(textareaEl.getAttribute("maxlength")-textareaEl.value.length);
    }
    
}