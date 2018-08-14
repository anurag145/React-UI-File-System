import React,{Component} from 'react';
import {connect} from 'react-redux';
import './Display.css';
class Display extends Component{
    
    render(){
        const val =this.props.display;
        let file =[];
        let folder=[];
        val.folder.map(el=>{
           return folder.push( <div>
                 <i className="fa fa-folder fa-5x" style={{marginRight:"5px"}}></i>
                 <p style={{marginTop:'-5px'}}>{el}</p>
             </div>)
        });

        val.file.map(el=>{
        return file.push(
            <div>
            <i className="fa fa-file fa-5x"></i>
            <p style={{marginTop:'-5px'}}>{el}</p>
        </div>)
         
        });
        return (
             <div className='content2' >
             {folder}
             {file}
                
             </div>

        );
    }
}

const mapStateToProps=state=>{
    return{
     display:state.display
    };
};
export default connect(mapStateToProps)(Display);