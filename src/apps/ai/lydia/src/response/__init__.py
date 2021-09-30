import spacy

def get_response(txt="", analysis=None):
    if len(txt) == 0 or analysis is None:
        return None
    else:
        # Start Natural Language Process and analyze the message.
        nlp = spacy.load(str(Path("./.models/spacy_model").resolve()))
        doc = nlp(sms)

        for ent in doc.ents:
            txt = ent.text
            label = ent.label_
            print(txt, label)

        return "This is a test!"