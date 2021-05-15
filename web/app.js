const express = require("express");
const fs = require("fs");
const mysql = require("mysql");

const config = require("./config.js");
const system = require("./system.js");

const con = mysql.createConnection(config.mysql);
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/page"));

con.connect((err) => {
	if (err) throw err;

	app.get("/", (req, res) => {
		var cookies = system.getCookie(req.headers);
		if (cookies.ui == null || cookies.us == null || cookies.uc == null) {
			var options = { maxAge: -1 };
			res.cookie("ui", "", options);
			res.cookie("us", "", options);
			res.cookie("uc", "", options);
			fs.readFile("page/login.html", "utf-8", (err, data) => {
				if (err) {
					system.errorLog(err);
					return res.end("404");
				}
				res.end(data);
			});
		} else {
			// TO-DO проверка авторизации
		}
	});

	app.post("/functions/:method", jsonParser, (req, res) => {
		if (req.params["method"] == "generateCode") {
			var code = system.generateString(8);
			var startTime = system.getDate();
			con.query("INSERT INTO `authCodes` VALUES(NULL, \"" + code + "\", \"" + startTime + "\", 0)", (err, data) => {
				if (err) {
					system.errorLog(err);
					return res.json({"status": "error", "msg": "Внутренняя ошибка сервера!"});
				}
				return res.json({"status": "ok", "response": code});
			});
		}
	});

	app.listen(config.port, () => {
		console.log("Server works at port " + config.port);
	});
});