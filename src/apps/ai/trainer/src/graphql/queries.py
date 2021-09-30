lexicon_all = """
{
    lexiconSearchByInput(input: "*", limit: 0) {
        code
        errors
        data {
            _id
            created
            modified
            input
            entities {
                _id
                created
                modified
                label
                start
                stop
            }
        }
    }
}
"""