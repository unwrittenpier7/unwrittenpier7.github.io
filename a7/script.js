const add= (a,b)=>{
    return a+b;
};

const sub= (a,b)=>{
    return a-b;
};

const mul= (a,b)=>{
    return a*b;
};

const div= (a,b)=>{
    return a/b;
};

const calc= ()=>{
    let n1= parseFloat(document.getElementById("t1").value);
    let n2= parseFloat(document.getElementById("t2").value);
    let r1= add(n1,n2);
    let r2= sub(n1,n2);
    let r3= mul(n1,n2);
    let r4= div(n1,n2);

    const output = `
    Addition: ${r1}<br>
    Subtraction: ${r2}<br>
    Multiplication: ${r3}<br>
    Division: ${r4}
  `;
    
  document.getElementById("result").innerHTML = output;
}