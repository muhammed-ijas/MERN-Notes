
// //--------------for each--------------------
//  const number = [1, 2, 3, 4, 5];
//--  const foreach=number.forEach((number,index)=>console.log(index+':'+number))
//-- number.forEach((num,index)=>console.log(num))
//output
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5  it modify on original array


// //-------------------map---------------------------
// const number = [1,2,3,4,5]

// const map =number.map((number)=> number *2)

//  console.log(map)  //output:[4,5,6,7,8]

// //----------------filter------------

// const number = [1,2,3,4,5]

// const filter = number.filter((num,acc)=>{
//   console.log(num,acc);
// })

// console.log(filter);
 
// ------------------------reduse-------------------

// const number = [
//   {name:'nihal',age:19},
//   {name:'shihad',age:17}
// ]

// const newnumber = number.filter((num)=>
// num.name=='nihal'

// )
// console.log(newnumber)

// --------------hoisting----------------------
// hoist()
// function hoist(){
//   console.log('hoisted')
// }

// ------------------closure-------------------------

// function a(){
//   let x=10;
//   function b(){
//      let y=290;
//      function c(){
//       let z=243
//       console.log(x+y+z);
//      }
//      c()
//   }
//   b()
// }
// a()
// ------------------slice--------------------------

//  const originalArray = [1, 2, 3, 4, 5];
// const slicedArray=originalArray.slice(1,3)
//  console.log(slicedArray); // Output: [2, 3, 4]
// console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// ---------------splice-------------

// const originalArray = [1, 2, 3, 4, 5];
// const removedElements= originalArray.splice(2,1,3,4)
//  console.log(originalArray); // Output: [1, 6, 7, 5] (original array is modified)
//  console.log(removedElements); // Output: [2, 3, 4] (elements that were removed)

// --------------------push------------------

// const fruits = ['apple', 'orange', 'banana'];
// const newLength = fruits.push('grape', 'kiwi');

// console.log(fruits);      // Output: ['apple', 'orange', 'banana', 'grape', 'kiwi']
// console.log(newLength);   // Output: 5 (length of the modified array)

// ----------------pop--------------------

// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.pop();

// console.log(colors);      // Output: ['red', 'blue']
// console.log(removedColor); // Output: 'green' (the last element that was removed)

// ------------------unshift------------------

// const fruits = ['orange', 'banana'];
// const newLength = fruits.unshift('apple', 'grape');

// console.log(fruits);      // Output: ['apple', 'grape', 'orange', 'banana']
// console.log(newLength);   // Output: 4 (length of the modified array)

// ----------------------shift------------------------------

// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.shift();

// console.log(colors);      // Output: ['blue', 'green']
// console.log(removedColor); // Output: 'red' (the first element that was removed)

// -----------------------------------map single manipulation-------------------------------------
// const originalArray = [1, 2, 3, 4, 5]

// const manipulatedArray = originalArray.map((element, index) => {

//   if (index === 0) {

//     return element * 2;
//   }

//   return element;
// });

// // console.log(originalArray)   // Output: [1, 2, 3, 4, 5]
// console.log(manipulatedArray)

//---------------------------------------Object-------------------------------

// const obj ={
//     name:'nihal',
//     dob:'10,10,2004',
//     place:'vadakara'
// }
// console.log(obj)

// ------------callback--------------

// function nihal (name,call){
//         console.log(`hello  ${name}`);
//         call()
// }

// function kp(greet){
//   console.log('How are you')
// }

// nihal('Muhammed Nihal',function(){
//   kp('greet')
// })                                                                                                                                                                                              

//-------------------------------------shallow copy------------------------------------

// const originalArray = [1, 2, [3, 4]];
// const shallowCopy = originalArray.slice();

// shallowCopy[2].push(5)

// console.log(originalArray); // Output: [1, 2, [3, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [3, 4, 5]]

//-------------DEEP COPY-------

// const originalArray = [1, 2, [3, 4]];
// const deepCopy =JSON.parse(JSON.stringify(originalArray))

// deepCopy[2].push(5)

// console.log(originalArray); // Output: [1, 2, [3, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [3, 4]]

