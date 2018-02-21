const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sidebar');
let data = require('./seedData.js')

const descriptionSchema = mongoose.Schema({
	id: Number,
	text: String

});
const informationSchema = mongoose.Schema({
	id: Number,
	title: String,
	price: String,
	hours: Object
});

const Information = mongoose.model('Information', informationSchema);
const Description = mongoose.model('Description', descriptionSchema);
let hours = [{	
				sunday: 'closed',
				monday: '11am-9pm',
				tuesday: '11am-9pm',
				wednesday: '11am-9pm',
				thursday: '11am-9pm',
				friday: '11am-11pm',
				saturday: '11am-11pm'
			}, 
			{
				sunday: '10am-2pm',
				monday: '9am-5pm',
				tuesday: '9am-5pm',
				wednesday: '9am-5pm',
				thursday: '9am-5pm',
				friday: '9am-8pm',
				saturday: '9am-9pm'				

			}, 
			{
				sunday: 'closed',
				monday: '5pm-10pm',
				tuesday: '5pm-10pm',
				wednesday: '5pm-10pm',
				thursday: '5pm-10pm',
				friday: '5pm-11pm',
				saturday: '5pm-12pm'
			}]
let descriptions = [
	'A great place for kids. Good atmosphere. At the heart of the city. Make a reservation!',
	'A brilliant culinary experience. Parties Welcome. At the heart of the city. Make a reservation!',
	'Casual dining with a twist. Our goal is to bring flavor and vibes together, and to top it off, with a view of the bay. Make a reservation!'
	];

// let prices = ['$', '$$', '$$$', '$$$$'];

const addData = (model, callback) => {
	let modelType = model;
	data.forEach(item => {
		// let price = prices[Math.floor(Math.random() * prices.length)];
		let hour = hours[Math.floor(Math.random() * hours.length)];
		let descriptionData = descriptions[Math.floor(Math.random() * descriptions.length)];
		if(modelType === Information){
			let newInfo = new Information({
				id: item.id,
				title: item.title,
				price: item.price,
				hours: hour,
			});
			console.log(newInfo);
			newInfo.save();
		}
		let newDesc = new Description({
			id: item.id,
			text: descriptionData
		});
		console.log(newDesc);
		newDesc.save();

	});
}
//addData(Information, addData(Description));

const getData = (callback) => {
	Description.find().sort({id: 1}).exec(callback);
}

getData((err, data) =>{
	console.log(data)
});

