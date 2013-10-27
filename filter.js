window.FilterByMinSubmission = function (minSub) {
	return function (data) {
		return data.submission_count >= minSub;
	};
};

window.FilterCountryByMinParticipant = function (minParticipant) {
	return function (data) {
		return (IEEE.Data.Scoreboard.filter(FilterByCountry(data)).length >= minParticipant);
	};
};

window.FilterByCountry = function (country) {
	return function (data) {
		if (!data.country) {
			return false;
		}
		
		if (data.country.toLowerCase() == country.toLowerCase() || country == "") {
			return true;
		}
		
		return false;
	};
};