let container = document.querySelector('.container');
let newDiv = document.createElement('div');



function createGrid(gridAmount) {
	gridAmount = prompt('Enter grid amount:', 16)
	for (let i = 1; i <= gridAmount; i++) {
			let div = document.createElement('div');
			div.classList.add('square');
			container.appendChild(div);
	}
}

createGrid()