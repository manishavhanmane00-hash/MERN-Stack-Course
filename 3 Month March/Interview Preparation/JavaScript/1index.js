console.log("We are using JavaScript")


// Variables

const name = "HOC"                  // Fixed Value We cannot change 
var surname = "Tech"                // Global We can change anywhere in file  
let middlename = "Solutions"        

// Functions

// Normal Function 
function getMyName() {
    console.log("function 1")
} 

getMyName()

// Arrow Function 
const getYourName = () => {
    console.log("function 2")
}

getYourName()

// Parameter - default Parameter

const getFullName = (data ="No Name") => {
    console.log("My Full Name" , data)
}

const myName = "Manisha Vhanmane"

getFullName(myName)


const test = "Akshada Patil"
getFullName(test)

getFullName()

// Array - index  0          1           2         3
const items = ["test 1" , "test 2" , "test 3" , "test 4"]
console.log(items , "Full Item Print")
console.log(items[0] , " - Print only index 0 - ( First Value )")




// Object - Key Value Pair
const studentDetails = {
  // Key  -   Value  
    name : "Manisha Vhanmane",
    city : "Karad"
}

console.log(studentDetails, " => StudentDetails full object")
console.log(studentDetails.name, " => StudentDetails name only ")