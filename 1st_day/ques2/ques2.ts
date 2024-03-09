//Question 3: Name Cases: Store a person’s name in a variable, \n
//and then print that person’s name in lowercase, uppercase,\n
// and titlecase.

let  My_Name: string = "sadaf zeeshan"

console.log(My_Name.toLowerCase())
console.log(My_Name.toUpperCase())
console.log(My_Name.replace(/\b\w/g,c=>c.toUpperCase()))