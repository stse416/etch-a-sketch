const rowContainer = document.querySelector('div');

while (rowContainer.childElementCount < 16) {
    rowContainer.appendChild(document.createElement('div'));
}

[...rowContainer.children].forEach((row) => {
    while(row.childElementCount < 16) {
        row.appendChild(document.createElement('div'));
    }
})