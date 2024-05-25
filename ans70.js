// Q 70 Day 24
// This function prints numbers from 3 to 15 using a loop
function printNumbersWithLet() {
    for (var i = 1; i <= 5; i++) {
        console.log(i); // Logs numbers 1 through 5
    }
}
;
printNumbersWithLet();
// Uses let for loop variable i
// i is not accessible here, outside the loop, because it's defined with let
// This shows that let limits i to the loop, 
//preventing errors from using i where it's not intended.
function showNumbersWithLet() {
    for (var a = 12; a <= 15; a++) {
        console.log(a);
    }
}
;
showNumbersWithLet();
