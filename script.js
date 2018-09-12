const container = document.querySelector('.container');
const resetMe = document.querySelector('.reset');



// Creates the grid
function createGrid(gridAmount) {
	for (let i = 0; i < gridAmount; i++) {
			const row = document.createElement('div');
			row.classList.add('outterDiv');
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

// Creates a button element and assigns an ID of 'btn1'
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
btn1.setAttribute('id', 'btn1');
btn2.setAttribute('id', 'btn2');
resetMe.appendChild(btn2);
resetMe.appendChild(btn1);
document.getElementById('btn1').textContent = "Reset me";
document.getElementById('btn2').textContent = "Change Grid Size";

btn2.addEventListener('click', changeGrid);
function changeGrid() {
	/*const destroyChild = document.getElementsByClassName('square');
	destroyChild[0].parentNode.removeChild(destroyChild[0]);*/
	container.innerHTML = null;
	getSize();
}
	


// A function that clears the screen when the Reset button is clicked
btn1.addEventListener('click', resetGrid);
function resetGrid(event) {
	document.querySelectorAll('.square').forEach(square => {
        const red = 255;
	    const green = 255;
	    const blue = 255;
	    return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
	})
}


// Function that changes the color of the grid on mouseover
document.querySelector('.container').addEventListener('mouseover', getColor);
function getColor(event) {
	if (event.target.classList.contains('container') || event.target.classList.contains('outterDiv')) {
  	console.log('Not colored');
    return;
  }
  const square = event.target;
  const red = Math.floor((Math.random() * 256) + 1);
  const green = Math.floor((Math.random() * 256) + 1);
  const blue = Math.floor((Math.random() * 256) + 1);
  return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
  return square.style.backgroundColor = `rgb(${red},${green},${blue})`;
}


// Prompts the user for the grid size to be entered
function getSize() {
	gridAmount = prompt("Enter a grid amount: ", 16);
	createGrid(gridAmount);
}


getSize();
