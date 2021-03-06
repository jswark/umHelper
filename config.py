import random
import vk_api
from vk_api.bot_longpoll import VkBotLongPoll, VkBotEventType
from sqlRequests import *

test_chat_id = 1
PF_chat_id = 2
pool_chat_id = 3

def getVKUserAPI():
	vk_session = vk_api.VkApi("Логин", "Пароль")
	vk_session.auth()
	vkUserAPI = vk_session.get_api()
	return vkUserAPI

def getVKGroupAPI(longPoll = False):
	vk_session = vk_api.VkApi(token = "ключ API")
	vkGroupAPI = vk_session.get_api()
	if (longPoll == False):
		return vkGroupAPI
	else:
		longpoll = VkBotLongPoll(vk_session, "ID сообщества")
		return vkGroupAPI, longpoll