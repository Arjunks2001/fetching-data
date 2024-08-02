import { call, put, takeEvery } from "redux-saga/effects"
import { DROPDOWNVALUE, SELECTEDDROPDVALUE, SET_DROPDOWNVALUE, SET_SELECTEDDROPDVALUE } from "../types/dropdown"
import axios from "axios"
const URL="https://api.zameensquare.com/api/search/auto-complete?page_no=0"
// console.log(URL,"saga api data")
function * getDropdown(){
    
    let data=yield call(axios.post,URL,{
      city_name:"",
      search_string:""
    })
 
    // console.log("action is called posts",data)
    yield put({type:SET_DROPDOWNVALUE, data:data.data.data.city})
}

function * getDropdownValue(){
    
    let data=yield call(axios.post,URL,{
        city_name:"",
      search_string:""
    })

    // console.log("action is called posts",data.data.data.locality)
    yield put({type:SET_SELECTEDDROPDVALUE, data:data.data.data.locality})
}

function * saga(){
    yield takeEvery(DROPDOWNVALUE,getDropdown)
    yield takeEvery(SELECTEDDROPDVALUE,getDropdownValue)
}

export default saga