//rest operator(...num)
function clacutaleCartPrice(...num1){
    return num1

}
//console.log(clacutaleCartPrice(200,300,500));

function clacutaleCartPrice1(val1,val2,...num2){
    return num2

}
//console.log(clacutaleCartPrice1(200,300,500,2000));

  const user ={
    username : "Priya",
    price: 300
  }

  function handleObject(anyobject){
   // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

  }
//handleObject(user)//passing object name
handleObject({
    username : "Priya",
    price: 399
})
//Array using function
const newArray = [200,300,600,1000]

function getnewArray(getArray){
    return getArray[2]
}
//console.log(getnewArray(newArray));

const employee ={
  calTax(){
    console.log("tax rate is 10%");
  },
};

const karanArjun ={
  salary:29999,
}
employee.calTax()

karanArjun.__proto__ = employee;


const course3 ={
  lecture: 10,
  section: 3,
  title: 'javascript',
  notes:{
    introduction:"What is javascript??"
  }
}

function enroll2(){
  console.log('you successfully enrolled');
}
enroll2()


///////Factory Function/////////////////////

function createCourse(){
  const tutn ={
    class: 7,
    section:12,
    note:10,
    title:'Web development',
    topics:{
      topic1:"HTML",
      topic2:"Css",
      topic3:"JavaScript",
    },
    login(){
      console.log("SuccessFull");
    }

  }
  return tutn;
}

function  createUser(name ,age, salary){
  return{
    name, 
    age, 
    salary,
    greet(){
      console.log(`hello, my name is ${this.name} and i am ${this.age}`);
    },
  };
}

const user1 = createUser('Bob',23,'web developer');

user1.greet();