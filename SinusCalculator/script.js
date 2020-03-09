function calculate(){
    let x = document.getElementById("sin").value;
    let accuracy = document.getElementById("accuracy").value;
    if(x !== "" && accuracy !== ""){
        let result = 0;
        x = x >= 360 ? x % 360 : x;
        x *= Math.PI/180; //konwersja wartosci kata na radiany
        //zamiana ze wzgledu na cwiartke
        if(x >= Math.PI/2 && x <= Math.PI){
            x = Math.PI - x;
        }else if(x > Math.PI && x <= 3*Math.PI/2){
            x = -(x-Math.PI)
        }else if(x > 3*Math.PI/2 && x <= 2*Math.PI){
            x = -(2*Math.PI - x);
        }
        for(let n = 0; n < accuracy; n++){
            result += ((Math.pow((-1), n))*Math.pow(x, 2*n+1))/(factorial(2*n+1, 1));
        }
        let diff = Math.sin(x) - result;
        document.getElementById("result").innerHTML = "Calculated result: " + result;
        document.getElementById("math-sin").innerHTML = "Math.sin: " + Math.sin(x);
        document.getElementById("diff").innerHTML = "Difference: " + diff;
    }else{
        alert("Podaj wartości!");
    }
}
function factorial(k, f){
    if(k === 1) return f;
    return factorial(k-1, f*k);
}