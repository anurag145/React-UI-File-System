import React from 'react';
import { ContextMenu, Item, ContextMenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';



const item = (props)=>{

const deleteItem=()=>{
  props.remove(props.id);
} 

const getInfo=()=>{
    props.info(props.id)
}

const openItem=()=>{
     if(props.type==='folder')
        props.clicked(props.id);
        else
        alert("File was clicked")
    }

const MyAwesomeMenu = () => (
    <ContextMenu id={props.id}>
       <Item onClick={openItem}>Open</Item>
       <Item onClick={getInfo}>Get Info</Item>
       <Item onClick={deleteItem}>Delete</Item>
       
    </ContextMenu>
);


  let itemType=props.type==='folder'?"fa fa-folder fa-5x":"fa fa-file fa-5x";
    return(
       <div style={{margin:"5px"}}>
        <ContextMenuProvider id={props.id}>
        <div id={'content-menu'} 
        onDoubleClick={openItem}>
        
        
        <i className={itemType} ></i>
        
        <p style={{wordWrap:"break-word",marginTop:'-5px',fontSize:'10px',textAlign:'center'}}>{props.name}</p>
              </div>
              </ContextMenuProvider>
        <MyAwesomeMenu />
        </div>
    );
}
export default item;