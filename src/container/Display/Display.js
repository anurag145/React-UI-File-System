import React,{Component} from 'react';
import {connect} from 'react-redux';
import Folder from '../../component/DisplayItems/Folder/Folder';
import File from '../../component/DisplayItems/File/File';
import AddItem from '../../component/DisplayItems/AddItem';
import Modal from '../../component/Modal/Modal';
import AddContent from '../AddContent/AddContent';
import './Display.css';
class Display extends Component{
state={
    0:"root",
    show:false,
    type:"info"
}
onCancelModal=()=>{
    
    this.setState({show:false})
}
 onDoubleClickHandler=(path)=>{
     console.log(path);
 }
 onAddClickHandler=()=>{
     
    this.setState({show:true,type:"addFile"})
 }   
    render(){
      console.log(this.props.state)
         let displayModal=null;
         if(this.state.show){
             if(this.state.type==='addFile')
             {
                 displayModal= <AddContent clicked={this.onCancelModal}/>;
                   }
         }
        const val =this.props.display;
        const folder= val.folder.map(el=>{
           return <Folder key={el} name={el} clicked={this.onDoubleClickHandler}/>
        });
        const file = val.file.map(el=>{
        return  <File key={el} name={el}/>
        });
        
        return (


            <div>  
             <Modal show={this.state.show}>{displayModal}</Modal>
            <div className='content2' >
             {folder}
             {file}
             <AddItem clicked={this.onAddClickHandler}/>   
             </div>
             </div>



        );
    }
}

const mapStateToProps=state=>{
    return{
     state:state,   
     display:state.display
    };
};
export default connect(mapStateToProps)(Display);