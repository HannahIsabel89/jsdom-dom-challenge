// timer increment once loaded
let seconds = 0;
let el = document.getElementById('counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds;
}

var cancel = setInterval(incrementSeconds, 1000);

// increment and decrement the timer using + and -
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener('click', function () {
    seconds += 1;
    el.innerHTML = seconds;
});

minus.addEventListener('click', function () {
    seconds -= 1;
    el.innerHTML = seconds;
});


// like an individual number and see the number of likes


// pause button - pause counter, disable all buttons, show resume