const question=document.getElementsByClassName("question")
const answer=document.getElementsByClassName("answer")
const q=document.querySelectorAll(".question")
console.log(q)
console.log(question.length)
console.log(answer[1])

for(let i=0;i<question.length;i++){
    question[i].addEventListener("click",()=>{
        q[i].classList.toggle("q")
        console.log(q[i])
        answer[i].classList.toggle('active')
        console.log(answer[i])
    })

}

const pa=document.querySelectorAll(".container")
console.log(pa)
for(let i=0;i<pa.length;i++){
    pa[i].addEventListener('click',function(){
        this.classList.toggle("test")
        console.log(this)
    })
}