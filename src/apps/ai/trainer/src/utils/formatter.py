async def toSpacyFormat(data=[]):
    spacyData = []

    if (len(data) == 0 or data is None):
        return []
    else:
        for obj in data:
            entry = (
                obj["input"],
                { "entities": [] }
            )

            for entity in obj["entities"]:
                entry[1]["entities"].append([
                    entity["start"],
                    entity["stop"],
                    entity["label"]
                ])

            spacyData.append(entry)

        return spacyData