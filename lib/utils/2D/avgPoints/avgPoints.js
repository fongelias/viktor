import { sumPoints } from '../sumPoints/sumPoints';


export function avgPoints(pointArr, pointSums) {
	if(!pointSums) {
		pointSums = sumPoints(pointArr);
	}

	return [pointSums[0] / pointArr.length, pointSums[1] / pointArr.length];
}