//-----------sealedobject------------
// const obj={
//   name:'nihal',
//   age:19
// }

// Object.seal(obj)

//  obj.age=20

//  console.log(obj)
// /*

// ----------------------------object.freeze------------


//   const Object = {
//     prop1: 40,
//     prop2: "Hello",
//   };
  
//   Object.freeze(Object);// it cannot changable

// console.log(Object)

// */

//-------------type casting (coercion)------------

// let str = "42";
// let num = Number(str); // Using Number constructor for explicit type conversion
// console.log(num); // Output: 42

//----------------type conversion--------------

// let number = 10;
// let string = "5";

// let result = number + string; // JavaScript converts number to a string for concatenation
// console.log(result); // Output: "105"

//-----------------finding value in which index using ------indexOf----findIndex-----

// const myArray = 'nihal'
// const elementToFind = 'i';

// const index = myArray.charAt(3);

// console.log(index)

// -------------typeOf-----------------

// let x = 42;
// let y = "Hello, World!";
// let z = true;
// let obj = { key: "value" };
// let arr = [1, 2, 3];

// console.log(typeof x);  // Output: "number"
// console.log(typeof y);  // Output: "string"
// console.log(typeof z);  // Output: "boolean"
// console.log(typeof obj); // Output: "object"
// console.log(typeof arr); // Output: "object"

//--------------------trim---------------------

// let stringWithWhitespace = "   Hello, World!   ";
// let trimmedString = stringWithWhitespace.trim();

// console.log(trimmedString);
// Output: "Hello, World!"

//------------------------------------ normal promise--------------------------------------------------
// const prom =new Promise((reject,resolve)=>{
// let a=798
// if(a===798){
//   console.log(567);
// }else{
//   console.log(0);
// }
// })

// prom.then((result)=>console.log('result',result),((reject)=>console.log(reject)))

//--------------------------------promise any,all and race----------------------------------------------------

// const pro1 = Promise.reject(10)
// const pro2 = Promise.resolve(20)
// const pro3 = Promise.resolve(30)

// Promise.race([pro1,pro2,pro3]).then((result)=>console.log(result))


//------------------------------setTimeout in async and await---------------------
//  function late(){
//   return new Promise ((resolve)=>{
//   setTimeout(()=>{
//  resolve(1000)
//   },1000)
 
// })
//  }

//  async function call (){
//   const fir = await late()
// console.log(fir);
//  }
//  call()

//---------------------------promise method---------async and await----------try  and catch-------------------------------

// async function call(){
//   const prom = new Promise((resolve,reject)=>{
//     let a=10
//     if(a===10){
//       resolve(`100        0`)
//     }else{
//       resolve(0)
//     }
//   })

//   let fir =await prom
//   console.log(fir);
// }
// call()

//---------------------destructuring-------------------

// const person = {
//   name:'John', 
//   age:30,
//   place:'New York'
  
// };

// // Using destructuring to extract only the 'age'
// const {place} = person;

// console.log(place);  // Output: New York


//-------------------spread------------------

// let arr1=[10,20,30,40]
// let arr2=[1,2,3,4]
// let arr3=[...arr1,...arr2]
// arr3.push(50)
// console.log(arr3)

//--------------rest parameter-------------------

// const number =[1,2,3,4,5]

// cosnt [First,...rest]=number

// console.log(rest)

//----------------generator function------------

// function* countUpTo(limit) {
//   let count = 0;
//   while(count <= limit) {
//     yield count;
//     count++;
//   }
// }

// const iterator = countUpTo(5);

// console.log(iterator.next()); // Output: { value: 1, done: false }
// console.log(iterator.next()); // Output: { value: 2, done: false }
// console.log(iterator.next()); // Output: { value: 3, done: false }
// console.log(iterator.next()); // Output: { value: 4, done: false }
// console.log(iterator.next()); // Output: { value: 5, done: false }
// console.log(iterator.next()); // Output: { value: undefined, done: true }

//----------------------generator new method------------------------
// function *a(){
//   console.log('stop 1');
//   yield 100;

//   console.log('stop 2')
//   yield 200

