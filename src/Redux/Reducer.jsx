import { SET_FORM_DATA } from "./ActionType";

const initialState = {
    formData:null,
};
const formReducer = (state=initialState,action) => {
    switch(action.type){
        case SET_FORM_DATA:
            return{
                ...state,
                formData:action.payload,
            }
        default:
            return state;
    }
};

export default formReducer;