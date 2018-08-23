import * as actionTypes from './actionTypes';
const initialState={
    
    pathDisplay:"root",
    
      display:{
          file:[],
          folder:[]
      }  
    };
const addItem=(state,value)=>{
 console.log(value);
const path = state.pathDisplay;
const level= (path.match(/\//g)||[]).length;
if(state[level])
{   
    let updatedStateLevel= {...state[level]};
    let typeHandler= {...updatedStateLevel[value.type]}
    if(!typeHandler[value.name])
    {
         typeHandler[value.name]={
             info:{
                 size:value.size,
                 creator:value.creator,
                 date:value.date
             }
         }
        updatedStateLevel[value.type]=typeHandler
         return {...state,[level]:updatedStateLevel}
    }
    
}else{
    return {
        ...state,
        [level]:{
            [value.type]:{
                [value.name]:{
                    info:{
                        size:value.size,
                        creator:value.creator,
                        date:value.date
                    }
                }
            }
        }
    }
}
return state;
}    
    
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_ITEM:
         return addItem(state,action.addContent)
         default: return state;
    }
}

export default reducer;