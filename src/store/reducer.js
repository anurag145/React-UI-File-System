const initialState={
    pathDisplay:"root",
        root:{
          file:{"index.html":{size:"520 kb", cName:"Anurag", cDate:"27-Aug-2018"}},
          folder:{ "Music":{ info:{ size:"520 kb",cName:"Anurag",cDate:"27-Aug-2018"},
                 path:"root/Music",
                 FolderItems:{}
             },
             "System":{ info:{ size:"520 kb",cName:"Anurag",cDate:"27-Aug-2018"},
                 path:"root/Music",
                 FolderItems:{}
             } 
            }
        },
      display:{
          file:["index.html"],
          folder:["Music","System","Music","System","Music","System","Music","System","Music","System","Music","System","Music","System"]
      }  
    };
    
const reducer=(state=initialState,action)=>{
return state;
}

export default reducer;