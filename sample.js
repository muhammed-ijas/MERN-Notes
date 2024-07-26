
//generator function

// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = generator();


// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());








//IIFE (immediately invoked function expression)

//example 1

// (()=>{
//     console.log("haoooo");
// })();

//example 2

// let count = (()=>{
//     let count = 0;

//     return {
//         increment:()=>{
//             count++;
//             return count;
//         },
//         decrement: ()=>{
//             count--;
//             return count;
//         },
//         getCount: ()=>{
//             return count;
//         },
//     };

// })();

// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.getCount());



//Factory functions

// A factory function is a design pattern in JavaScript where you create and return objects from a function

//example >>

// function createPerson(name,age){
//     return {
//         name:name,
//         age:age,
//         greet: ()=>{
//             console.log(`hi ${name} , you are ${age} year old , right?`);
//         }
//     }
// }

// let person1 = createPerson('ijas',21);

// person1.greet()




//Hoisting

// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compile phase before the code is executed. This means that you can use variables and functions before they are declared in the code.

//example

// console.log(x);
// var x = 1;
// console.log(x);




//currying

// function add(a,b){
//     return a+b;
// }

// function first(a){
//     return function second (b){
//         return add(a,b);
//     }
// }

// const adding = first(10);
// const result = adding(5);

// console.log(result);




//ternary operators

// const x=7;
// x<4?console.log(`${x} is small`):console.log(`${x} is big`);



//optional chaining 

// const person = {
//     place :{
      
//     }
// };

// const one = person?.hei?.city;
// console.log(one);



//nullish coalescing operator

// const expr1 = undefined;
// const expr2 = "hai";
// console.log(expr1??expr2);



//object destructuring 

// const person  = {
//     name:"ijas",
//     place:"calicut",
//     age:21
// }

// const {name,place,age}  = person;
// console.log(name);
// console.log(place);
// console.log(age);




// call , apply , bind


// function  greeting (greet,name){
//     console.log(`${greet} , ${this.name}`);
// }

// const person = {name : "ijas"};


// call

// greeting.call(person,'hello',"murshid");

// apply

// greeting.apply(person,['hello',"murshid"]);

// bind

// const binding = greeting.bind(person,"hello");

// binding('murshid')




//promise

// function pizzamaking(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const pizza = true;
//             if(pizza){
//                 resolve("pizza ready");
//             }else{
//                 reject("something wrong happened");
//             }
//         },2000);
        
//     })
// };

// pizzamaking()
//     .then(pizza => console.log(pizza))
//     .catch(err => console.log(err))
//     .finally(()=> console.log("everything has thats own time"))





//Object.freeze()

// const person = {
//     name:'ijas',
//     age : 21
// }

// console.log(person);
// Object.freeze(person)
// person.name="murshid"

// console.log(person);




//if function inside reduce

// const arr = [1,56,34,-34,98,9,-9,"jgtjgj","&&"];

// const sum = arr.reduce((acc,cur)=>{
//     if(0<cur){
//         return acc+cur
//     }
//     return acc
// },0)

// console.log(sum);





//map

// const myMap = new Map();
// myMap.set('name','apple');
// myMap.set(2,'number hero');
// myMap.set(true,'boolean bhi aaya saab');
// myMap.set({},'haye,ye kya cheese he , object bhi');

// myMap.forEach(element => {
//     console.log(element);
// });

// console.log(myMap.get(2));

// console.log(myMap.size);




//eval()

// const sum = '5+3';
// const sumsum = eval('5+3');

// console.log(sum)
// console.log(sumsum);





//shallowcopy

// const originalObject = {
//     name: 'Alice',
//     address: {
//       street: '123 Main St',
//       city: 'Anytown'
//     }
//   };


//   //deepcopy
// const deep =  JSON.parse(JSON.stringify(originalObject))

// deep.address.city="calicut";

// console.log(originalObject);
// console.log(deep);


// // shallow copy
// const shallow = originalObject;
// shallow.address.city="calicut";



// console.log(originalObject);
// console.log(shallow);







// proxy object

// const person = {
//   name: 'ijas',
//   age: 21
// };

// const proxy = new Proxy(person,{
//   get(target,prop){
//     console.log(`accessing properties${prop}`);
//     return target [prop];
//   }
// })


// console.log(proxy);
// console.log(person);

// proxy.age=22;
// console.log(proxy);
// console.log(person);


// const sum = ((a)=> {return a}
// )

// console.log(sum(10));










//forEach

// let array = [1,2,3,4,5]
// let flag=false;
// let i;
// array.forEach((n,index)=>{
//     if(n==3){
//         flag=true;
//         i=index;
//         return;
//     }
// })

// if(flag){
//     console.log(`found in ${i} `);
// }




//set

// const arr = [1,2,3,4,3,2,4,5,6,7,5,6,8,5,7,9,5,6,4]

// const set = new Set(arr)

// console.log(set);
// console.log(set.has(5));
// set.delete(5)
// console.log(set.has(5));
// console.log(set);
// set.add(10)
// console.log(set);



//map

// const map = new Map([['a',1],['b',2]])

// console.log(map);

// map.set('c',3)

// console.log(map);

// map.delete('a')

// console.log(map);

// for(const [key,value] of map){
//     console.log(`${key}   ,,,, ${value}`);
// }

// map.clear()

// console.log(map);




