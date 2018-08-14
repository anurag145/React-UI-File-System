import React,{Component} from'react';
import QuickAccess from '../../component/QuickAccess/QuickAccess';
import {connect} from 'react-redux';
import Display from '../Display/Display';
import './Main.css';
class Main extends Component{

    
    render(){
        return(
         <div style={{display:'flex'}}>
                <QuickAccess data={this.props.root}/>
        <div className="content3" >
        {this.props.pathDisplay}
             <Display/>
         
         </div>
    
      
        </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
       pathDisplay:state.pathDisplay,
       root:state.root
    };
}

export default connect(mapStateToProps)(Main);