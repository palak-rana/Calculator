// Display value 
function display(val){
    document.getElementById('res').value += val
    return val
}

// Clear the display 
function clr() { 
    document.getElementById("res").value = "" 
} 

//Delete last element
function del()
{
var exp = document.getElementById("res").value ;
document.getElementById("res").value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}

 // Return result 
 function solve()
 {
 var exp = document.getElementById("res").value ;
 if(exp)
 {
    document.getElementById("res").value = eval(exp)
 }
 }