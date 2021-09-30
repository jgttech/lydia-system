async def attr(obj=None, path=""):
    if obj == None and len(path) == 0:
        return None
    elif obj == None and len(path) > 0:
        return None
    elif obj is not None and len(path) == 0:
        return obj
    else:
        data = obj

        for prop in path.split("."):
            data = data[prop]

        return data