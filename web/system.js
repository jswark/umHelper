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

module.exports.errorLog = (msg) => {
	console.log(msg);
}