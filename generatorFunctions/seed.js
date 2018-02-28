//data
const restaurants = require('../data/seedData.js');
const {descriptions, possibleHours, mins} = require('../data/randomData.js');
const addresses = require('../data/addresses.js');
//generators
const {coordGen} = require('./coordinateFinder.js');

const {Information} = require('./informationModel.js')
let seededRestaurants = [];

const randomIndex = (length) => {
	let index = Math.floor(Math.random() * Math.floor(length));
	return index;
}
const addData = (restaurants, callback) => {
	restaurants.forEach(item => {
		let hours = possibleHours[randomIndex(descriptions.length)];
		let descriptionData = descriptions[randomIndex(descriptions.length)];
		let deliveryMin = mins[randomIndex(descriptions.length)];
		item['minimumDelivery'] = item['minimumDelivery'];
		item['minimumDelivery'] = deliveryMin;
		item['hours'] = item['hours'];
		item['hours'] = hours;
		item['text'] = item['text'];
		item['text'] = descriptionData;

		let newInfo = new Information({
			id: item.id,
			title: item.title,
			location: item.location,
			minimumDelivery: item.minimumDelivery,
			price: item.price,
			text: item.text,
			hours: item.hours
		});

		seededRestaurants.push(newInfo);
	});
	callback(seededRestaurants);
}

const searchCoordinates = (restaurants, addresses, fn) =>{
	restaurants.forEach((item, incrementAddress) => {
		search(addresses[incrementAddress], (latLong)=> {
			item['location'] = item['location'];
			item['location'] = latLong;
			if(incrementAddress === restaurants.length - 1){
				fn(restaurants, save);
				return;
			}
			incrementAddress = incrementAddress + 1 
		});
	});	
}


const save = (seededRestaurants) => {
	console.log(seededRestaurants);
	Information.create(seededRestaurants)
}

searchCoordinates(restaurants, addresses, addData);
exports.randomIndex = randomIndex;
exports.addData = addData;
