import * as actionTypes from './actionTypes';

export const addItem= (addContent)=>{
    console.log(addContent)
    return{
        type:actionTypes.ADD_ITEM,
        addContent:addContent
    }
}