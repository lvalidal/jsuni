// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
// ]



// students.forEach(function (element) {
//     console.log(element.name);
//   });


//   students.forEach(function (element) {
//     console.log(element.scores);
//   });




// function abc(scores) {

//     let result = scores.reduce((sum , score) => sum + score , 0) ;

//     return result / scores.length
    
// }



// students.sort((a, b) => abc(a.scores) - abc(b.scores))

// console.log(students)



// let above = students.filter(stdents => abc(stdents.scores) > 90)

// console.log(above)



//---------------------------------------------------------------------------------------


// const products = [
//     { name: "one Product 1", price: 20, category: "Electronics" },
//     { name: "two Product 2", price: 30, category: "Clothes" },
//     { name: "three Product 3", price: 40, category: "Electronics" },
//     { name: "four Product 4", price: 50, category: "Clothes" },
//     { name: "five Product 5", price: 60, category: "Clothes" },
//     { name: "six Product 6", price: 70, category: "Electronics" },
//     { name: "seven Product 7", price: 80, category: "Clothes" },
//     { name: "eight Product 8", price: 90, category: "Electronics" },
//   ];


//   let enterProduct = prompt('enter the product!' ) ;

//   let list = [] ;


//   function search(abc) {

   
//     products.forEach((element) => {

//         let nameSearch = element.name.toLowerCase().includes(abc.toLowerCase().trim()) ;

//         let priceSearch = element.price === Number(abc) ;

//         let catSearch = element.category.toLowerCase().includes(abc.toLowerCase().trim()) ;


//         if( nameSearch || priceSearch || catSearch) {

//             list.push(element)

//         }
//     } ) ;
    
//   }

//   console.log(search(enterProduct)) ;


//   let sortbyone = list.sort((a , b) => a.price - b.price) ;

//   let sortbytwo = list.sort((a , b) => b.price - a.price) ;


//   console.log(sortbyone) ;

//   console.log(sortbytwo) ;


//--------------------------------------------------------------------------------------------------------------------




const employees = [
    { name: "Jamil", salary: 50000, department: "IT" },
    { name: "Jale", salary: 60000, department: "HR" },
    { name: "Bayram", salary: 55000, department: "IT" },
    { name: "Sahil", salary: 75000, department: "HR" },
    { name: "Maryam", salary: 65000, department: "IT" },
    { name: "Elnara", salary: 80000, department: "HR" },
    { name: "Davud", salary: 70000, department: "IT" },
] ;


salary.forEach((element) => {


    if( employees.salary > 65000) {

        console.log(element)
    }
})