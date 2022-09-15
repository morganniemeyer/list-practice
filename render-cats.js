export function styleCats(cats) {
    const li = document.createElement('li');
    li.classList.add('cat');

    const headerEL = document.createElement('h2');
    headerEL.textContent = cats.name;
    const pEl = document.createElement('p');
    pEl.textContent = cats.color + ', age ' + cats.age;

    li.append(headerEL, pEl);
    return li;
}
