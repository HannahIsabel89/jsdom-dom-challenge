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
let likeBtn = document.getElementById('heart');
let numLikes = 0;
let likesList = document.getElementById('list');

heart.addEventListener('click', function () {
    let listOfLikes = document.createElement('ul');
    listOfLikes.classList.add('list');
    listOfLikes.innerText = `${seconds} has been liked  time`;
    likesList.appendChild(listOfLikes);
})


// pause button - pause counter, disable all buttons, show resume