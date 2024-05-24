const formNumberFact = document.getElementById('form-number-fact');
const inputNumber = document.getElementById('input-number');
const selectType = document.getElementById('select-type');
const blockFact = document.getElementById('block-fact');

formNumberFact.addEventListener('submit', getFacts);

function getFacts(evnt) {
	evnt.preventDefault();
	
	let URL = 'http://numbersapi.com/' + inputNumber.value + '/' + selectType.value;

	if(inputNumber.value != '') {
		sendRequest(URL);
	}
}

function sendRequest(url) {
	const xhr = new XMLHttpRequest();
	
	xhr.open('GET', url, true);
	
	inputNumber.setAttribute('disabled', 'disabled');
	
	xhr.addEventListener('load', function() {
		blockFact.innerText = this.responseText;
		
		utterText(this.responseText);
		
		inputNumber.removeAttribute('disabled');
	});
	
	xhr.send();
}

function utterText(txt) {
	const ss = window.speechSynthesis;
	
	const utterThis = new SpeechSynthesisUtterance(txt);
	
	ss.speak(utterThis);
}