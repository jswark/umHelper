import pymysql

con = pymysql.connect(host = "хост базы", user = "имя пользователя", password = "пароль пользователя", db = "название базы данных")
con.autocommit(True)
cur = con.cursor()

def getUserGroup(userID):
	cur.execute("SELECT `userGroup` FROM `users` WHERE `ID` = " + str(userID))
	res = cur.fetchone()
	print(res)
	if (res == None):
		return None
	else:
		return res[0]