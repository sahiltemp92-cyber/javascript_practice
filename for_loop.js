/* 
From 1 to 50 give me common multiples of 2 and 5 using for loop
*/
for (let i = 1; i <= 50; i++) { // loop continues as long as i is less than or equal to 50
    if (i % 2 == 0 && i % 5 == 0) { // checks if i is divisible by both 2 and 5
        console.log(i) // prints the value of i
    }
}

