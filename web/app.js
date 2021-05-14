const express = require("express");
const fs = require("fs");
const mysql = require("mysql");

const config = require("./config.js");

const con = mysql.createConnection(config.mysql);
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/page"));

con.connect((err) => {
	if (err) throw err;

	app.listen(config.port, () => {
		console.log("Server works at port " + config.port);
	});
});