export function interceptOLS(lineObj, avg) {
	return avg[1] - lineObj.b1 * avg[0];
}