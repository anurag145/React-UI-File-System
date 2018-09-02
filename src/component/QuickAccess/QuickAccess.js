import React,{Component} from 'react';
import './QuickAccess.css';
import { connect }from 'react-redux';
import QuickAccessElement from './QuickAccessElement/QuickAccessElement';
import * as actions from '../../store/index';
class  QuickAccess extends Component{

    arrowClicked=(Id)=>{
    this.props.handler(Id);
}
changeDirectory=(Id)=>{
    
this.props.directory(Id)
}
    render(){
        let folder = this.props.rootList;
    return(
    <div className='QuickAccess'>
    
    <p style={{marginLeft:"30px",fontSize:"15px",color:'#cecfd3'}}onClick={()=>this.changeDirectory("root")} key={'root'}><b>ROOT</b></p>
        <div>
          {  
        folder.map(el=>{
            if(this.props.state[el].type!=='file')
            { 
                let val={
            ...this.props.state[el],
            main:this.props.state,
            id:el,
            sub:false,
            pMargin:0,
            clicked:this.arrowClicked,
            changeDirectory:this.changeDirectory,
           
            }
           return QuickAccessElement(val)
            } 
        
           else
           return null
        })
       }
        </div>
    
    </div>
    );
    }
} 
const mapStateToProps= state=>{
    return {
        rootList: state.root.list,
        state:state
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        handler:(Id)=>dispatch(actions.showSubMenu(Id)),
        directory:(Id)=>dispatch(actions.changeDirectory(Id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuickAccess);