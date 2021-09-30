import { gql } from "apollo-boost";

export const
removeLexicon = {
    typename: "lexiconRemoveOne",
    mutation: gql`
        mutation lexiconRemoveOne($_id: ID!) {
            lexiconRemoveOne(_id: $_id) {
                code
                errors
            }
        }
    `
},
createLexicon = {
    typename: "lexiconCreateOne",
    mutation: gql`
        mutation lexiconCreateOne($input: String!) {
            lexiconCreateOne(input: $input) {
                code
                errors
            }
        }
    `
},
createEntity = {
    typename: "lexiconCreateOneEntity",
    mutation: gql`
        mutation lexiconCreateOneEntity(
            $_id: ID!,
            $entity: MutationLexiconEntity!
        ) {
            lexiconCreateOneEntity(
                _id: $_id,
                entity: $entity
            ) {
                code
                errors
            }
        }
    `
},
updateEntityLabel = {
    typename: "lexiconUpdateOneEntity",
    mutation: gql`
        mutation lexiconUpdateOneEntity(
            $_id: ID!,
            $_entity: ID!,
            $entity: MutationLexiconEntity!
        ) {
            lexiconUpdateOneEntity(
                _id: $_id,
                _entity: $_entity,
                entity: $entity
            ) {
                code
                errors
                data {
                    _id
                    input
                    entities {
                        _id
                        label
                        start
                        stop
                    }
                }
            }
        }
    `
},
removeEntityLabel = {
    typename: "lexiconRemoveOneEntity",
    mutation: gql`
        mutation lexiconRemoveOneEntity(
            $_id: ID!,
            $_entity: ID!
        ) {
            lexiconRemoveOneEntity(
                _id: $_id,
                _entity: $_entity
            ) {
                code
                errors
                data {
                    _id
                    input
                    entities {
                        _id
                        label
                        start
                        stop
                    }
                }
            }
        }
    `
}