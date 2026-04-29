let startbtn = document.
getElementById('start')

let count = document.getElementById
('count')

startbtn.addEventListener('click',function(){
 count.textContent = 1 
})

function increase(){
    let i = parseInt(count.innerText)
    i++
    count.textContent = i
}

function reset(){
    count.textContent = 0
}