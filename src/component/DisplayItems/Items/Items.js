import React from 'react';
import { ContextMenu, Item, ContextMenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import './Item.css'



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


 
  let icon;
  if(props.type==='folder')
  {
       icon=<div>
      
      <i className="fa fa-folder fa-5x" style={{color:"#50b9fd"}}></i>
      <p style={{paddingBottom:"5px",wordWrap:"break-word",marginTop:'-4px',fontSize:'10px',textAlign:'center'}}>{props.name}</p>
      </div>
    
  }else{

    icon= <div> 
    <div className="fa-stack fa-1x">
    <i className="fa fa-file fa-5x" style={{color:"#fbcb5d",paddingRight:"10px"}}></i>
    <span className="fa-stack-1x fa-stack-text file-text" 
    style={{fontSize:"10px",marginTop:"-35px",color:'white'}}>
    {props.name.slice(props.name.lastIndexOf('.'))}
    </span>
    </div>
    <p style={{padding:"0px 10px 5px 0",wordWrap:"break-word",marginTop:'45px',fontSize:'10px',textAlign:"center"}}>{props.name}</p>
    </div>

  }
    return(
       <div id={"Item"}>
        <ContextMenuProvider id={props.id}>
        <div id={'content-menu'} 
        onDoubleClick={openItem} style={{padding:'0px 10px'}}>
        
        
        {icon}
              </div>
              </ContextMenuProvider>
        <MyAwesomeMenu />
        </div>
    );
}
export default item;