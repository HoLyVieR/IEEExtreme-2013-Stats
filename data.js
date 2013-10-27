if (!window.IEEE) window.IEEE = {};
if (!window.IEEE.Data) window.IEEE.Data = {};

$(function () {
	
	$.getJSON("all.json", function (data) {
		window.IEEE.Data.Scoreboard = data;
		
		$("#loading").hide();
		$("#main").show();
		$(IEEE.Data).trigger("data.available");
	});
	
});