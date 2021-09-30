import spacy
from pathlib import Path

def analyze_sms(sms=""):
    if len(sms) == 0:
        return None
    else:
        print(Path(""))
        print("SMS:", sms)
        return "Analyzing"