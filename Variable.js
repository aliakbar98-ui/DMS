let statuscode = 200;
let result = statuscode === 200 ? "success" : "error";
console.log("Results: " + result); // Output: "Results: success"

let age = 17;
let hasticket = true;
let vipaccess = false;
if (age >= 18 && hasticket || vipaccess) {
    console.log("You can enter the event.");
}
else {
    console.log("You cannot enter the event.");
}

let event = age >= 18 && hasticket || vipaccess ? "You can enter the event." : "You cannot enter the event.";
console.log(event); // Output: "You can enter the event."git 