from src.utils.config import yaml_config
from requests import post

async def gql_query(query=""):
    request = post(
        await yaml_config("trainer.gateway"),
        json={ "query": query }, headers={}
    )

    if request.status_code == 200:
        return request.json()
    else:
        raise Exception(f"Query failed with code {request.status_code}. {query}")