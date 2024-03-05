//for of loop for array
const array =[1,2,3,4,5,6,7];


for (const item of array){
    //console.log(`each char is ${item}`);
}

//Map
const map = new Map()

map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('IN',"India")

console.log(map);
for (const [key , value] of map){
   // console.log(key,':-' ,value);

}
// object iterate for in

const myobject ={
    game1 : "NFS",
    game2 : "Spiderman",
    game3 : "BGMI"
}

for (const key in myobject) {
    //console.log(myobject[key]);
}

//For in using array
const programmimg =["js","c++","c#", "java"]

for (const key in programmimg){
    //console.log(key); //show index no
    //console.log(programmimg[key]); //index no with value
}

//For Each loop

const coding = ["js","java","python","c","c++","c#"]

/*coding.forEach (function (val){
    console.log(val);

})*/

/*coding.forEach ( (val) => {
    console.log(val);
})*/

/*function printMe(item){
    console.log(item);
}
coding.forEach(printMe)*/

/*coding.forEach ((item,index,arr) => {
    console.log(item, index, arr);
})*/

const myCoding = [
    {
        LanguageName: "JavaScript",
        LanguageFileName : "js"

    },
    {
        LanguageName: "Java",
        LanguageFileName : "java"

    },
    {
        LanguageName: "Python",
        LanguageFileName : "py"

    },
]

myCoding.forEach ((item) => {
    console.log(item.LanguageFileName);
})