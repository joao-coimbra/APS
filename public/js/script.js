function showPress() {
	document.getElementById("pdrop").style.opacity = "1";
}

function hiddenPress() {
	document.getElementById("pdrop").style.opacity = "0";
}

function alterarEstiloMenu(num) {
	
	let el;

	switch (num) {
		case 1:
			el = document.getElementById("linkHome");

			if (el.style.color == "green") {
				el.style.color = "black";
			}
			else {
				el.style.color = "green";
			}
			break;
			
		case 2:
			el = document.getElementById("linkReciclo");

			if (el.style.color == "green") {
				el.style.color = "black";
			}
			else {
				el.style.color = "green";
			}
			break;
			
		case 3:
			el = document.getElementById("linkAgua");

			if (el.style.color == "green") {
				el.style.color = "black";
			}
			else {
				el.style.color = "green";
			}
			break;

		case 4:
			el = document.getElementById("linkOutros");

			if (el.style.color == "green") {
				el.style.color = "black";
			}
			else {
				el.style.color = "green";
			}
			break;

		default:
			break;
	}



}