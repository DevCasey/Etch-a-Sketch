let container = document.querySelector('.container');
let id = document.querySelector('#id');
let resetMe = document.querySelector('.reset');

// Creates the grid
function createGrid(gridAmount) {
	for (let i = 0; i < gridAmount; i++) {
			const row = document.createElement('div');
			container.appendChild(row);

			for (let j = 0; j < gridAmount; j++) {
				const square = document.createElement('div');
				square.classList.add('square');
				square.style.width = `${860 / gridAmount}px`;
				square.style.height = `${400 / gridAmount}px`;
				row.appendChild(square);
		}
	}
}


const btn1 = document.createElement('button');
btn1.setAttribute('id', 'btn1');
resetMe.appendChild(btn1);
document.getElementById('btn1').textContent = "Reset me";


// Function that gets a random color on mouseover


document.querySelector('.container').addEventListener('mouseover', getColor)

function getColor(event) {
	if (event.target.classList.contains('container')) {
  	console.log('container');
    return;
  }
  const square = event.target;
	let red = Math.floor((Math.random() * 256) + 1);
	let green = Math.floor((Math.random() * 256) + 1);
	let blue = Math.floor((Math.random() * 256) + 1);
	return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
	
}


// Prompts the user for the grid size to be entered
function getSize() {
	gridAmount = prompt("Enter a grid amount: ", 16);
	createGrid(gridAmount);
}

getSize();

