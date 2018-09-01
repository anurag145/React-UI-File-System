import * as actionTypes from './actionTypes';

export const addItem= (addContent)=>{
    return{
        type:actionTypes.ADD_ITEM,
        addContent:addContent
    }
}
export const upOneDirectory=()=>{
    return{
        type:actionTypes.UP_ONE_DIRECTORY
    }
}
export const enterPath=(value)=>{
    return{
        type:actionTypes.ENTER_PATH,
        value:value
    }
}