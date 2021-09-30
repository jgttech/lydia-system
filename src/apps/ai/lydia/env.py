import yaml
from os import getenv
from pathlib import Path

env_file = Path("./.env").resolve()
with open(env_file, "w+") as env_fp:
    with open(Path("./vars.yml").resolve(), "r+") as vars_fp:
        for key in yaml.safe_load(vars_fp)["env"]:
            value = getenv(key)
            env_fp.write(f"{key}={value}\n")