function saveData() {
  let stack = [];

  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let sex = document.getElementById("sex").value;

  if (fname === "" || lname === "" || age === "" || sex === "") {
    alert("Please fill out all required fields!");
    return;
  }

  stack.push(fname, mname, lname, age, sex);

  let output = "<strong>Stored Data:</strong><br>";
  for (let i = 0; i < stack.length; i++) {
    output += stack[i] + "<br>";
  }

  output += age >= 18 ? "<br>Status: Adult" : "<br>Status: Minor";

  document.getElementById("result").innerHTML = output;
}
