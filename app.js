const express = require('express');
const candidateRoutes = require('./routing/candidates');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/candidates', candidateRoutes); // route for the candidate endpoint

const PORT = 3000;
const DATABASE_URI = "mongodb://localhost:27017/recruitment-pipeline";

mongoose.connect(DATABASE_URI).then(() => {
	console.log('App connected to MongoDB');

	app.listen(PORT, () => {
		console.log("Server listening on PORT  " + PORT);
	});
}).catch(err => console.error('Connection error with MongoDB: ', err));

