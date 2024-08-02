import { combineReducers } from "redux";
import { DropdownSelectedValue, DropdownValue } from "../reducers/DropdownReducer";

export default combineReducers({
    DropdownValue,
    DropdownSelectedValue
})