import React from 'react';

const item = (props)=>{
   
const onDoubleClickHandler=()=>{
     if(props.type==='folder')
        props.clicked(props.id);
        else
        alert("File was clicked")
    }
  let itemType=props.type==='folder'?"fa fa-folder fa-5x":"fa fa-file fa-5x";
    return(
       

        <div id={'content-menu'} onDoubleClick={onDoubleClickHandler}>
        
        
        <i className={itemType} style={{marginRight:"10px"}}></i>
        
        <p style={{wordWrap:"break-word",marginTop:'-5px',fontSize:'10px',textAlign:'center'}}>{props.name}</p>
              </div>
    );
}
export default item;