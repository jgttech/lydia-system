import React, { useEffect } from "react";
import { Divider } from "antd";
import useStyles from "./SearchLayout.jss";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { SearchBar } from "@components/SearchBar/SearchBar";
import { SearchResults } from "@components/SearchResults/SearchResults";
import { lexiconRemovalNotifications, leixconAddNotifications } from "./SearchNotifications";
import { useMutation } from "@apollo/react-hooks";
import * as mutations from "@graphql/mutations";
import * as queries from "@graphql/queries";
import * as LA from "@redux/actions/lexiconActions";

export interface SearchResultsLayoutProps {}

export const SearchLayout = (props: SearchResultsLayoutProps) => {
    const
    classes = useStyles(),
    dispatch = useDispatch(),
    {
        refetch,
        search,
        lexicons,
        entities,
        modelConfirm,
        options
    } = useSelector(({ lexicons }) => lexicons),
    { exactMatch } = options,
    showConfirm = modelConfirm.show,
    removeLexiconId = modelConfirm.lexicon,
    removalMsgKey = `LEXICON_REMOVE_MSG_KEY`,
    addMsgKey = `LEXICON_ADD_MSG_KEY`;

    const
    showEntityManager = useSelector(({ modalEntity }) => modalEntity.show);

    const
    { removeLexicon, createLexicon } = mutations,
    { typename, query } = search.length === 0
        ? queries.topLexicons
        : !exactMatch
            ? queries.topLexiconsSearch
            : queries.topLexiconsSearchExactMatch;

    const
    entityQuery = useQuery(queries.entities.query),
    lexiconQuery = useQuery(query, {
        variables: { input: search },
        pollInterval: showEntityManager ? 1500 : 500
    });

    const
    [ removeLexiconMutation, removeResults ] = useMutation(removeLexicon.mutation),
    [ addLexiconMutation, addResults ] = useMutation(createLexicon.mutation);

    lexiconRemovalNotifications(removeResults, removalMsgKey);
    leixconAddNotifications(addResults, addMsgKey);

    // Load entity data.
    useEffect(() => {
        const { typename } = queries.entities;

        dispatch({
            typename,
            type: LA.SET_ENTITIES_DATA,
            payload: entityQuery.data
        });
    }, [ entityQuery.data ]);

    // Perform another refetch when triggered to via the "refetch"
    // redux property.
    useEffect(() => {
        if (refetch) {
            lexiconQuery.refetch();

            dispatch({
                type: LA.TOGGLE_REFETCH,
                refetch: false
            });
            dispatch({
                typename,
                type: LA.SET_LEXICONS_DATA,
                payload: lexiconQuery.data
            });
        }
    }, [ refetch ]);

    // Trigger an update based on the result of the received data.
    // This may get triggered again by the redux "refetch", but that
    // won't hurt.
    useEffect(() => {
        lexiconQuery.refetch();

        dispatch({
            typename,
            type: LA.SET_LEXICONS_DATA,
            payload: lexiconQuery.data
        });
    }, [ lexiconQuery.data ]);

    return (
        <>
            <div className={classes.searchBarContainer}>
                <SearchBar
                    loading={lexiconQuery.loading}
                    search={search}
                    exactMatch={exactMatch}
                    entities={entities}
                />
            </div>
            <Divider style={{ margin: "0px" }}>
                {`Showing ${lexicons.length < 20 ? lexicons.length : "20+"} results`}
            </Divider>
            <div className={classes.searchResultsContainer}>
                <SearchResults
                    loading={lexiconQuery.loading}
                    search={search}
                    showConfirm={showConfirm}
                    lexicons={lexicons}
                    removeLexiconId={removeLexiconId}
                    removeLexicon={removeLexiconMutation}
                    addLexicon={addLexiconMutation}
                    removalMsgKey={removalMsgKey}
                    addMsgKey={addMsgKey}
                />
            </div>
        </>
    );
}