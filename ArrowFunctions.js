const shyam = () =>{
    console.log("Shyam");
}
shyam();

const person = {
    name : "shyam",
    age : 22,
    isMarried : false
}

const {name:name1,age,isMarried} = person
console.log(name1);
const person2  = {...person,name : "Sundar"}