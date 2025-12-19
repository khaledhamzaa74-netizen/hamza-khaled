// document.writeln("this is an external js file");

// var n=9;
// console.log(n);
// var b =12;
// b =String(b);
// console.log(typeof b);
// var s ="13.4px";
// s=parseInt(s);
// console.log(s);


// var f ="13.4pt";
// f =parseFloat(f);
// console.log(f);
// console.log("4"+2);
// console.log("4"-2);


// console.log(3=="3");
// console.log(3==="3");


// // let t =70;
// // let status =(t>100)?"boolling ":"not bolling";

// // if (t>100){
// //     state ="bolling"
// // }else{
// //     state ="not bolling"
// // }


// var temp =90;

// if (temp>=100){
//     document.writeln("booling");

// }else if(temp<100 && temp>=60){
//     document.writeln("warm");

// }else{
//     document.writeln("cold");
// }

// var s;
// if(temp>=100){
//     s ="booling";

// }else{
//     s="not bolling";
// }
// s= (temp>=100)?"boolling ":"not bolling";
// document.writeln(s);


// var day=1;
// switch(day){
//     case 1:
//         document.writeln("sunday");
//         break;
//     case 2:
//         document.writeln("monday");
//         break;    
//     default:
//         document.writeln("none");    
// }


// for(var c=2; c<5; c++){
//     document.writeln(c);
// }
// var w=7;
// // while(W<4){
// //     document.writeln(w);
// //     w++
// // }
// // do{
// //     document.writeln(w);
// //     w++
// // }while(w<4)
// //     function hello (){
// //     console.log("hello ")
// // }

// function add(n1 = 5 , n2 = 3 ){
//     var result = n1+n2
//     return result
// }

// console.log(add(4,5))

// var y = function(){
//     console.log("hi ")
// }

// y()

// function callanotherfn(fn){
//     console.log("this is call another function function ")
//     fn()
// }
// callanotherfn(function (){
//     console.log("this is anonymous function ")
// })
// callanotherfn(y)


// // array 
// var arr = [100,200,400,500,"name","string"]
// console.log(arr)
// console.log(arr[4])

// arr[0]="hamza"
// console.log(arr)
// console.log(arr.length)

// arr.pop()
// console.log(arr)
// arr.push(90,80)
// console.log(arr)
// arr.splice(4,1,"major")
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift(9)
// console.log(arr)
// var arr2 =[10,20,30,40,50,60]
// console.log(arr2.indexOf(300))
// console.log(arr2.indexOf(30))
// var miniarr = arr2.slice(2,5)
// console.log(miniarr)

// var arr3 =[1,2,3]
// var arr4 = [5,6,7]
// var newArr =arr3.concat(arr4)
// console.log(newArr)

// let arr=[1,2,3]
// let arr2=[7,8,9]
// let newArr =arr.concat(arr2)
// console.log(newArr)

// let arr3=["hello","hamza","and","judy"]
// let strarr = arr3.join(" ")
// console.log(strarr)

// arr3.sort()
// console.log(arr3)


// let arr5 =[10,2]
// arr5.sort((a,b)=>b-a)
// console.log(arr5)

// for(var i=0;i<arr3.length;i++){
//     console.log(arr3[i])
// }
// arr2.forEach(function(element){
//     console.log(element+1)
// })

// var obj1 =document.getElementById("first");
// console.log(obj1);
// let obj2 = document.getElementsByClassName("head2");
// console.log(obj2)
// let obj3 =document.getElementsByTagName("h2")[2];
// console.log(obj3);
// let obj4 = document.querySelector("#first");
// console.log(obj4);
// obj1.innerHTML ="first header <a href ='#'JS </a>"

// var obj5 = document.getElementsByTagName("input")[0]
// obj5.setAttribute("placeholder","enter")
// obj5.setAttribute("value","hamza")

// obj4.style.background ="grey"
// var element11 =document.createElement("div")
// var text =document.createTextNode("this is a new node")

// element11.appendChild(text)

// document.body.appendChild(element11)

// var btn =document.getElementsByTagName("button")[0]
// btn.addEventListener("click","function(){alert('hi')}")
//     alert("hi");
    


let person = {
    name:"hamza",
    age :20,
    welcome:function(){
        console.log("welcome"+this.name)
    }
}
person.welcome()
console.log(person.name)
person.name ="ali"
console.log(person)
person.major = "medicine"
console.log(person)

delete person.age
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
let person2 = {}
Object.assign(person2,person,{job:"designer"})
console.log(person2)

person.welcome()

function Person(name,age){
    this.name= name
    this.age
}

let obj =new Person ("mai",27)
console.log(obj.name)

let obj2 =new Person ("sara",40)
console.log(obj2.name,obj2.age)


let b =new Array(1,2,3)
console.log(Array.prototype)

function Animal(name){
    this.name = name
}

Animal.prototype.speak= function(){
    console.log(this.name+"makes a sound")
}

let a = new Animal("cat")
a.speak()

function dog (name){

    Animal.call(this,name)
}

dog.prototype =Object.create(Animal.prototype)
dog.prototype.speak = function(){
     console.log(this.name+"barks")

}

function speak(){
    console.log(this.name+"barks")
}
let d = new dog ("puppy")
d.speak()

class animal1{
        constructor(name){
            this.name = name
        }
        speak(){
            console.log(this.name+"makes a sound")
        }
}
class dog1 extends animal1{
    constructor(name,type){
        super(name)
        this.type = type
    }
    getdata(){
        console.log("this name and type are: " +this.name+" "+this.type)

    }
}

let ann = new animal1("cat")
ann.speak()
let d1 = new dog1("dog","cat")
d1.speak()
d1.getdata()


let str = JSON.stringify(person)
console.log(str)

let obj4 = JSON.parse(str)
console.log(obj4)


