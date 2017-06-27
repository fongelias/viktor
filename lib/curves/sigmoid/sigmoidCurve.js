export default function sigmoidCurve(x) {
	return 1 / (1 + Math.pow(Math.E, -x));
}