//   console.log('stop 3');
//   yield 300
// }
//  const iterate = a()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

//------------------------------factory function----------------------------------
 
// function hello(name,age){
//   return{
//     name:name,
//     age:age,

//     sayhello(){
//       console.log(`my name is ${this.name} and age is ${this.age}`);
//     }
//   }
// }
// const hell=hello('nihal',19)
// hell.sayhello()
// // --------------------------constructor function--------------------------

// function hello(name,age){
//   this.name=name,
//   this.age=age,

//    this.hi=function(){
//      return `i am ${this.name} and age is ${this.age}`
//   }
// }
// const per=new hello('nihal',19)

// console.log(per.hi());

//--------------------------------currying-----------------------------------

  // function sum(a){
  //   return function (b){
  //     return function (c){
  //       return a+b+c
  //     }
  //   }
  // }
  // console.log(sum(1)(2)(3));

//-------------------------------higher order function(Hof)--------------------
// function  num(num1,num2,number){
//   return number(num1,num2)
// }

// function sum(a,b){
//   return a+b
// }

// function multiple(a,b){
//   return a*b
// }
// console.log(num(23,54,sum));
// console.log(num(45,21,multiple));

//------------------immediate invoke function (IIFC)------------------------

// (function (){
// console.log('hello');
// })()

//----------------------------do-while---------------------------

//  let count = 1;

// do{
// console.log(count);
// count++
// }while(count<5)

//---------------------------while----------------------

// let count = 1;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// //-----------------------optional chaining--------------------

// const person = {
//     name: 'John',
//     address: {
//       city: 'New York'
//     }
//   };

//   const cityName = person?.address?.city

//   console.log(cityName);   

//------------------------------fs read file and write into another file-----------------------------------------

//delte =unlink
//rename =rename
//update=update

//  const fs=require('fs')

//  fs.readFile('./dupe.html','UTF8',(err,data)=>{
//   if(err){
//     console.log(err);
//     return
//   }

//   fs.writeFile('./dupo.html',data,'UTF8',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log('send');
//     return
//   })

//  })


//-------------------------------server creation------------------------------

// const http = require('http')
// const fs = require('fs')

// http.createServer((req,res)=>{

// fs.readFile('./s.js',(err,data)=>{

// res.writeHead(200,{'content-type':'text/html'})
// res.write(data)
// res.end('hello')

// })

// }).listen(4000,()=>{
// console.log('running)
// })

//-----------------api not working----------------

// const express =require ('express')
// const path = require('path')

// const app=express()

// app.set('view engine','ejs')
// app.set(express.static('views'))
// app.get('/',(req,res)=>{
// res.render('sample.js')
// })

// app.listen(3000,()=>{
//   console.log("running...")
// })

//------------------------async and await---------------------

// function getName(){
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("nihal");
//     },3000)
// })
// }

// function getname(){
//     return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve("nihalkp");
//    },2000)
// })
// }

// Promise.all([getname(),getName()]).then((result)=>{
//     console.log(result)
//  })
// async function getUser(){
//     let Name =await  getname()
//     console.log(Name);
//     let name =await  getName()
//     console.log(name);
// }
// getUser()

//---------------------------------type coercoin--------------------

// console.log('300'==300)

//console.log(6+3+'hi')

//---------------------------exec and test------------------------

// const strg = /hello /;
// const result = strg.test("hello world");

// console.log(result);
// // Output: ["hello"]
//---------------------------strict mode--------------

// "use strict";

// function example() {
//   // This will throw an error in strict mode
//   lo = 10;
//   console.log(lo)
// }

// example();

//------------------------create file and add date -----------------------

// const fs = require('fs');

// const date = Date()

// fs.writeFile('example1.txt',date,'utf8',(err,)=>{

// if(err){
//   console.error('error',err)
// }else{

//   console.log('file successfully created  :',date)
// }

// })

//-----------------------promise  setTimeout  in large question-------------------------------

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//       console.log('Get user from the database.');
//       setTimeout(() => {
//           resolve({
//               userId: userId,
//               username: 'john'
//           });
//       }, 1000);
//   })
// }

