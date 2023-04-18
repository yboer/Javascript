const open = document.querySelector(".open");
const closed = document.querySelector(".closed");

closed.addEventListener('click', function(){
    open.classList.add('active');
    closed.classList.remove('active');
})
open.addEventListener('click', function(){
    closed.classList.add('active');
    open.classList.remove('active');
})








9