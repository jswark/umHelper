import pymysql

con = pymysql.connect(host = "хост базы", user = "имя пользователя", password = "пароль пользователя", db = "название базы данных")
cur = con.cursor()

def getUserGroup(userID):
	print(userID)