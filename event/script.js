const student = {
    name : "Shah alam",
    age : 23,
    department: "CSE",
    time : 10,
    study : function(){
        return this.name + " start study at " + this.time;
    }
}



console.log(student.study());

// displayFunc:

function displayFun(){
    document.querySelector('#demo').innerHTML = Date();
}

let x = "jhon";
let y = new String("jhon");

console.log(x === y);