# Подключение config.py файла
import sys
sys.path.insert(0, "../")
from config import *

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

if (__name__ == "__main__"):
	try:
		helpCommandModuleStart()
	except:
		helpCommandModuleStart()