module.exports.getCookie = (headers) => {
	var cookiesArr = headers.cookie.split("; ");
	var cookies = {};
	for (var i = 0; i < cookiesArr.length; i++) {
		var temp = cookiesArr[i].split("=");
		if (temp[1] == "") cookies[temp[0]] = null;
		else cookies[temp[0]] = temp[1];
	}
	return cookies;
}

module.exports.generateString = (size) => {
	const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
	var out = "";
	for (var i = 0; i < size; i++) out += alphabet[randInt(0, alphabet.length - 1)];
	return out;
}

module.exports.getDate = () => {
	var date = new Date();
	var out = "";
	if (date.getDate() < 10) out += "0";
	out += date.getDate() + ".";
	if (date.getMonth() + 1 < 10) out += "0";
	out += (date.getMonth() + 1);
	out += "." + date.getFullYear() + " ";
	if (date.getHours() < 10) out += "0";
	out += date.getHours() + ":";
	if (date.getMinutes() < 10) out += "0";
	out += date.getMinutes() + ":";
	if (date.getSeconds() < 10) out += "0";
	out += date.getSeconds();
	return out;
}

module.exports.errorLog = (msg) => {
	console.log(msg);
}

function randInt(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}