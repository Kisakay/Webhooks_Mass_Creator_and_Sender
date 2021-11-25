import requests
import os
from os import system
system("title Discord Webhook Sender / Coded by Ezermoz#0001.")
print("Made by Ezermoz#0001")
from discord_webhook import DiscordWebhook
tokenstel4Wh = "a"
tokenstelLogic = "a"

print("""   ___  _                     __  _      __    __   __             __     ____            __       """)
print("""  / _ \(_)__ _______  _______/ / | | /| / /__ / /  / /  ___  ___  / /__  / __/__ ___  ___/ /__ ____""")
print(""" / // / (_-</ __/ _ \/ __/ _  /  | |/ |/ / -_) _ \/ _ \/ _ \/ _ \/  '_/ _\ \/ -_) _ \/ _  / -_) __/""")
print("""/____/_/___/\__/\___/_/  \_,_/   |__/|__/\__/_.__/_//_/\___/\___/_/\_\ /___/\__/_//_/\_,_/\__/_/   """)
print(" ")

lines = []
webhook_stel = input("""What's is the Webhook?\n (txt) if the webhook is on .txt > """)

linesW = open("webhook.txt").read().splitlines()
webhookintxt = len(linesW)

with open('message.txt') as g:
    linesM = g.read()

if webhook_stel == "txt":
    print("")
    print("[TXT] >", webhookintxt, "Webhook Load !")
    system(f"title Discord Webhook Sender / {webhookintxt} webhook found in txt ! / Coded by Ezermoz#0001.")
    print("")
    tokenstel4Wh = input("""[WEBHOOK IN TXT] > What's the message?\n (txt) if the message is on .txt > """)
else:
    tokenstelLogic = input("""What's the message?\n (txt) if the message is on .txt > """)

# TXT & TXT
if webhook_stel == 'txt' and tokenstel4Wh == 'txt':
    webhookF = DiscordWebhook(url=linesW, content=linesM)
    respondF = webhookF.execute()
    print("")
    print("Finnish, Sent ! 1")
    input()

#TXT & MESSAGE
if webhook_stel == 'txt' and tokenstel4Wh != 'txt':
    webhookF = DiscordWebhook(url=linesW, content=tokenstel4Wh)
    respondF = webhookF.execute()
    print("")
    print("Finnish, Sent ! 2")
    input()

#MESSAGE & TXT
if webhook_stel != 'txt' and tokenstelLogic == 'txt':
    webhookLogic = DiscordWebhook(url=webhook_stel, content=linesM)
    respondLogic = webhookLogic.execute()
    print("")
    print("Finnish, Sent ! 3")
    input()

#MESSAGE & MESSAGE
if webhook_stel != 'txt' and tokenstelLogic != 'txt':
    webhookLogicL = DiscordWebhook(url=webhook_stel, content=tokenstelLogic)
    respondLogicL = webhookLogicL.execute()
    print("")
    print("Finnish, Sent ! 4")
    input()