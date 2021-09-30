from os import getenv
from twilio.rest import Client

def useSMS(recipient="", sms=""):
    TWILIO_ACCOUNT_SID = getenv("TWILIO_ACCOUNT_SID")
    TWILIO_AUTH_TOKEN = getenv("TWILIO_AUTH_TOKEN")
    TWILIO_PHONE_NUMBER = getenv("TWILIO_PHONE_NUMBER")
    client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

    message = client.messages.create(
        to=recipient,
        from_=TWILIO_PHONE_NUMBER,
        body=sms
    )

    return message