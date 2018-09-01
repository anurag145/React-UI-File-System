import * as actionTypes from './actionTypes';
import generator from './guidGenerator';



const initialState={
    
    pathDisplay:"root",
         rootList:[],        
         display:[],
         parent:null,
        
    };

const addItem=(state,value)=>{
   
    if(value.parent){
        
        let updateParent=state[value.parent];
         const guid=generator();
            updateParent.list.push(guid);
        const updatedDisplay=state.display
            updatedDisplay.push(guid);
            if(value.type!=="file")
         {   
             return {  ...state, 
            display:updatedDisplay,
            [value.parent]:updateParent,
             [guid]:{...value, list:[],show:false,
            path:updateParent.path+"/"+guid,
            
            }
        }
    }   else{
         return  {
            ...state,
            display:updatedDisplay,
            [value.parent]:updateParent,
            [guid]:{...value, }
        }

    }
        
    }else{
        
        const guid=generator();
            let updatedRoot=state.rootList
            updatedRoot.push(guid)
            if(value.type!=="file"){
            
            return{
                
                ...state,
                display:updatedRoot,
                rootList:updatedRoot,
                [guid]:{...value,
                list:[],
                show:false,
                path:"null/"+guid
            }
        }
        }else{
            
            return {
                ...state,
                display:updatedRoot,
                rootList:updatedRoot,
                [guid]:{...value,
                
            }
        }
            }

    
}
    
}
const upOneDirectory=(state)=>{
    
    if(state.parent){
        const val=state.parent;
        const baseParent= {...state[val]}
        if(baseParent.parent===null){
            return{
                ...state,
                display:state.rootList,
                pathDisplay:'null',
                parent:null
            }
        }else{
           
           
            const updateParent=baseParent.parent;
            let val=JSON.parse(JSON.stringify(state[updateParent]));
            const updatePath=(state.pathDisplay).substr(0,(state.pathDisplay).lastIndexOf('/'))
            return {
                ...state,
                display:val.list,
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
   let val=JSON.parse(JSON.stringify(state[value]));
    return{ 
          ...state,
          display: val.list,
          pathDisplay:state[value].path,
          parent:value
    }
   

}
 const removefile=(state,Id)=>{
   
    let updatedState=state;
    if(updatedState[Id].parent===null)
    {  updatedState.rootList= updatedState.rootList.filter(el=>el!==Id );
        updatedState.display= updatedState.display.filter(el=>el!==Id );
        delete updatedState[Id];
        return  {...updatedState}
}else
{  let parentId=updatedState[Id].parent;
    let updateParent=updatedState[parentId];
     updateParent.list= updateParent.list.filter(el=>el!==Id)
     updatedState.display= updatedState.display.filter(el=>el!==Id );
     delete updatedState[Id]
     return {
         ...updatedState,
        [parentId]:updateParent};
}
 }

 const removeFolder=(state,Id,DisplayUpdate)=>{
     
   let updatedState=JSON.parse(JSON.stringify(state));
    if(updatedState[Id].type!=='file')
     { 
         while(updatedState[Id].list.length>0)
    {   
        let value=updatedState[Id].list[0];

         updatedState[Id].list.shift();
       
          updatedState=removeFolder(updatedState,value,"NA");
          
         
    } 
   }else{
       delete updatedState[Id];
      
         return {...updatedState}
   }
    
      if(DisplayUpdate==="NA")
      {
         delete updatedState[Id];
         
            return {...updatedState}
       }
      else{ 
         if(updatedState[Id].parent===null)
         { updatedState.rootList= updatedState.rootList.filter(el=>el!==Id );
            updatedState.display= updatedState.display.filter(el=>el!==Id );
            delete updatedState[Id];
           
            return {...updatedState}
         } else{
          
            let parentId=updatedState[Id].parent;
    let updateParent=updatedState[parentId];
     updateParent.list= updateParent.list.filter(el=>el!==Id)
     updatedState.display= updatedState.display.filter(el=>el!==Id );
     delete updatedState[Id];
     updatedState={...updatedState,[parentId]:updateParent}
    
     return {...updatedState};
        }
     }
     
    
 }

const removeItem=(state,Id)=>{
   
    if(state[Id].type==='file')
     return removefile(state,Id);
     else 
     return removeFolder(state,Id,"Update Display")
}

const showSubMenu=(state,Id)=>{
    console.log(Id);
    let updatedState=state;
    updatedState[Id].show=!state[Id].show;
    return{
        ...updatedState
    }

}
const search=(state,val)=>{
    let updatedState=state;
    if(val!=='')
    {   val=val.toUpperCase();
        console.log(val)
        let mappingArray;
        if(updatedState.tempDisplay)
        { mappingArray=updatedState.tempDisplay;
        }else{
           mappingArray =updatedState.display;
           updatedState={...updatedState,
            tempDisplay:updatedState.display
        }
        }
         console.log(mappingArray)
        let tempDisplay=mappingArray.filter(el=>{
            console.log(updatedState[el].name.toUpperCase().indexOf(val) > -1)
            return updatedState[el].name.toUpperCase().indexOf(val) > -1;
        });
        
       return{
           ...updatedState,
           
           display:tempDisplay,
           
       }
    }else
    { 
        if(!updatedState.parent)
        { delete updatedState.tempDisplay;
          return{
              ...updatedState,
              display:updatedState.rootList
          }

        }else{
            delete updatedState.tempDisplay;
      let backToMainContent=JSON.parse(JSON.stringify(updatedState[updatedState.parent]));
      return{
        ...updatedState,
        display:backToMainContent.list
      }
    }

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
         case actionTypes.DELETE:
         return removeItem(state,action.Id)
         case actionTypes.SHOW_SUB_MENU:
         return showSubMenu(state,action.Id)
         case actionTypes.SEARCH:
         return search(state,action.val)
         default: return state;
    }
}

export default reducer;