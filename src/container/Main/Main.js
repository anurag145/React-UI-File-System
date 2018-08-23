import React,{Component} from'react';
// import QuickAccess from '../../component/QuickAccess/QuickAccess';
import {connect} from 'react-redux';
import Display from '../Display/Display';
import TopBar from '../../component/TopBar/TopBar';
import './Main.css';
class Main extends Component{

upOneDirectory(){
    console.log("hello");
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

export default connect(mapStateToProps)(Main);