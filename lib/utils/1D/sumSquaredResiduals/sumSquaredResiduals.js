import { avgPoints } from '../avgPoints/avgPoints';

/** 
Returns the SSR (sum of squared residuals) for a 2D coordinate array
@param {array} pointArr - An array containing a set of coordinate points
@param {array} avg - An array containing the average of all y values and all x values
@return {number} A number representing the SSR of the points in pointArr given the average value
*/
export function sumSquaredResiduals(pointArr, avg) {
	if(!avg) {
		avg = avgPoints(pointArr);
	}
	
	var numerator = 0;
	var denomenator = 0;
	var xmean = avg[0];
	var ymean = avg[1];

	for(var i = 0; i < pointArr.length; i++) {
		var x = pointArr[i][0];
		var y = pointArr[i][1];

		numerator += (x - xmean) * (y - ymean);
		denomenator += (x - xmean) * (x - xmean);
	}

	return numerator / denomenator;
}