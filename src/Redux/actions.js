import { CHANGE_CVC, CHANGE_NAME, CHANGE_MM, CHANGE_YY, CHANGE_NUMBER} from "./constants";

export const changeNameTo = (name) => {
    return { type: CHANGE_NAME, payload: name}
};

export const changeNumberTo = (number) => {
    return { type: CHANGE_NUMBER, payload: number}
};

export const changeMMTo = (mm) => {
    return { type: CHANGE_MM, payload: mm}
};

export const changeYYTo = (yy) => {
    return { type: CHANGE_YY, payload: yy}
};

export const changeCVCTo = (cvc) => {
    return { type: CHANGE_CVC, payload: cvc}
};