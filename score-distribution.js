$(IEEE.Data).on("data.available", function () {
	
	function refreshData() {
		var filter = $("#country-distribution-ddl").val();
		var filterScoreboard = IEEE.Data.Scoreboard
									.filter(FilterByCountry(filter));
		
		var scoreList = filterScoreboard.map(function (data) { 
			return data.score; 
		});
		
		var scoreDistribution = Stats.Histogramme(scoreList, 0, 2400, 240);
		
		chart.series[0].setData(scoreDistribution);
	}
	
	$("#country-distribution-ddl").change(refreshData);
	
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'score-distribution-graph',
			type: 'column'
		},
		title: { text: 'Number of team by score range' },
		xAxis: {
			categories: [
				'0-240', 
				'240-480', 
				'480-620', 
				'620-800', 
				'800-1040', 
				'1040_1280', 
				'1280-1520',
				'1520-1760',
				'1760-2000',
				'2000-2400']
		},
		plotOptions: {
	        column: { pointPadding: 0.2, borderWidth: 0 }
	    },
		yAxis: {
			title: { text: 'Number of team'	}
		},
		series: [
			{ name: 'Number of team'  , data: [0,0,0,0,0,0,0,0,0,0] }
		]
	});
	
	refreshData();
});