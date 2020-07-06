$(document).ready(function () {
	function showWindow() {
		$("#main").show();

		setTimeout(hideWindow, 4000);
	}

	function hideWindow() {
		$("#main").hide();
	}
	hideWindow();

	setTimeout(showWindow, 1000);
});
