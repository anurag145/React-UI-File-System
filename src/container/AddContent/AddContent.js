import React ,{Component}from 'react';
import * as actions from '../../store/index';
import {connect} from 'react-redux';
class AddModal extends Component{
    state={
        
        type:"",
        name:"",
        size:"",
        creator:"",
        date:""
    
    }
    onChangeHandler=(event,indentifier)=>{
     const updateVal={
         ...this.state
     }
     
     updateVal[indentifier]=event.target.value;
     this.setState({...updateVal})
    }

    onCreateClicked=()=>{
        console.log({
            ...this.state,
           parent: this.props.parent
            
        })
        this.props.onCreateHandler({
            ...this.state,
           parent: this.props.parent
            
        });
        
        this.props.clicked();
  
    }
    render(){
        let content= [];
        
           for(let key in this.state){
               
            if(key==="type")
            {   const placeholderVal=key.charAt(0).toUpperCase()+key.slice(1);
                content.push(
                <div key={key} style={{display:"flex",justifyContent:'space-between'}}>
                 <input 
                key={key}
                placeholder={placeholderVal}
                onChange={(event)=>this.onChangeHandler(event,key)} 
                value={this.state[key]}
                />
                  <p style={{cursor:"pointer"}} onClick={this.props.clicked}>X</p>
                </div>
              )
            }else{
                const placeholderVal=key.charAt(0).toUpperCase()+key.slice(1);
           
               content.push( <input 
                key={key}
                placeholder={placeholderVal}
                onChange={(event)=>this.onChangeHandler(event,key)} 
                value={this.state[key]}
                />)
            }
           }

           content.push(<button key={"createButton"} onClick={this.onCreateClicked}>Create</button>)
        return<div>{content}</div>

    }
}
const mapDisptachToProps= dispach=>{
    return {
        onCreateHandler: (addContent)=>dispach(actions.addItem(addContent))
    }
}
export default connect(null,mapDisptachToProps)( AddModal);