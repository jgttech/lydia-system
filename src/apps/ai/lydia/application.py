import spacy
from flask import Flask
from dotenv import load_dotenv
from src.controllers import index
from src.controllers import sms

load_dotenv()
spacy.prefer_gpu()

app = Flask(__name__)
app.register_blueprint(index.blueprint)
app.register_blueprint(sms.blueprint)

if __name__ == "__main__":
    app.run(debug=True)