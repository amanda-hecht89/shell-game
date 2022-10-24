// import functions and grab DOM elements
const button1 = document.getElementById('diffbutton1');
const button2 = document.getElementById('diffbutton2');
const button3 = document.getElementById('diffbutton3');
const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');
const winsdiv = document.getElementById('win');
const lossesdiv = document.getElementById('losses');
const totaldiv = document.getElementById('total');

// let state
let win = 0;
let losses = 0;
//let total = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const displayResults = () => {
    winsdiv.textContent = win;
    lossesdiv.textContent = losses;
    totaldiv.textContent = win + losses;
};

const resetstyles = () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
};

button1.addEventListener('click', () => {
    const randomNum1 = Math.ceil(Math.random() * 3); 
    resetstyles();
    if (randomNum1 === 1) { 
        shell1.classList.add('reveal');
        win++;
    } else if (randomNum1 === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }
    displayResults();
});
button2.addEventListener('click', () => {
    const randomNum1 = Math.ceil(Math.random() * 3); 
    resetstyles();
    if (randomNum1 === 2) { 
        shell2.classList.add('reveal');
        win++;
    } else if (randomNum1 === 3) {
        shell3.classList.add('reveal');
        losses++;
    } else {
        shell1.classList.add('reveal');
        losses++;
    }
    displayResults();
});  
button3.addEventListener('click', () => {
    const randomNum1 = Math.ceil(Math.random() * 3); 
    resetstyles();
    if (randomNum1 === 3) { 
        shell3.classList.add('reveal');
        win++;
    } else if (randomNum1 === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell1.classList.add('reveal');
        losses++;
    }
    displayResults();
});