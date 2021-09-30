import { type } from "ramda";
import * as A from "@redux/actions/modalPeekActions";
import useReducers from "@utils/useReducer";

const init = {
    show: false,
    lexicon: null,
    data: null
}

export default useReducers(init, {
    [A.TOGGLE_MODEL_PEEK]: (state, { show=null, lexicon }) => {
        return {...state,
            show: show || !state.show,
            lexicon
        };
    },
    [A.SET_PEEK_MODAL_DATA]: (state, { typename, payload }) => {
        let data = payload || null;

        if (type(payload) === "Object")
            data = payload[typename].data || null;

        return {...state, data };
    },
});