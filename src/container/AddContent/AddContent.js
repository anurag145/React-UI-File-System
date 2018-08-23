import React ,{Component}from 'react';
import * as actions from '../../store/index';
import {connect} from 'react-redux';
class AddModal extends Component{
    state={
        info:{
        type:"file",
        name:"",
        size:"",
        creator:"",
        date:""
    }
    }
    onChangeHandler=(event,indentifier)=>{
     const updateVal={
         ...this.state.info
     }
     
     updateVal[indentifier]=event.target.value;
     this.setState({info:updateVal})
    }

    onCreateClicked=()=>{
        console.log(this.state.info)
        this.props.onCreateHandler(this.state.info);
  
    }
    render(){
        let content= [];
           for(let key in this.state.info){
            if(key==="type")
            {
                content.push(
                <div key={key} style={{display:"flex",justifyContent:'space-between'}}>
                  <p >Hello</p>
                  <p style={{cursor:"pointer"}} onClick={this.onCreateClicked}>X</p>
                </div>
              )
            }else{
                const placeholderVal=key.charAt(0).toUpperCase()+key.slice(1);
           
               content.push( <input 
                key={key}
                placeholder={placeholderVal}
                onChange={(event)=>this.onChangeHandler(event,key)} 
                value={this.state.info[key]}
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