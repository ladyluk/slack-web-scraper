import os
from datetime import datetime
from bs4 import BeautifulSoup
import pandas as pd

#tags = []
with open("/Users/ladygrey/slack-web-scraper/slack-data/Channel-incidents-2023-07-18-02-33-36.html") as fp:
    soup = BeautifulSoup(fp,"html.parser")
    messages = soup.find_all("span", dir = "auto")

message_dict={"Incident_ID" :[], "Incident_Title":[], "Incident_Link":[], "Incident_Channel_ID":[], "Incident_Channel":[]}

for message in messages:
    title = message.contents[0]
    if len(message.contents)==5 and title[0:8]=="Incident":
        id = message.contents[4].attrs["data-stringify-link"][-3:]
        title = message.contents[0]
        channel_id = message.contents[2].attrs["data-channel-id"]
        channel = message.contents[2]["href"]
        ops_link = message.contents[4]["href"]
        
        message_dict["Incident_ID"].append(id)
        message_dict["Incident_Title"].append(title)
        message_dict["Incident_Link"].append(ops_link)
        message_dict["Incident_Channel_ID"].append(channel_id)
        message_dict["Incident_Channel"].append(channel)

        # print("INCIDENT_ID: ", id)
        # print("INCIDENT_TITLE: ", title)
        # print("INCIDENT_LINK: ", ops_link, "\n")
        # print("INCIDENT_CHANNEL_ID: ", channel_id)
        # print("INCIDENT_CHANNEL: ", channel)

# print(message_dict["Incident_ID"])
df = pd.DataFrame.from_dict(message_dict)
print(df.head())

dt_string = datetime.now().strftime("%d-%m-%Y-%H-%M-%S")
df.to_csv(os.path.join(os.pardir,'slack-data/incidents-'+ dt_string +'.csv'))
    