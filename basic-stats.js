$(IEEE.Data).on("data.available", function () {
	function refreshData() {
		var filter = $("#basic-stats-ddl").val();
		var filterScoreboard = IEEE.Data.Scoreboard
									.filter(FilterByCountry(filter));
		
		// ## SCORE ## //
		
		// Average score //
		var scoreList = filterScoreboard.map(function (data) { return data.score; });
		var averagePts = Stats.Moyenne(scoreList);
		
		$("#basic-score-average").html(averagePts.toFixed(2));
		
		// Average mean //
		var mean = Stats.Mediane(scoreList);
		
		$("#basic-score-mean").html(mean.toFixed(2));
		
		// ## SUBMISSIONs ## //
		
		// Average submissions //
		var submissionList = filterScoreboard.map(function (data) { return +data.submission_count; });
		var averageSub = Stats.Moyenne(submissionList);
		
		$("#basic-sub-average").html(averageSub.toFixed(2));
		
		var mean = Stats.Mediane(submissionList);
		
		$("#basic-sub-mean").html(mean.toFixed(2));
		
		// ## Overall ## //
		var overall = (averagePts / averageSub)
		
		$("#basic-average-pts-sub").html(overall.toFixed(2));
	}
	
	refreshData();
	$("#basic-stats-ddl").change(refreshData);
});