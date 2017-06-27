export function sumPoints(pointArr) {
	return pointArr.reduce(function(prev, curr, i) {
		return [prev[0] + curr[0], prev [1] + curr[1]];
	});
}