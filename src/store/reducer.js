import * as actionTypes from './actionTypes';
import generator from './guidGenerator';



const initialState={
    
    pathDisplay:"root",
       root:{
           list:["0df3703a-d2cb-4a53-a25f-189d2db2e4e3","e19e211d-0efd-4738-9103-76c2d62d6e4b"],
           path:"root",
           name:"root"
       }, // Dummy Data     
         display:["0df3703a-d2cb-4a53-a25f-189d2db2e4e3","e19e211d-0efd-4738-9103-76c2d62d6e4b"], // Dummy Data
         parent:"root",
         selected:null,
         searchValue:"",
  
         "0df3703a-d2cb-4a53-a25f-189d2db2e4e3":{ 
            creator:"Anurag",
            date:"9/1/2018",
            name:"index.html",
            parent:"root",
            size:"10kb",type:"file"
       },
       "e19e211d-0efd-4738-9103-76c2d62d6e4b":{ 
        creator:"Anurag",
        date:"9/1/2018",
        list:["ea49d589-6942-4cc0-adbc-7a8124991cfe"],
        path:"root/e19e211d-0efd-4738-9103-76c2d62d6e4b",
        show:false,
        name:"Design",
        parent:"root",
        size:"10kb",type:"folder"
   },
   "ea49d589-6942-4cc0-adbc-7a8124991cfe":{ 
    creator:"Anurag",
    date:"9/1/2018",
    list:[],
    path:"root/e19e211d-0efd-4738-9103-76c2d62d6e4b/ea49d589-6942-4cc0-adbc-7a8124991cfe",
    show:false,
    name:"Production",
    parent:"e19e211d-0efd-4738-9103-76c2d62d6e4b",
    size:"10kb",type:"folder"
}
        
    };

const addItem=(state,value)=>{
   let updatedState=search(state,'')
        let updateParent=updatedState[value.parent];
         const guid=generator();
            updateParent.list.push(guid);
        const updatedDisplay=updatedState.display
            updatedDisplay.push(guid);
            if(value.type==="folder")
         {   
             return {  ...updatedState, 
            display:updatedDisplay,
            [value.parent]:updateParent,
             [guid]:{...value, list:[],show:false,
            path:updateParent.path+"/"+guid,
            
            }
        }
    }   else{
         return  {
            ...updatedState,
            display:updatedDisplay,
            [value.parent]:updateParent,
            [guid]:{...value, }
        }

    }
        
    
    
}
const upOneDirectory=(state)=>{
    let updatedState=search(state,'');
    if(updatedState.parent!=="root"){
        const baseParent= {...state[updatedState.parent]}
            const val=JSON.parse(JSON.stringify(updatedState[baseParent.parent]));
            const updatePath=(updatedState.pathDisplay).substr(0,(updatedState.pathDisplay).lastIndexOf('/'))
            return {
                ...updatedState,
                display:val.list,
                selected:baseParent.parent,
                pathDisplay:updatePath,
                parent:baseParent.parent
            };
    }else
    {
        alert("In root directory")
        return state;
    }
}

const enterPath=(state,value)=>{
  let  updatedState=search(state,'');
   let val=JSON.parse(JSON.stringify(state[value]));
    return{ 
          ...updatedState,
          display: val.list,
          pathDisplay:state[value].path,
          parent:value,
          selected:value
    }
   

}
 const removefile=(state,Id)=>{
   
    let updatedState=search(state,'');
    
 let parentId=updatedState[Id].parent;
    let updateParent=updatedState[parentId];
     updateParent.list= updateParent.list.filter(el=>el!==Id)
     updatedState.display= updatedState.display.filter(el=>el!==Id );
     delete updatedState[Id]
     return {
         ...updatedState,
        [parentId]:updateParent};
}
 

 const removeFolder=(state,Id,DisplayUpdate)=>{
     
   let updatedState=JSON.parse(JSON.stringify( search(state,'')));
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
          let parentId=updatedState[Id].parent;
    let updateParent=updatedState[parentId];
     updateParent.list= updateParent.list.filter(el=>el!==Id)
     updatedState.display= updatedState.display.filter(el=>el!==Id );
     delete updatedState[Id];   
     return {...updatedState,[parentId]:updateParent};
        }
     
     
    
 }

const removeItem=(state,Id)=>{
   
    if(state[Id].type==='file')
     return removefile(state,Id);
     else 
     return removeFolder(state,Id,"Update Display")
}

const showSubMenu=(state,Id)=>{
    let updatedState= search(state,'');
    
    updatedState[Id].show=!state[Id].show;
    return{
        ...updatedState
    }

}
const search=(state,character)=>{
    let updatedState=state;
    if(character!=='')
    {   let val=character.toUpperCase();
      
        let mappingArray;
        if(updatedState.tempDisplay)
        { mappingArray=updatedState.tempDisplay;
        }else{
           mappingArray =updatedState.display;
           updatedState={...updatedState,
            tempDisplay:updatedState.display
        }
        }
       
        let tempDisplay=mappingArray.filter(el=>{
           
            return updatedState[el].name.toUpperCase().indexOf(val) > -1;
        });
        
       return{
           ...updatedState,
           searchValue:character,
           display:tempDisplay,
           
       }
    }else
    { 
        
            delete updatedState.tempDisplay;
      let backToMainContent=JSON.parse(JSON.stringify(updatedState[updatedState.parent]));
      return{
        ...updatedState,
        searchValue:"",
        display:backToMainContent.list
      }
    }

    }


const changeDirectory=(state,Id)=>{
    let updatedState= search(state,'');
    
        let val=JSON.parse(JSON.stringify(state[Id]));
         return {
           ...updatedState,
           parent:Id,
           display:val.list,
           selected:Id,
           pathDisplay:val.path
        };
    
    
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
         case actionTypes.CHANGE_DIRECTORY:
         return changeDirectory(state,action.Id)
         default: return state;
    }
}

export default reducer;