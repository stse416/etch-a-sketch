const rowContainer = document.querySelector('div');

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