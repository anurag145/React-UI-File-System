import React from 'react';

const folder = (props)=>{
   
const onDoubleClickHandler=()=>{
        props.clicked(props.name);
    }
  
    return(
       

        <div id={'content-menu'} onDoubleClick={onDoubleClickHandler}>
        
        
         <i className="fa fa-folder fa-5x" style={{marginRight:"10px"}}></i>
        <p style={{marginTop:'-5px',fontSize:'10px',textAlign:'center'}}>{props.name}</p>
              </div>
    );
}
export default folder;