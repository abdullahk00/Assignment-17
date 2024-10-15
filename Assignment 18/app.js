// Chapter 43 to 48

//qns 1


// document.getElementById('alertLink').addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('You clicked the link!');
// });

// const mobileImages = document.querySelectorAll('.mobileImage');

// mobileImages.forEach(image => {
//     image.addEventListener('click', function() {
//         alert(`You clicked on ${this.alt}`);
//     });
// });



// qns no 2

// const students = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" },
//     { id: 4, name: "David" },
//     { id: 5, name: "Eva" },
//     { id: 6, name: "Frank" },
//     { id: 7, name: "Grace" },
//     { id: 8, name: "Henry" },
//     { id: 9, name: "Ivy" },
//     { id: 10, name: "Jack" },
// ];

// const studentTableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];


// function populateTable() {
//     students.forEach(student => {
//         const row = studentTableBody.insertRow();
//         row.innerHTML = `
//             <td>${student.id}</td>
//             <td>${student.name}</td>
//             <td><button class="deleteBtn">Delete</button></td>
//         `;

      
//         row.querySelector('.deleteBtn').addEventListener('click', function() {
//             studentTableBody.deleteRow(row.rowIndex - 1); 
//         });
//     });
// }


// populateTable();



//chapter 31 t 40

//qns no 1

// dObj = new Date();
// document.write(dObj)



//qns no 2

// dStr = new Date().toString();
// document.write(dStr)


//qns no 3
// let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()];
// document.write(day)

//qns no 4

// let d = new Date(); let day = d.getDay();


// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// alert("Today is: " + dayNames[day]);




//chapter 35 to 37

//qns no 1

// function displayAlert() {
//     alert("This is an alert!");
// }

// //qns no 2

// function askName() {
//     userName = prompt("Enter name:");
// }

// //qns no 3


// function greet() {
//     console.log("Hello!");
// }


// function sayGoodbye() {
//     console.log("Goodbye!");
// }


// function callFunctions() {
//     greet();        
//     sayGoodbye();   
// }
// callFunctions();


//qns no 4
// function askAndDisplayName() {
//     let userName = prompt("Enter name:");
//     alert("Your name is: " + userName);
// }

// askAndDisplayName();

//qns no 5

// function concat(a, b, c) {
//     console.log(a + b + c);
// }


// let variable = "Hello";
// let string = "World";
// let number = 42;


// concat(variable, string, number);


//qns no 6

// function concatenateAndAssign(param1, param2) {
//     result = param1 + param2; 
// }

// concatenateAndAssign("Hello, ", "world!");

// console.log(result); 

//qns no 7

// function multiplyAndAssign(param1, param2, param3) {
//     result = param1 * param2 * param3; 
// }
// multiplyAndAssign(2, 3, 4);
// console.log(result);

//qns no 8

// function calculateAverage(numbers) {
  
//     if (numbers.length === 0) return 0;

   
//     const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    
    
//     const average = sum / numbers.length;

//     return average;
// }


// const numArray = [10, 20, 30, 40, 50];
// const average = calculateAverage(numArray);
// console.log("Average:", average); 



//chapter 38

// function calculateSquare(number) {
//     let square = number * number;
//     return square; 
// }


// const num = 5;
// const result = calculateSquare(num);
// console.log("The square of", num, "is", result); 


//chapter 39 to 40
//qns no 1

// const fruit = "apple";

// switch (fruit) {
//     case "apple":
//         console.log("You selected an apple!");
//         break;
//     case "banana":
//         console.log("You selected a banana!");
//         break;
//     case "orange":
//         console.log("You selected an orange!");
//         break;
//     case "grape":
//         console.log("You selected a grape!");
//         break;
//     default:
//         console.log("Unknown fruit selected.");
// }

//qns no 2

// Prompt the user to enter a city name
// const cityName = prompt("Enter the name of a city:");


// switch (cityName.toLowerCase()) { 
//     case "new york":
//         alert("You selected New York!");
//         break;
//     case "los angeles":
//         alert("You selected Los Angeles!");
//         break;
//     case "chicago":
//         alert("You selected Chicago!");
//         break;
//     case "houston":
//         alert("You selected Houston!");
//         break;
//     default:
//         alert("City not recognized. Please enter a different city.");
// }





