import { SET_FORM_DATA } from "./ActionType";

const initialState = {
    formData:null,
};
const formReducer = (state=initialState,action) => {
    // setting the form data
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