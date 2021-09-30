from pathlib import Path
from flask import request
from twilio.twiml.messaging_response import MessagingResponse
from src.response import get_response
from src.utils.gql import gql_mutation
from src.utils.ParallelDotClient import useAnalysis

def service():
    try:
        # Get all the data about the test from the request.
        sms = request.form["Body"]
        from_phone = request.form["From"]
        from_country = request.form["FromCountry"]
        from_state = request.form["FromState"]
        from_city = request.form["FromCity"]
        from_zip = request.form["FromZip"]

        # 1. Perform analysis on the message.
        analysis = useAnalysis(sms)

        # 2. Store the analysis in the database.
        gql_mutation()

        # 3. Determine a response based on the analysis and send it.
        response = get_response(sms, analysis)
        print(response)
        # useSMS(
        #     from_phone,
        #     get_response(sms, analysis)
        # )

        return ""
    except KeyError as e:
        return "SMS Release Version: 0.0.1"