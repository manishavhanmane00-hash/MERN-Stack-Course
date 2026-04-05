console.log("We are using JavaScript");

// ==================== Variables ====================
const name = "HOC";                    // Cannot be changed
var surname = "Tech";                  // Old way - avoid using var
let middlename = "Solutions";

// ==================== Functions ====================

// 1. Normal Function
function getMyName() {
    console.log("function 1");
}

getMyName();

// 2. Arrow Function
const getYourName = () => {
    console.log("function 2");
};

getYourName();

// 3. Function with Default Parameter
const getFullName = (data = "No Name") => {
    console.log("My Full Name:", data);
};

const myName = "Manisha Vhanmane";
getFullName(myName);

const test = "Akshada Patil";
getFullName(test);

getFullName(); // Will print default value

// ==================== Array ====================
const items = ["test 1", "test 2", "test 3", "test 4"];

console.log(items, "→ Full Array");
console.log(items[0], "→ First Element");

// ==================== Object ====================
const studentDetails = {
    name: "Manisha Vhanmane",
    city: "Karad"
};

console.log(studentDetails, "=> StudentDetails full object");
console.log(studentDetails.name, "=> StudentDetails Name Only");