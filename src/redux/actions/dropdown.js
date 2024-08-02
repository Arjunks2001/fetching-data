import { DROPDOWNVALUE, SELECTEDDROPDVALUE } from "../types/dropdown"

export const getdropdownvalue=(data)=>{
return{
    type:DROPDOWNVALUE,
    data
}
}

export const selecteddropdownvalue=(data)=>{
    return{
        type:SELECTEDDROPDVALUE,
        data
    }
}