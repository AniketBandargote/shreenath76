// function Details(){
//     this.name="shree";
//     this.age=20;
//     this.address="nipani"
// }
// let user=new Details();
// console.log(user.name);
//custom constructor function
function Details(naam,umar,isthan){
    this.name=naam;
    this.age=umar;
    this.address=isthan
    this.description=function(){
        return(`$my name is ${this.name},my age is ${this.age}`)
    }
}
let user=new Details("shree",20,"nipani");
let user1=new Details("ram",21,"akkol");
//console.log(user);
console.log(user.description())
//console.log(user1);
console.log(user1.description())
