require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./connection/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const SHOULD_LOG = process.env.NODE_ENV === 'develop';

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./controllers'));

sequelize.sync({force: false, logging: SHOULD_LOG}).then(() => {
	app.listen(PORT, () => {
		console.info(`Server is listening at ${PORT}`);
	});
})