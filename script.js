let container = document.querySelector('.container');
let newDiv = document.createElement('div');



function createGrid(gridAmount) {
	for (let i = 1; i < gridAmount; i++) {
			const row = document.createElement('div');
			container.appendChild(row);

			for (let j = 0; j < gridAmount; j++) {
				const square = document.createElement('div');
				square.classList.add('square');
				square.style.width = `${960 / gridAmount}px`;
				square.style.height = `${500 / gridAmount}px`
				row.appendChild(square);
		}
	}
}


function getSize() {
	gridAmount = prompt("Enter a grid amount: ", 16);
	createGrid(gridAmount);
}

getSize();