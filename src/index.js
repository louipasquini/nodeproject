const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('../config/routes.js')
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(process.env.SERVER_PORT, () => console.log('Running...'));