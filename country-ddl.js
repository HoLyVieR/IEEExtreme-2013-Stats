if (!window.IEEE) window.IEEE = {};
if (!window.IEEE.Data) window.IEEE.Data = {};

$(IEEE.Data).on("data.available", function () {

	// ## Getting the country list ## //
	var listCountry = IEEE.Data.Scoreboard.map(function (data) {
		return data.country;
	});
	
	listCountry = listCountry.reduce(function (prev, current) {
		var found = false;
		
		if (!current) {
			return prev;
		}
		
		for (var i=0; i<prev.length; i++) {
			if (prev[i].toLowerCase() == current.toLowerCase()) {
				found = true;
				break;
			}
		}
	
		if (!found) {
			prev.push(current);
		}
		
		return prev;
	}, []);
	
	listCountry.sort();
	
	window.IEEE.Data.Country = listCountry;

	$(".country-ddl").each(function () {
		for (var i=0; i<listCountry.length; i++) {
			var opt = document.createElement("option");
			opt.text = listCountry[i];
			opt.value = listCountry[i];
			
			this.add(opt);
		}
	});
});