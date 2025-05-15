const add= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r= n1+n2;
    const output = `Addition: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
};

const sub= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r= n1-n2;
    const output = `Subtraction: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
    
};

const mul= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r=n1*n2;
    const output = `Multiplication: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
};

const div= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r= n1/n2;
    const output = `Division: ${r}<br></br>`;
    document.getElementById("result").innerHTML = output;
};

/** 
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const calc = (op) => {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  switch (op) {
    case "add":
      output.innerHTML = "Addition: " + add(n1, n2);
      break;
    case "sub":
      output.innerHTML = "Subtraction: " + sub(n1, n2);
      break;
    case "mul":
      output.innerHTML = "Multiplication: " + mul(n1, n2);
      break;
    case "div":
      output.innerHTML = "Division: " + div(n1, n2);
      break;
  }
};
**/