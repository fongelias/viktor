export function sumSquaredErrors(pointArr, lineObj) {
	return pointArr.reduce(function(prev, curr, i) {
		if (Array.isArray(prev)) {
			prev = Math.pow(lineObj.b1 * prev[0] + lineObj.b0 - prev[1], 2);
		}

		const actualY = lineObj.b1 * curr[0] + lineObj.b0;

		return prev + Math.pow(actualY - curr[1], 2);
	})
}