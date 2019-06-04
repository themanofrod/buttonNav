// Grab all the buttons
const buttons = document.querySelectorAll('.button');

// Change the button
buttons.forEach( clickedButton => {
	clickedButton.addEventListener('click', () => {
		// Remove active class
		buttons.forEach( button => {
			button.classList.remove('active');
		});
		// Add active class
		clickedButton.classList.add('active');

		// Set Background color
		const backgroundColor = document.querySelector('.active');
		document.body.style.backgroundColor = window.getComputedStyle(backgroundColor).backgroundColor;
	});
});