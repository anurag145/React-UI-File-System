import React ,{Component}from 'react';
import './Info.css'
import {connect} from 'react-redux';
class Info extends Component{

    render(){
        return<div style={{float:'left'}}>
        <div key={"header"} style={{display:"flex",justifyContent:'space-evenly'}}>
        <p>{(this.props.state[this.props.id].type).charAt(0).toUpperCase()
            +(this.props.state[this.props.id].type).slice(1)} Info</p>
         <p style={{cursor:"pointer"}} onClick={this.props.clicked}>X</p>
        </div  >
        <div id={"item"}>
        <p>Name: <span style={{color:"#aaa7a7"}}>{this.props.state[this.props.id].name}</span></p>
        <p>Size: <span style={{color:"#aaa7a7"}}>{this.props.state[this.props.id].size}</span></p>
        <p>Creator name: <span style={{color:"#aaa7a7"}}>{this.props.state[this.props.id].creator}</span></p>
        <p>Created date: <span style={{color:"#aaa7a7"}}>{this.props.state[this.props.id].date}</span></p>
        </div>
        </div>

    }
}
const mapStateToProps= state=>{
    return {
        state:state
    }
}
export default connect(mapStateToProps)( Info);