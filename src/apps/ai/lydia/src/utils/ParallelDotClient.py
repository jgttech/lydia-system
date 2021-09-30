import paralleldots
from os import getenv
paralleldots.set_api_key(getenv("PARALLEL_DOTS_API_KEY"))

def useEmotionAnalysis(txt=""):
    return None if len(txt) == 0 else paralleldots.emotion(txt)["emotion"]

def useSentimentAnalysis(txt=""):
    return None if len(txt) == 0 else paralleldots.sentiment(txt)["sentiment"]

def useSarcasmAnalysis(txt=""):
    return None if len(txt) == 0 else paralleldots.sarcasm(txt)

def useAnalysis(txt=""):
    if len(txt) == 0:
        return None
    else:
        return {
            "emotion": paralleldots.emotion(txt),
            "sentiment": paralleldots.sentiment(txt),
            "sarcasm": paralleldots.sarcasm(txt)
        }