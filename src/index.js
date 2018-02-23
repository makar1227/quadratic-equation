module.exports =
function solveEquation(equation) {
    let arr = equation.split(" ");

    let a = [];
    a.push(arr[7]);
    a.push(arr[8]);
    let b = a.join("");
    let d = Math.sqrt(parseInt(arr[4]) * parseInt(arr[4]) - 4 * parseInt(arr[0]) * parseInt(b));

    a.length=0;
    a.push(arr[3]);
    a.push(arr[4]);
    let c = parseInt(a.join(""));
    let a1 =Math.round( (-(c) + d) / (2 * parseInt(arr[0])));
    let a2 =Math.round( (-(c) - d) / (2 * parseInt(arr[0])));
    a.length=0;
    a.push(a1);
    a.push(a2);
    return a.sort((x,y)=>x-y);
}
