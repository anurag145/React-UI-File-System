import React,{Component} from 'react';
import {connect} from 'react-redux';
import Items from '../../component/DisplayItems/Items/Items';
import AddItem from '../../component/DisplayItems/AddItem';
import Modal from '../../component/Modal/Modal';
import AddContent from '../AddContent/AddContent';
import * as actions from '../../store/index';
import './Display.css';
class Display extends Component{
state={
    0:"root",
    show:false,
    type:"info"
}
//functions 
infoModal=(val)=>{
console.log(val);
}

removeItem=(val)=>{
    console.log(val);
    this.props.remove(val);
}
onCancelModal=()=>{
    
    this.setState({show:false})
}
 onDoubleClickHandler=(Id)=>{
     console.log(Id);
     this.props.handleDoubleClick(Id);
 }
 onAddClickHandler=()=>{
     
    this.setState({show:true,type:"addFile"})
 }   
    render(){
     console.log(this.props.main)
         let displayModal=null;
         if(this.state.show){
             if(this.state.type==='addFile')
             {
                 displayModal= <AddContent parent={this.props.parent} clicked={this.onCancelModal}/>;
                   }
         }
        let val =this.props.display;
     
        const items= [];
        val.map(el=>{
            if(this.props.main[el].type==='folder')
           items.push( 
           <Items key={el} 
            id={el} name={this.props.main[el].name} 
            type={this.props.main[el].type} 
            clicked={this.onDoubleClickHandler}
            info={this.infoModal}
            remove={this.removeItem}
            />)
            else
            items.unshift( 
            <Items key={el} 
            id={el} 
            name={this.props.main[el].name} 
             type={this.props.main[el].type} 
             clicked={this.onDoubleClickHandler}
             info={this.infoModal}
            remove={this.removeItem}/>)
            return el;
         });    
        
        return (


            <div>  
             <Modal show={this.state.show}>{displayModal}</Modal>
            <div className='content2' >
             {items}
             <AddItem clicked={this.onAddClickHandler}/>   
             </div>
             </div>



        );
    }
}

const mapStateToProps=state=>{
    return{
     display:state.display,
     main:state,
     parent:state.parent
    };
};
const mapDispatchToProps=dispatch=>{
    return {
     handleDoubleClick :(Id)=>dispatch(actions.enterPath(Id)),
     remove:(Id)=>dispatch(actions.deleteItem(Id))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Display);