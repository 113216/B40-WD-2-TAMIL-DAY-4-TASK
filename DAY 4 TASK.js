// const xhr =new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all");
// xhr.send();

// xhr.responseType = "json";
// xhr.onload = function displayResult() {

// const countries = xhr.response;
// console.log(countries);
// console.log("No. of countries:",countries[1].name);
// for (let i = 0; i < countries.length; i++) {
//     console.log("No.of countries:",countries[i].flags);    
// }
// }




const xhr =new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all" );
xhr.send();

xhr.responseType = "json";
xhr.onload = function displayResult() {

const countries = xhr.response;
console.log(countries);
console.log("No. of countries:",countries[1].name);
for (let i = 0; i < countries.length; i++) {
console.log("countries name:",countries[i].name.common)
console.log("countries  region",countries[i].region) 
console.log("countries sub region",countries[i].subregion)
console.log("no.of population :",countries[i].population)  

}

}

// const xhr =new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all" );
// xhr.send();

// xhr.responseType = "json";
// xhr.onload = function displayResult() {

// const countries = xhr.response;
// console.log(countries);
// console.log("No. of countries:",countries[1].name);
// for (let i = 0; i < countries.length; i++) {
// console.log("No.of countries:",countries[i].region);   
// }

// }

// const xhr =new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all" );
// xhr.send();

// xhr.responseType = "json";
// xhr.onload = function displayResult() {

// const countries = xhr.response;
// console.log(countries);
// console.log("No. of countries:",countries[1].name);
// for (let i = 0; i < countries.length; i++) {
// console.log("No.of countries:",countries[i].subregion);   
// }

// }

// varobi1JSON ={name:"person1",age:5};
// varobj2JSON ={age:5,name:"person1"};

// console.log( _.isEqual(varobi1JSON, varobj2JSON) );

// const object1 = {
//     name: "Dwarak",
//     age:24,
//   };
      
//   const object2 = {
//     age: 24,
//     name: "Dwarak",
//   };
      
// //   JSON.stringify(object1) === JSON.stringify(object2)
  
// console.log(_.isEqual(object1, object2));
      
 
  
