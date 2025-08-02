function createPad(rowContainer) {
    rowContainer = document.querySelector('div');
    rowContainer.className = 'rowContainer';
    while (rowContainer.childElementCount < 16) {
        rowContainer.appendChild(document.createElement('div'));
    }

    [...rowContainer.children].forEach((row) => {
        while(row.childElementCount < 16) {
            let etchSquare = document.createElement('div');

            etchSquare.addEventListener('mouseenter', () => {
                etchSquare.className = 'etched';
                etchSquare.style.opacity = String(Number(getComputedStyle(etchSquare).opacity) - .1);
            })

            row.appendChild(etchSquare);
        }
    }) 
}

createPad();

function resetPad() {
    let newRowContainer = document.createElement('div');
    document.querySelector('div').replaceWith(newRowContainer);
    createPad(newRowContainer);
}

const resetButton = document.querySelector('button');
resetButton.addEventListener('mouseup', () => resetPad())