//data
const data = require('../data/seedData.js');
const {descriptions, possibleHours, mins} = require('../data/randomData.js');
const addresses = require('../data/addresses.js');
//generators
const hourGen = require('./time.js');
const {coordGen} = require('./coordinateFinder.js');
const {Information} = require('./informationModel.js')

const randomIndex = (length) => {
	let index = Math.floor(Math.random() * Math.floor(length));
	return index;
}
const addData = (item, coordinates) => {
	let hours = possibleHours[randomIndex(descriptions.length)];
	let descriptionData = descriptions[randomIndex(descriptions.length)];
	let deliveryMin = mins[randomIndex(descriptions.length)];

	let newInfo = new Information({
		id: item.id,
		title: item.title,
		location: coordinates,
		minimumDelivery: deliveryMin,
		price: item.price,
		text: descriptionData,
		hours: hours
	});
	newInfo.save();
}

data.forEach((item, i) => {
	search(addresses[i], (latLong)=>{
		addData(item, latLong);
	});
});

//----INVOKATION---

//addData(Information);