// function getServices(user) {
//   return new Promise((resolve, reject) => {
//       console.log(`Get services of  ${user.username} from the API.`);
//       setTimeout(() => {
//           resolve(['Email', 'VPN', 'CDN']);
//       }, 2 * 1000);
//   });
// }

// function getServiceCost(services) {
//   return new Promise((resolve, reject) => {
//       console.log(`Calculate service costs of ${services}.`);
//       setTimeout(() => {
//           resolve(services.length * 100);
//       }, 3 * 1000);
//   });
// }

// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);

//------------------------promise chaining--------------------

// var prom = new Promise((resolve)=>{
//   setTimeout(()=>{
//      resolve(10)
//   },3000)
// })

// prom.then((result)=>{
//  console.log(result)
//  return result *2
// }).then((result)=>{
// console.log(result)
// return result *4
// }).then((result)=>{
// console.log(result)
// return result *6
// }).then((result)=>{
// console.log(result)
// return result *8
// })

// const promise=new Promise((resolve,rejects)=>{
//   setTimeout(()=>{
//     resolve('ok')
//   },3000)
// })

// promise.then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

//-----------------------------server creation ---------------------------------

// const http = require('http');
// const fs = require('fs')

// http.createServer((req,res)=>{

//   fs.readFile('s.js',(err,data)=>{

//     res.writeHead(200,({'content-type':'text/js'}))
//     res.write(data)
//     res.end('Hello')
//   })
// }).listen(3003,()=>{
// console.log('server is running...')
// })

//----------------------------------export-----------------------------------

// function p(){
//   console.log(  'wegyfvsHMVJH')
// }
// function r(){
//   console.log('wEFQGGEGGDG')
// }

// module.exports={
//   p,
//   r
// }

//--------------------------------callback--------------------------------------

// function first (first,second){
 
// console.log( first *second); 
  
// }
// function second1(){
 
// }

// second1(first (2,50))


//---------------------------------callback---------------------------------------

// function person(num1,num2){      
//       return num1*num2
    
//   }
  
//   function call(p){
//      console.log(p)
//   }
  
//   call(person(23,34))



//--------------------------------this  keywordds--------------call,apply and bind-------------------

// const obj={
//   a:10,
//   b:20,
//   c:function (a,b){
//     console.log(a,b,this)
//   }
// }

// const obj1={
//   d:30,
//   e:40
// }

// var n = obj.c.bind(obj1)
// n(1,2)

//-------------------------------object keys or values or entries(for key and value)-----------------------------

// const obj={

//   name:'nihal',
//   age:20,
//   place:'vadakara'
// }
// delete obj.place

// const n=Object.values(obj)
// console.log(n)


//--------------------------------default parameter---------------------------------

// function name ( name='nihal'){
//   console.log(name)
// }
// name()


//-------------------------------------weakset--------------------------------------


// const weakSet=new WeakSet()

// const obj1={}
// const obj2={}

// weakSet.add(obj1)
// weakSet.add(obj2)

// console.log(weakSet.has(obj2))

//------------------------------------ weakMap ---------------------------------------


// const weakMap = new WeakMap();

// const obj1={}
// const obj2={}

// weakMap.set(obj1,'obj1')
// weakMap.set(obj2,'obj2')

// console.log(weakMap.get(obj1,obj2))


//------------------------------------middleware------------------------------------------

// const express=require('express')
// const app=express()



//   app.get('./home',(req,res,next)=>{
//   const error=new Error('error simulated')
//   next()
// })

// const middleware=(err,req,res,next)=>{

//   console.error(err.stack)
       
//   res.status(500),json('error occured')   

// }

// app.use(middleware)

//    app.listen(7002,()=>{
  //   console.log('server is running')
  // })

// //--------------------------------getting number from user and giving it odd or even---------------------------------------

// const express=require('express')
// const app = express()

// app.get('/val/num',(req,res)=>{
//   const num=req.params.num 

//    if(isNaN(num)){
//     res.status(400).json({error:'failed'})
//   }else{
//     const result= num%2===0?'even':'odd';
//     res.json({num,result})

//   }
// }).listen(3000,()=>{
//   console.log('server is running')
// })

