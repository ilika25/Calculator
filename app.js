const show= document.querySelector(".show");
function addnum(n){
    const newele= document.createElement('span');
    newele.textContent=n;
    show.appendChild(newele);
}
function reset(){
    show.innerHTML="";
}
function calculate(){
    show.innerText= eval(show.innerText);
}
