$(IEEE.Data).on("data.available", function () {
	
	var availContry = IEEE.Data.Country.filter(FilterCountryByMinParticipant(10));
	var listCountry = availContry.map(function (country) {
		var teams = IEEE.Data.Scoreboard
						.filter(FilterByCountry(country));
			
		var scoreList = teams.map(function (data) { return data.score; });
		var averagePts = Stats.Moyenne(scoreList);
		
		var submissionList = teams.map(function (data) { return +data.submission_count; });
		var averageSubmission = Stats.Moyenne(submissionList);
		
		return { name : country, score : (averagePts / averageSubmission) };
	});
	
	listCountry.sort(function (a, b) {
		return b.score - a.score;
	});
	
	var topContry = listCountry.slice(0, 10);
	var label = topContry.map(function (data) { return data.name; });
	var score = topContry.map(function (data) { return +data.score.toFixed(2); });
	
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'average-pts-sub-graph',
			type: 'column'
		},
		title: { text: 'Efficiency per country' },
		xAxis: {
			categories: label
		},
		plotOptions: {
	        column: { pointPadding: 0.2, borderWidth: 0 }
	    },
		yAxis: {
			title: { text: 'Efficiency (average points / average submission)'	}
		},
		series: [
			{ name: 'Efficiency'  , data: score }
		]
	});
	
});