//const tinderUser= new Object() //singleton
//console.log(tinderUser); 
const tinderUser = {}// non singleton
tinderUser.id= "E123"
tinderUser.name="Hironmoy"
tinderUser.isLoggedIn="true"

//console.log(tinderUser); 

const regularUser= {
    email:"hirom69@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Priya",
            lastName:'Chakraborty'
        }
    }
}
//console.log(regularUser.fullname);

const obj1 ={
    1:"a", 2:"b"
}
const obj2 ={
    3:"a", 4:"t"
}
//const obj3 = {obj1 , obj2}

const obj3 = Object.assign({},obj1,obj2)// for concatenate two object in another variable ,here the empty brackets are the target where we add the whole source
//console.log( obj3);

//another way to concatenate 

const obj4 ={...obj1,...obj2}
//console.log(obj4);

//array of object

const user = [
    {
        id:1,
        email:"h69@gmail.com"
    },
    {
        id:3,
        email:"p999@gmail.com"
    },
    {
        id:2,
        email:"sfg349@gmail.com"
    }
]

//console.log(user[1].email);

//console.log(Object.values(user));

//console.log(Object.values(tinderUser));//values
//console.log(Object.keys(tinderUser));//keys
//console.log(Object.entries(tinderUser)) //array in array


const course ={
    courseName:"js in english",
    price:"10000",
    courseInstructor:'Priya'
}

const {price:pri} = course //pri is destructure
// {price} is props

//console.log(pri)

const navbar = ({company}) => {
    navbar(company = 'Priya')
}

//using function

const course1 ={
    lecture:10,
    section:5,
    title:'JavaScript',
    note: {
        introduction: 'wellcpome to my channel'
    },
    enroll() {
        console.log('You are successfully enroll');
    }
}
course1.enroll()
console.log(course1.title);

//object dynamic nature

course1.price =1000

console.log(course1);




