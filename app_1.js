let curr="";
let num=[];
let op=[];
let show= document.querySelector(".show");
function addnum(n){
    curr+=n;
    update(n);
}
function addop(opr){
    num.push(parseFloat(curr));
    op.push(opr);
    update(opr);
    curr="";
}
function update(add){
    const newele= document.createElement('span');
    newele.textContent=add;
    show.appendChild(newele);
}
function reset(){
    show.innerHTML= "";
}
let result=0;
function calculate(){
    num.push(parseFloat(curr));
    curr="";
    console.log(op);
    while(op.length!=0){
    if(op.includes('*')){
        let i= op.indexOf('*');
        let r= num[i]*num[i+1];
        result+=r;
        console.log(r);
        num.splice(i,2,result);
        console.log(num); 
        op.splice(i,1);
    }}
}