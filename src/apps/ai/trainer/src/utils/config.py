import yaml
from sys import exit
from pathlib import Path

async def yaml_config(obj_path=""):
    config_data = None
    config_file = Path("./config.yml").resolve()

    # Load the "config.yml" configuration for training a model.
    with open(config_file, "r") as fp:
        try:
            config_data = yaml.safe_load(fp)

            if len(obj_path) > 0:
                for prop in obj_path.split("."):
                    config_data = config_data[prop]

        except yaml.YAMLError as e:
            exit(e)

    return config_data