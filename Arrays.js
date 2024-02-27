let marks =[91,33,4,57,87,66,99]
marks [7]=100; // new element 
marks [2]=66; //changing value
console.log( marks);

console.log(marks[6]);
console.log(marks.length);

//array methods

let n = [1,2,3,4,5,6]
let b = n.toString() 
console.log(typeof b); //convert in string

let c =n.join(" and ")
console.log(c);

let r = n.pop()
console.log(r, n);

n.push(10)
console.log(n);

let p = n.shift() // revome 1st element
console.log(p,n);

n.unshift(33)
console.log(n);// add element in 1st index

delete n[4]
console.log(n); //length will not change

let a1=[3,3,4,4,,6,5,4,3]
let a2=[1,2,3,4,5,6,6,7]
let a3=[9,8,7,6,5,4,3,3,2]

let a4 = a1.concat(a2,a3) 
console.log(a4);