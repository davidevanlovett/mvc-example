require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./connection/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	res.render('home');
});

sequelize.sync({force: false}).then(() => {
	app.listen(PORT, () => {
		console.info(`Server is listening at ${PORT}`);
	});
})