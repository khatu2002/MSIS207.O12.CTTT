// Get the current date and time
const today = new Date();

// Get the day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = today.getDay();


// Get the hour, minute, and second
const hour12 = today.getHours() % 12 || 12;
const minute = today.getMinutes();
const second = today.getSeconds();

// Convert the hour to 12-hour format
const amOrPm = hour12 >= 12 ? "PM" : "AM";

// Display the current day and time
const currentDateTimeElement = document.getElementById("currentDateTime");
currentDateTimeElement.innerHTML = `Today is : ${daysOfWeek[day]}.<br>Current time is : ${hour12} ${amOrPm} : ${minute} : ${second} `;
