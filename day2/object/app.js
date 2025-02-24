// /object
// let person={
//     name:'shree',
//     age:25,
//     favcolor:'white'
// }
// //console.log(person);
// console.log(person.name);
// //console.log(person[1]);
// console.log(person['age']);

// //change properties in object
// //update 
// person.name='aniket';
// console.log(person);

// //adding new property 
// person.gender='male';
// console.log(person);
// //delete property 
// delete person.favcolor;
// console.log(person);
let person={
    name:"shree",
    age:25,
    favcolor:'white',
    fun: function print(){
        return(`my name is ${this.name} and my age is ${this.age}`);
    },
    newObj:{
        gender:"male",
        address:"nipani"
    }
}
// console.log(person.fun())
console.log(person.newObj.address);

