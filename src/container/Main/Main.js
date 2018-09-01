import React,{Component} from'react';
// import QuickAccess from '../../component/QuickAccess/QuickAccess';
import {connect} from 'react-redux';
import Display from '../Display/Display';
import TopBar from '../../component/TopBar/TopBar';
import './Main.css';
import * as actions from '../../store/index';
class Main extends Component{

upOneDirectory=()=>{
    console.log(this.props.pathDisplay);
    this.props.goUpOneDirectory();
}

    render(){
        return(
         <div style={{display:'flex'}}>
        {/* <QuickAccess data={this.props.root}/> */}
        <div className="content3" >
         <TopBar pathDisplay={this.props.pathDisplay} clicked={this.upOneDirectory}/>
             <Display />
         
         </div>
    
      
        </div>
        );
    }
}
const mapStateToProps=state=>{
    console.log(state.pathDisplay)
    return{
       pathDisplay:state.pathDisplay,
       root:state.root
    };
}
const mapDispatchToProps= dispatch=>{
    return{
        goUpOneDirectory:()=>dispatch(actions.upOneDirectory())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);