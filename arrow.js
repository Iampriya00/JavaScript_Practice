const user5 ={
    username :'Riya',
    price :99,

    welCome : function(){
        console.log(`${this.username} , welcome this web site`);
        //this function refer to an global object
        console.log(this);
    }

}
user5.welCome()

// blowser = window object


function one() {
    console.log(this);
}
one()

function two() {
    let username = "kyc"
    console.log(this.username);//this only work in object
    
}
two()

//Arrow Function

const chai = (n1,n2) => 
    (n1+n2)
console.log (chai(2,5))

const coffee = () => ({user:"me"})

console.log(coffee())

//IIFE 

(function three(){
    console.log(`priya`);
})();