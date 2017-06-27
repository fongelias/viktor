import { avgPoints } from '../avgPoints/avgPoints';


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