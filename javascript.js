const resetButton = document.querySelector('button');
resetButton.addEventListener('mouseup', () => resetPad())
let buttonHeight = getComputedStyle(resetButton).height.substring(0, 2);

let maxSize = 0;
let usableHeight = innerHeight - buttonHeight;

if (usableHeight > innerWidth) maxSize = innerWidth
else maxSize = usableHeight;


function createPad(rowContainer, size) {
    if (size > 100 || size < 0 || size.length == 0 ) size = 100;

    rowContainer = document.querySelector('div');
    rowContainer.className = 'rowContainer';
    rowContainer.style.height = `${maxSize}px`;
    rowContainer.style.width = `${maxSize}px`;

    while (rowContainer.childElementCount < size) {
        rowContainer.appendChild(document.createElement('div'));
    }

    [...rowContainer.children].forEach((row) => {
        while(row.childElementCount < size) {
            let etchSquare = document.createElement('div');

            etchSquare.addEventListener('mouseenter', () => {
                etchSquare.className = 'etched';
                etchSquare.style.opacity = String(Number(getComputedStyle(etchSquare).opacity) - .1);
            })

            row.appendChild(etchSquare);
        }
    }) 
}

createPad(document.querySelector('div'), 50);


function resetPad() {
    let newRowContainer = document.createElement('div');
    document.querySelector('div').replaceWith(newRowContainer);
    createPad(newRowContainer, 
        prompt('What size grid would you like to sketch on? Max value is 100 to create a 100x100 grid'));
}