import { sumSquaredErrors } from '../sumSquaredErrors/sumSquaredErrors';


export function meanSquaredErrors(pointArr, lineObj) {
	return sumSquaredErrors(pointArr, lineObj) / pointArr.length;
}