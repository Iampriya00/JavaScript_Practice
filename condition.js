const balance =3000
if (balance == 1) {
    console.log("you  are poor bacha");
    
}
else{
     console.log("borolox");
}

const userLoggingId = true
const debitCard= true

if (userLoggingId && debitCard){
    console.log("Allow user to buy");
}

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("NO way");
        break;
}

let val1;
//val1 =5 ?? 10
//val1= null ?? 10
//val1 = undefined ?? 15
val1 = undefined ??10 ??15??22

console.log(val1);

array=[3,5,6.7,2,1,1]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element ==5){
        console.log("5 is good");
        break;
    }
    
    console.log("ok done");
}

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(i +'*'+j+'='+i*j);
 }
   
}

for (let i = 0; i < 10; i++) {
    console.log("helloooo");  
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element ==5){
        console.log("5 is good");
        continue;
    }
    
    console.log(element);
}