# Подключение config.py файла
import sys
sys.path.insert(0, "../")
from config import *
sys.path.insert(1, "resource/")
from texts import *

groupAPI, longpoll = getVKGroupAPI(longPoll = True)

def helpCommandModuleStart():
	for event in longpoll.listen():
		if (event.type == VkBotEventType.MESSAGE_NEW):
			if (event.from_user):
				userID = event.object.from_id
				msg = event.object.text
				rnd = random.randint(10, 999999)
				if ("!помощь" in msg):
					msgParts = msg.split(" ")
					userGroup = getUserGroup(userID)
					ans = commandNotFound
					if (userGroup == 1):
						if (len(msgParts) == 1):
							ans = allHelpStudents
					elif (userGroup == 2 or userGroup == 3):
						if (len(msgParts) == 1):
							ans = allHelpKurators
						elif (msgParts[1] == "авторизация"):
							ans = helpParam_auth
					groupAPI.messages.send(peer_id = userID, random_id = rnd, message = ans)

if (__name__ == "__main__"):
	try:
		helpCommandModuleStart()
	except:
		helpCommandModuleStart()