console.log('You are in:');
for(var experimentNumber=0; experimentNumber<window.optimizely.activeExperiments.length; experimentNumber++) {
	var experimentId = window.optimizely.activeExperiments[experimentNumber];
	console.log('v'+window.optimizely.variationMap[experimentId]+'('+window.optimizely.variationNamesMap[experimentId]+') of exp '+experimentId+' ('+window['optimizely'].data.experiments[experimentId].name+')');
}
