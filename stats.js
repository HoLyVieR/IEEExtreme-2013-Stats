(function () {
	var Stats = {};
	
	Stats.Somme = function (lst) {
		return lst.reduce(function (p, c) { return p + c; });
	};
	
	Stats.Moyenne = function (lst) {
		return Stats.Somme(lst) / lst.length;
	};
	
	Stats.Mediane = function (lst) {
		var mid = lst.length / 2;
		
		if (lst.length % 2 === 0) {
			return (lst[mid - 1] + lst[mid]) / 2;
		} else {
			return lst[Math.floor(mid)];
		}
	};
	
	Stats.EcartType = function (lst) {
		var moy = Stats.Moyenne(lst);
		
		return Math.sqrt(lst.reduce(function (p, c) { return p + Math.pow(moy - c, 2); }) / lst.length);
	};
	
	Stats.Variance = function (lst) {
		return Stats.EcartType(lst) / Stats.Moyenne(lst);
	};
	
	Stats.Skewness = function (lst) {
		var n = lst.length;
	
		return (n * lst.reduce(function (p, c) { return p + Math.pow(moy - c, 3); })) / 
			   ((n - 1) * (n  - 2) * Math.pow(Stats.EcartType(lst), 3))
	};
	
	Stats.Histogramme = function (lst, min, max, step) {
		var count = [];
		
		for (var i = min; i < max; i += step) {
			count.push(lst.filter(function (a) { return a >= i && a < i + step; }).length);
		}
		
		return count;
	};
	
	window.Stats = Stats;
}());