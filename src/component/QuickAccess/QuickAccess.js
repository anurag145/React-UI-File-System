import React,{Component} from 'react';
import './QuickAccess.css';
import { connect }from 'react-redux';
import QuickAccessElement from './QuickAccessElement/QuickAccessElement';
import * as actions from '../../store/index';
class  QuickAccess extends Component{

    arrowClicked=(Id)=>{
    this.props.handler(Id);
}
    render(){
        let folder = this.props.rootList;
    return(
    <div className='QuickAccess'>
    <div className='content4'>
    <p key={'root'}>Root</p>
        <div>
          {  
        folder.map(el=>{
            if(this.props.state[el].type!=='file')
            { 
                let val={
            ...this.props.state[el],
            main:this.props.state,
            id:el,
            clicked:this.arrowClicked
            }
           return QuickAccessElement(val)
            } 
        
           else
           return null
        })
       }
        </div>
    </div>
    </div>
    );
    }
} 
const mapStateToProps= state=>{
    return {
        rootList: state.rootList,
        state:state
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        handler:(Id)=>dispatch(actions.showSubMenu(Id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuickAccess);