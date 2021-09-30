import { gql } from "apollo-boost";

export const
topLexicons = {
    typename: "lexiconSearchByInput",
    query: gql`{
        lexiconSearchByInput(input: "*") {
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
    }`
},
topLexiconsSearch = {
    typename: "lexiconSearchByInput",
    query: gql`
        query topLexiconSearch($input: String!) {
            lexiconSearchByInput(
                input: $input,
                options: {
                    exactMatch: false
                }
            ) {
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
    `
},
topLexiconsSearchExactMatch = {
    typename: "lexiconSearchByInput",
    query: gql`
        query topLexiconsSearchExactMatch($input: String!) {
            lexiconSearchByInput(
                input: $input,
                options: {
                    exactMatch: true
                }
            ) {
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
    `
},
entities = {
    typename: "entities",
    query: gql`{
        entities {
            code
            errors
            data {
                _id
                label
                backgroundColor
                accentColor
            }
        }
    }`
},
getLexiconById = {
    typename: "lexiconById",
    query: gql`
        query getLexiconById($_id: ID!) {
            lexiconById(
                _id: $_id,
            ) {
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
    `
},
getLexiconByInput = {
    typename: "lexiconByInput",
    query: gql`
        query getLexiconById($input: String!) {
            lexiconByInput(
                input: $input,
            ) {
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
    `
}