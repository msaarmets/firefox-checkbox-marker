// 1. Define variables used by script
var firstCheckboxClickedIndex = undefined;
var lastCheckboxClickedIndex = undefined;
var autoClick = false;

$("document").ready(function () {
	// 2. Get first click (without shift-key) and first checkbox index
	$("input:checkbox:visible").click(function (e) {
		var checkBoxes = $("input:checkbox:visible");

		// Only if checkboxes are clicked by user
		if (autoClick == false) {
			if (!e.shiftKey) {
				firstCheckboxClickedIndex = checkBoxes.index(this);
			}
			// 3. Get last checkbox (clicked with shift-key)
			else if (e.shiftKey) {
				lastCheckboxClickedIndex = checkBoxes.index(this);
				clickSelected(firstCheckboxClickedIndex, lastCheckboxClickedIndex);
			}
		}
	});

	// Check by mouse click-dragging
	$("input:checkbox").dragCheck();
});

// 4. Click all checkboxes from first to last
function clickSelected(from, to) {
	autoClick = true;
	var checkBoxes = $("input:checkbox:visible");

	for (i = from + 1; i < to; i++) {
		checkBoxes.get(i).click();
	}

	autoClick = false;
}
