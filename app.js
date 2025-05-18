const express = require('express');
const candidateRoutes = require('./routing/candidates');

const app = express();
app.use(express.json());
app.use('/candidates', candidateRoutes); // route for the candidate endpoint

const PORT = 3000;

app.listen(PORT, () => {
	console.log("Server listening on PORT  " + PORT);
});

