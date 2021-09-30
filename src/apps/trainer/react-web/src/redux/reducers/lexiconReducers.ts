import { type } from "ramda";
import * as A from "@redux/actions/lexiconActions";
import useReducers from "@utils/useReducer";

const
init = {
    refetch: false,
    lexicons: [],
    entities: [],
    search: "",
    options: {
        exactMatch: false
    },
    modelConfirm: {
        show: false,
        lexicon: null
    },
};

export default useReducers(init, {
    [A.TOGGLE_REFETCH]: (state, { refetch=null }) => {
        return {...state, refetch: refetch || !state.refetch };
    },
    [A.SET_LEXICONS_DATA]: (state, { typename, payload }) => {
        let lexicons = payload || [];

        if (type(payload) === "Object")
            lexicons = payload[typename].data || [];

        return {...state, lexicons };
    },
    [A.SET_ENTITIES_DATA]: (state, { typename, payload }) => {
        let entities = payload || [];

        if (type(payload) === "Object")
            entities = payload[typename].data || [];

        return {...state, entities };
    },
    [A.SET_LEXICONS_SEARCH]: (state, { search }) => {
        return {...state, search };
    },
    [A.TOGGLE_MODEL_CONFIRM]: (state, { show=null, lexicon }) => {
        return {...state, modelConfirm: {...state.modelConfirm,
            show: show || !state.modelConfirm.show,
            lexicon
        }};
    },
    [A.TOGGLE_OPTIONS_EXACT_MATCH]: state => {
        return {...state, options: {...state.options,
            exactMatch: !state.options.exactMatch
        }};
    },
});