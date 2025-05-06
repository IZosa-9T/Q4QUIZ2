function calcaverage() {
	var M = parseInt(document.getElementById("Math").value);
	var S = parseInt(document.getElementById("Science").value);
	var E = parseInt(document.getElementById("English").value);

	var AVG = (M + S + E) / 3;

	if (AVG <= 74.99) {
		window.alert('Your average score, ' + Math.round(AVG) + ', is considered poor.');

	} else if (AVG >= 75 && AVG <= 79.99) {
		window.alert('Your average score, ' + Math.round(AVG) + ', needs improvement.');

	} else if (AVG >= 80 && AVG <= 86.99) {
		window.alert('Your average score, ' + Math.round(AVG) + ', is considered satisfactory.');

	} else if (AVG >= 87 && AVG <= 93.99) {
		window.alert('Your average score, ' + Math.round(AVG) + ', is considered above satisfactory.');

	} else if (AVG >= 94 && AVG <= 100) {
		window.alert('Your average score, ' + Math.round(AVG) + ', is considered excellent.');

	} else {
		window.alert('Your input is invalid.');
	}
}