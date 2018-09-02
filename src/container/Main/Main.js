import React,{Component} from'react';
import QuickAccess from '../../component/QuickAccess/QuickAccess';
import {connect} from 'react-redux';
import Display from '../Display/Display';
import TopBar from '../../component/TopBar/TopBar';
import './Main.css';
import * as actions from '../../store/index';
class Main extends Component{

upOneDirectory=()=>{
    
    this.props.goUpOneDirectory();
}
changeDirectory=(event)=>{
    this.props.directory(event.target.id)
    }
onKeyUpHandler=(event)=>{
  
  this.props.search(event.target.value);
}

    render(){
      
        return(
         <div style={{display:'flex'}}>
        <QuickAccess />
        <div className="content3" >
         <TopBar main={this.props.main}
          clicked={this.upOneDirectory} 
          listener={this.onKeyUpHandler}
          value={this.props.main.searchValue}
          change={this.changeDirectory}
          />
          <div style={{marginTop:"30px"}}>
             <Display />
         </div>
         </div>
    
      
        </div>
        );
    }
}
const mapStateToProps=state=>{
  
    return{
       main:state, 
       
       
    };
}
const mapDispatchToProps= dispatch=>{
    return{
        goUpOneDirectory:()=>dispatch(actions.upOneDirectory()),
        search:(val)=>dispatch(actions.search(val)),
        directory:(Id)=>dispatch(actions.changeDirectory(Id))
     
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);