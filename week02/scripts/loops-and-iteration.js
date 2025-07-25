const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
for (let i = 0; i < studentReport.length; i++){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Repeat the previous programming snippet by using a while loop.
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

// Repeat the previous programming snippet by using a for...in loop.
for (let i in studentReport){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Use any type of repetition (looping) statement to dynamically produce the day names(Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.
