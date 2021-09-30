import { type } from "ramda";
import * as A from "@redux/actions/modalEntityActions";
import useReducers from "@utils/useReducer";

const init = {
    refetch: false,
    show: false,
    lexicon: null,
    search: null,
    data: null,
    entity: ""
}

export default useReducers(init, {
    [A.TOGGLE_MODEL_ENTITY]: (state, { show=null, lexicon=null, search=null }) => {
        return {...state,
            show: show || !state.show,
            lexicon,
            search
        };
    },
    [A.SET_ENTITY_MODAL_DATA]: (state, { typename, payload }) => {
        let data = payload || null;

        if (type(payload) === "Object")
            data = payload[typename].data || null;

        return {...state, data };
    },
    [A.TOGGLE_ENTITY_MODAL_REFETCH]: (state, { refetch=null }) => {
        return {...state,
            refetch: refetch || !state.refetch
        };
    },
    [A.SET_ENTITY_MODAL_INPUT]: (state, { entity }) => {
        return {...state, entity };
    }
});