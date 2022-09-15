// import functions and grab DOM elements
import { candy1 } from './candy-data.js';
import { styleCandy } from './render-candy.js';
import { cattos } from './cats-data.js';
import { styleCats } from './render-cats.js';

const sugarList = document.getElementById('candy-list');
const catList = document.getElementById('cat-list');

function displayCandies() {
    sugarList.innerHTML = '';

    for (let candy of candy1) {
        const candyEl = styleCandy(candy);
        sugarList.append(candyEl);
    }
}

function displayCats() {
    catList.innerHTML = '';

    for (let cats of cattos) {
        const catEl = styleCats(cats);
        catList.append(catEl);
    }
}
// initialize global state
displayCandies();
displayCats();
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
