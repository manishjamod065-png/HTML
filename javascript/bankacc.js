function createbankacc(ib){
    let b=ib;
    function deposit(a){
        b+=a;
        console.log(b);

    }
    function withdraw(a){
        b-=a;
        console.log(b);
} 
function checkbalance(){
    console.log(b);
}
return {deposit,withdraw,checkbalance};

}
const acc=createbankacc(3000);
acc.deposit(3000);
acc.withdraw(1000);
acc.checkbalance();
console.log(acc.b);