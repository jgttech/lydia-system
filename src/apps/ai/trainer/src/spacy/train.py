import spacy
import random
import json
from sys import exit
from pathlib import Path
from src.utils import attr
from src.utils.gql import gql_query
from src.utils.config import yaml_config
from src.graphql.queries import lexicon_all
from src.utils.formatter import toSpacyFormat

async def start(save=True):
    try:
        config = await yaml_config("trainer")

        # Iterations for training.
        EPOCHS = int(config["epochs"])

        # Get data from database
        TRAINING_DATA = await toSpacyFormat(
            await attr(
                await gql_query(lexicon_all),
                "data.lexiconSearchByInput.data"
            )
        )

        MODEL = config["model"]
        model = Path(f"../lydia/{MODEL}").resolve()
        new_model = not model.is_dir()

        # Load existing model or create a new one (if none is found).
        nlp = spacy.load(model) if model.is_dir() else spacy.blank("en")

        # Create or get the Natural Entity Recognizer
        if "ner" not in nlp.pipe_names:
            ner = nlp.create_pipe("ner")
            nlp.add_pipe(ner, last=True)
        else:
            ner = nlp.get_pipe("ner")

        for _, data in TRAINING_DATA:
            for entity in data["entities"]:
                ner.add_label(entity[2])

        # Make into a list for, potentially, expanding to other pipelines later.
        pipe_exceptions = [ "ner" ]
        other_pipes = [ pipe for pipe in nlp.pipe_names if pipe not in pipe_exceptions ]

        with nlp.disable_pipes(*other_pipes):
            optimizer = None

            if new_model:
                optimizer = nlp.begin_training()

            for itr in range(EPOCHS):
                print("{} ITERATION".format(itr + 1))

                losses = {}
                random.shuffle(TRAINING_DATA)

                for text, annotations in TRAINING_DATA:
                    nlp.update(
                        [ text ],        # batch of texts
                        [ annotations ], # batch of annotations
                        drop=0.2,        # dropout - make it harder to memorise data
                        sgd=optimizer,   # callable to update weights
                        losses=losses
                    )

                print(f"ner: {losses['ner']}\n")

        if save:
            if not model.exists():
                model.mkdir(parents=True)

            nlp.to_disk(model)
            print(f"Saved to: \n{model}\n")
    except Exception as e:
        exit(e)