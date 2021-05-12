from authModuleFuncs import *

groupAPI, longpoll = getVKGroupAPI(longPoll = True)

def authModuleStart():
	for event in longpoll.listen():
		if (event.type == VkBotEventType.MESSAGE_NEW):
			if (event.from_user):
				msg = event.object.text
				rnd = random.randint(10, 999999)

if __name__ == "__main__":
	try:
		authModuleStart()
	except:
		authModuleStart()
