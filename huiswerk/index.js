const http = require("http");
let server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.end()
})
server.listen(1977)
console.log("connected")




const lodash = require('lodash');
const fs = require('fs');

//------------------------array------------------------
const myPeople = [
    {name: "John Doe", age: 25},
    {name: "Jane Doe", age: 20},
   ]
const people = lodash.map(myPeople, (person) => {
       console.log(person);
      });
 
//------------------------sort descending------------------
const descending = lodash.orderBy(myPeople,['age'],['desc']);
        console.log(descending);

//-----------------------Find the oldest -----------------
const oldest = lodash.maxBy(myPeople,'age')
        console.log(oldest); 
//------------------------find the youngst----------------
const youngst = lodash.minBy(myPeople,'age')
        console.log(youngst);       
//------------------------delet the oldest-----------(with help friends)----
const deletOldest = lodash.drop(descending,1);
        console.log(deletOldest);
//------------------------------add new objects-------------------
myPeople.push({name:'jessi',age:20},{name:'mau',age:25},{name:'jost',age:20});
        console.log(myPeople);  
        
//------------------------------groep-----------------------
const groepMyPeople = lodash.sortBy(myPeople,"age");
        console.log(groepMyPeople);  
//---------------------------------------create a file---------
fs.writeFile('file.txt','the homeWork is not easy',err => {
    if(err) console.log('it is an err')
});
console.log("it is not an err");    
//---------------------------------the last one is so difficult---i dont do it--          
