//using selectors inside the element
// traversing the dom

const QBtns   =   document.querySelectorAll('.question-btn')




QBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        // alert(e.currentTarget)
        const Pregunta = e.currentTarget.parentElement.parentElement
        Pregunta.classList.toggle('show-text')
    })
})