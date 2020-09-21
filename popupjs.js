document.getElementById("submit_btn").addEventListener("click", sendAjax);

// Ajax function to send Url and email to db
function sendAjax() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// console.log("responseText:", xhttp.responseText);
		}
		if (this.readyState == 4) {
			// console.log("response: ", xhttp.response);
		}
	};

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// Send data by Ajax
		var url = tabs[0].url;
		var email = document.getElementById("email_input").value;
		var params = JSON.stringify({ url: url, email: email, browser: "Firefox" });
		xhttp.open("POST", "https://blindbow.tk/api/new_feedback", true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(params);

		// Show confirmation
		var initialDiv = document.getElementById("initial");
		var resultDiv = document.getElementById("result");
		initialDiv.style.display = "none";
		resultDiv.innerHTML = "<h1>Thank you for your feedback!</h1>";
		resultDiv.innerHTML +=
			'<div style="width: 50px"><img src="smile-o.svg" id="frown"></img></div>';
	});
}
