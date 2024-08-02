import { dropdownSelectedState, dropdownState } from "../constants/dropdownState";
import {  SET_DROPDOWNVALUE, SET_SELECTEDDROPDVALUE } from "../types/dropdown";

export const DropdownValue=(state=[],action)=>{
    switch(action.type){
        case SET_DROPDOWNVALUE:
            // console.log(action,"get the dropdownvalue")
            return [...(action.data) || state];
            default:
                return state
    }
}
export const DropdownSelectedValue=(state=[],action)=>{
    switch(action.type){
        case SET_SELECTEDDROPDVALUE:
            // console.log(action,"get the selected dropdownvalue")
           return [...(action.data || state)];
            default:
                return state
    }
}