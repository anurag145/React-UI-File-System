import * as actionTypes from './actionTypes';
import generator from './guidGenerator';


const initialState={
    
    pathDisplay:"root",
         rootList:[],        
         display:[],
         parent:null
    };

const addItem=(state,value)=>{
   
    if(value.parent){
        let updateParent=state[value.parent];
         const guid=generator();
            updateParent.list.push(guid);
        return {
            ...state,
            [value.parent]:updateParent,
            [guid]:{...value,
                  list:[]
            }
        }
        
    }else{
        const guid=generator();
            let updatedRoot=state.rootList
            updatedRoot.push(guid)
            return{
                ...state,
                display:updatedRoot,
                rootList:updatedRoot,
                [guid]:{...value,
                list:[]
            }
            }

    
}
    
}
const upOneDirectory=(state)=>{
    
    if(state.parent){
        const val=state.parent;
        const baseParent= state[val]
        if(baseParent.parent===null){
            return{
                ...state,
                display:state.rootList,
                pathDisplay:'root',
                parent:null
            }
        }else{
            console.log(baseParent.parent)
            const updateParent=baseParent.parent;
            const updateDisplay=state[updateParent].list;
            const updatePath=(state.pathDisplay).substr(0,(state.pathDisplay).lastIndexOf('/'))
            return {
                ...state,
                display:updateDisplay,
                pathDisplay:updatePath,
                parent:updateParent
            };
        }
        
    
    }else
    {
        alert("In root directory")
        return state;
    }
}

const enterPath=(state,value)=>{
    return{
          ...state,
          display: state[value].list,
          pathDisplay:state.pathDisplay+"/"+state[value].name,
          parent:value
    }
   

}
    
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_ITEM:
         return addItem(state,action.addContent)
         case actionTypes.ENTER_PATH:
         return enterPath(state,action.value)
         case actionTypes.UP_ONE_DIRECTORY:
         return upOneDirectory(state);
         default: return state;
    }
}

export default reducer;