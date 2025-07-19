const n = 6;

const output = document.getElementsByTagName('ul');

const options = { weekday: 'long' };

//BEGIN
const today = new Date();

let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);

let todayhtml = document.querySelector("#today");

todayhtml.textContent = `Today is ${todaystring}.`


//Showing the following days 
for (let i = 1; i <= n; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}

