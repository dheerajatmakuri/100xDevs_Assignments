// 1. Create a counter in Javascript: The task is to create a counter in JavaScript that counts down from 30 to 0.

let counter = 30;
let countdown = setInterval(function() {
    console.log(counter);
    counter--;
    if (counter < 0) {
        clearInterval(countdown);
        console.log("Countdown complete!");
    }
}, 1*1000);



// 2. Calculate the time it takes between a setTimeout call and the inner function actually running: 
function counter2() {
    let BfrTime = new Date().getTime();
    for (let i = 30; i > 0; i--) {
        console.log(i);
    }
    
    return BfrTime;
}

setTimeout(() => {
    let BfrTime = counter2();
    let AfterTime = new Date().getTime();
    
    console.log("Time difference: " + (AfterTime - BfrTime) + " ms");
}, 1* 1000);

// 3. Create a terminal clock: The task is to create a terminal clock that displays the time in the format HH:MM:SS.

setInterval(() => {
    console.clear();
    let dateNow = new Date();
    
    console.log(dateNow.getHours()+":"+ dateNow.getMinutes()+":"+dateNow.getSeconds());
}, 1* 1000);
