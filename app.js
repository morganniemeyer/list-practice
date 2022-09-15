// import functions and grab DOM elements
import { candy1 } from './candy-data.js';
import { styleCandy } from './render-candy.js';

const sugarList = document.getElementById('candy-list');

function displayCandies() {
    sugarList.innerHTML = '';

    for (let candy of candy1) {
        const candyEl = styleCandy(candy);
        sugarList.append(candyEl);
    }
}
// initialize global state
displayCandies();
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
