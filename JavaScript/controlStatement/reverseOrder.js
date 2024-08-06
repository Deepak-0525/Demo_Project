

for(index=10; index>=1; index--){
    console.log(index)
}



<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Objects</h1>
<h2>Objects are Mutable</h2>

<p>Changes to a copy of an object will also change the original object:</p>

<p id="demo"></p>

<script>
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

// Create a Copy
const x = person;

// Change Age
x.age = 10;

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>

</body>
</html>