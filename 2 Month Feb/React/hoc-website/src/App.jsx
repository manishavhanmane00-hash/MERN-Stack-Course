import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCard from './components/DetailsCard';  //Reusable Components


function App() {

  //JavaScript
  console.log("mmmmmmmmmm");

  //Variable
  // Declaration 

  const name = "HOC" // We cannot change const value 
  let age = 22 //We can change let value. //Its block scop 
  var city = "Karad" // We can redeclare and reassign value .// Global 

  console.log(name, "name ===>");
  console.log(age, "-----");

  //String
  // In double quotation""
  const a = "Manisha"
  console.log(a,);

  //array
  //In square bracket[]
  const b = ["Apple", "Pineapple", "Grapes"];

  //Object 
  //In curly braces{} with key & their value
  const data = {
    name: "test",
    city: "Karad",
  };

  // if-else - ternari operator
  const fullName = "Hoc"

  if (fullName == "Hoc") {
    console.log(true);
  } else {
    console.log(false);
  }

  // function
  function addNumber() {
    console.log("Click");
  }

  //Arrays of object - We write an objects in array
  const cardData = [
    {
      CardTitle: "Test 1",
      CardDescription: "Test Description 1",
    },
    {
      CardTitle: "Test 2",
      CardDescription: "Test Description 2",
    },
    {
      CardTitle: "Test 2",
      CardDescription: "Test Description 2",
    },
    {
      CardTitle: "Test 2",
      CardDescription: "Test Description 2",
    },
    {
      CardTitle: "Test 2",
      CardDescription: "Test Description 2",
    },
    {
      CardTitle: "Test 2",
      CardDescription: "Test Description 2",
    },
  ];
  console.log(cardData, "========");


  return (
    <>
      {/* //HTML code */}

      <button className='btn btn-primary' onClick={addNumber}> Click Me</button>
      <div className='container'>
        <div className='row my-2'>
          {
            cardData.map((each) =>
              <div className='col-md-3'>
                {/* CardTitle - Props || CardDescription - Props || We can add more props */}
                <DetailsCard CardTitle={each.CardTitle} CardDescription={each.CardDescription} />
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
