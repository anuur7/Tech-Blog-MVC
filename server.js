const express = require('express');
const session = require('express-session');
const exHandleBars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;