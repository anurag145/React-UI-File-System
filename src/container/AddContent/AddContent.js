import React ,{Component}from 'react';
import * as actions from '../../store/index';
import {connect} from 'react-redux';
class AddModal extends Component{
    state={
        
        type:"file",
        name:"",
        size:"",
        creator:"",
        date:""
        
    }
    typeHandler=(val)=>{
      this.setState({type:val})
    }
    onChangeHandler=(event,indentifier)=>{
     const updateVal={
         ...this.state
     }
     
     updateVal[indentifier]=event.target.value;
     this.setState({...updateVal})
    }

    onCreateClicked=()=>{
        let flag=true;
        if(this.state.type==="file"&&(this.state.name).lastIndexOf(".")===-1){
            alert("File Extension absent")
            flag=false;
        }else
        for(let key in this.state){
            if(this.state[key].length===0)
            {
                alert("Invalid Entry: "+[key.charAt(0).toUpperCase()+key.slice(1)]+" is empty, try again")
                flag=false;
                    break;
            }

            
        }
        if(flag)
       { this.props.onCreateHandler({
            ...this.state,
           parent: this.props.parent
            
        });
        this.props.clicked();
    }
        
  
    }
    render(){
        
        let content= [];
        let left ={
            width:'90%',
            padding:"10px",
            outline:'none',
            color:'white',
            border: "1px solid #ccc",
          borderRadius:"5px 0 0 5px",
          borderRight:"none",
          backgroundColor:"#50b9fd"
         }
         let right={...left}
         delete right.borderRight;
         right={
             ...right,
             color:"black",
             borderRadius:"0 5px 5px 0",
             backgroundColor:"white",
             borderLeft:"none",
         }
         if(this.state.type==="file")
         {right.backgroundColor="white"
           right.color="black"
           left.backgroundColor="#50b9fd"
         left.color="white"
        } else
         {
             right.backgroundColor="#50b9fd"
         right.color="white"
         left.backgroundColor="white"
       left.color="black"
          }
         
          
           for(let key in this.state){
               
            if(key==="type")
            {   
                content.push(
                   <div  key={"typeHandler"}style={{display:"flex",margin:'0px 10px'}}>

                             
                    <button 
                    style={ left }
                      onClick={()=>this.typeHandler("file")}>File</button>
                      <button 
                    style={ right}
                     
                      onClick={()=>this.typeHandler("folder")}>Folder</button>
                      </div>    
          
              
              )
            }else{
                const placeholderVal=key.charAt(0).toUpperCase()+key.slice(1);
           
               content.push( <input 
                style={{display:"block",margin:'10px',
                border:"1px solid #ccc",outline:'none',borderRadius:'5px',height:'20px',padding:'5px'}}
                key={key}
                placeholder={placeholderVal}
                onChange={(event)=>this.onChangeHandler(event,key)} 
                value={this.state[key]}
                />)
            }
           }

           content.push(
           <button 
           style={
               {marginLeft:'10px',
               width:'90%',
               padding:"10px",
               color:'white',
               border: "none",
             borderRadius:"5px",
             backgroundColor:"#50b9fd"

            }}
            key={"createButton"}
             onClick={this.onCreateClicked}>Create</button>)
        return<div style={{float:'left'}}>
        <div key={"header"} style={{display:"flex",justifyContent:'space-evenly'}}>
        <p> Create New</p>
         <p style={{cursor:"pointer"}} onClick={this.props.clicked}>X</p>
        </div>
        {content}</div>

    }
}
const mapDisptachToProps= dispach=>{
    return {
        onCreateHandler: (addContent)=>dispach(actions.addItem(addContent))
    }
}
export default connect(null,mapDisptachToProps)( AddModal);