//-------------------------------------------  route  --------------------------------------------------

// const express=require('express')
// const app=express()


// // app.use((req,res,next)=>{
// //   console.error(error)
// //   next()
// // })


// // app.use((req,res,next)=>{
// //   console.error(error)
// //   next()
// // })
// app.get('/',(req,res)=>{
//   res.send('Hello every one')
//  // console.log('hi everyone')
// })

// app.get('/homes',(req,res)=>{
//   res.send('Hello every two')
//  // console.log('hi everyone')
// })

// app.listen(7002,()=>{
//   console.log('server is running')
// })


//-----------------class,constructor-----------------------------------------------

// class MyClass {
//   // Constructor method
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const myInstance = new MyClass('John', 25);

// myInstance.greet();

//----------------------------------  call ,apply and bind --------------------

//----------------call

// function hello(name){
//   console.log('This is me '+this.name);
// }

// const per={name:'Nihal'}

// hello.call(per)

//----------------------apply

// function hello(name,name1){
//   console.log(` Hello i am ${name} and they are ${name1} and ${this.name}`)
// }

// const person ={name:'Nihal'}

// hello.apply(person,['shihad','basith'])

//-----------------------bind-------

// function hello (name){
//   console.log('This is me '+this.name);
// }

// const per={name:"Nihal"}

// const bind=hello.bind(per)

// bind()

// function name(nam){
//   console.log('this is me '+nam);
// }
// const person ={nam:'Nihal'}
// const bind=name.bind(person)
// bind()

// const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Promise 1'));
// const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Promise 2'));

// Promise.race([promise2, promise1])
//   .then(result => console.log(result)) // Output: Promise 1
//   .catch(error => console.error(error));




// const promise1=new Promise((resolve,reject)=>resolve(1000))
// const promise2=new Promise((resolve,reject)=>reject('ok'))

// Promise.race([promise1,promise2]).then((result)=>console.log(result)).catch((error)=>console.log(error))

// const fruits= ['apple','watermelon','pineapple','jackfruit','lemon','orange']


// const f =fruits.splice(3,1,'mango')

// console.log(fruits);

// const fruits= ['apple','watermelon','pineapple','jackfruit','lemon','orange']

// console.log(Math.trunc(34.45));

// const name=' nihal, muhammed, nazim, muhammed';
// let firstname=name.slice(name.indexOf(' ')+1)
// console.log(firstname);

// console.log(name.split(''));

// function *a(){
//     console.log('stop1');
//     yield 100;

//     console.log('stop2');
//     yield 200;

//     console.log('stop3');
//     yield 300;

//     console.log('stop 4');
// }

// const iterable=a()

// console.log(iterable.next());
// console.log(iterable.next());

// console.log(iterable.next());

// console.log(iterable.next());

// const ar =[1,2,3,4]
// ar.shift()
// ar.pop()
// console.log(ar);

// let array=[];
// let s = "Hello, my name is John"
// const split=s.split(' ')

// console.log(split.length)

let n = 6;
if(n%2==0){
  console.log(n/2)
}
// let num = n / 2; 
// console.log(num)
// let nums = Math.ceil(num);
// console.log(nums);

// console.log(nums-1)
// console.log()

// const descendingArray = Array.from({length: 65}, (_, i) => 65 - i);
// console.log(descendingArray);



const wallet = await Wallet.findOne({ userId: userId });

    if (wallet) {
      const newEntry = {
        Reason: "Returned",
        amount: wallet.amount + productprice,
        transaction: "Deposits",
        date: new Date(),
      };

      const amountToAdd = parseFloat(productprice);

      wallet.history.push(newEntry);

      wallet.balance = parseFloat(wallet.balance) + amountToAdd;

      await wallet.save();

      console.log("New history entry added for user's wallet.");
    } else {
      const newWallet = new Wallet({
        userId: userId,
        balance: productprice,
        history: [
          {
            Reason: "returnedproduct",
            amount: productprice,
            transaction: "Deposit",
            date: new Date(),
          },
        ],
      });

      await newWallet.save();

      console.log("New wallet created for the user.");
    }