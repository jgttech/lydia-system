import spacy
import asyncio
from src.spacy import train

if __name__ == "__main__":
    spacy.prefer_gpu()
    loop = asyncio.get_event_loop()
    loop.run_until_complete(train.start())
    loop.close()