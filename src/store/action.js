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

export const deleteItem=(Id)=>{
return{
    type:actionTypes.DELETE,
    Id:Id
}
}
export const search=(val)=>{
    return{
        type:actionTypes.SEARCH,
        val:val.trim()
    }
}
export const showSubMenu=(Id)=>{
    return{
        type:actionTypes.SHOW_SUB_MENU,
        Id:Id
    }
}

export const changeDirectory=(Id)=>{
    return{
        type:actionTypes.CHANGE_DIRECTORY,
        Id:Id,
        
    }
}