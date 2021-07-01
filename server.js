require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.info(`Server is listening at ${PORT}`);
});