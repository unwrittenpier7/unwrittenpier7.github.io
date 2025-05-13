function display(){
    var email= document.getElementById("t1").value;
    var password= document.getElementById("p1").value;
    document.getElementById("output").innerHTML = `
    ${email}, ${password}`
}