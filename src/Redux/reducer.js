import { CHANGE_CVC, CHANGE_NAME, CHANGE_MM, CHANGE_YY, CHANGE_NUMBER} from "./constants";

const initialState = {
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
};

const CardReducer = ( state = initialState, action ) => {
    switch(action.type){
        case CHANGE_NAME:
            console.log("en el reducer", action.payload)
            return { ...state, name: action.payload };

        case CHANGE_NUMBER:
            return { ...state, number: action.payload };

        case CHANGE_MM:
            return { ...state, mm: action.payload };

        case CHANGE_YY:
            return { ...state, yy: action.payload };

        case CHANGE_CVC:
            return { ...state, cvc: action.payload };

        default:
            return {...state};
    };
};

export default CardReducer;