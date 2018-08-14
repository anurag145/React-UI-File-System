import React,{Component} from 'react';
import './QuickAccess.css';
import { connect }from 'react-redux';
import QuickAccessElement from './QuickAccessElement/QuickAccessElement';
class  QuickAccess extends Component{

    render(){
        let folder= this.props.folder;
        console.log(this.props.folder);
        let folderDisplay=[];
        folderDisplay.push(<QuickAccessElement key={'root'} name={'root'}/>)
        for(let key in folder)
        {  
            folderDisplay.push(
            <QuickAccessElement key={key} name={key} />
               );
        }
      //  let file=props.file;
    return(
    <div className='QuickAccess'>
    <div className='content4'>
        {folderDisplay}
        
    </div>
    </div>
    );
    }
} 
const mapStateToProps= state=>{
    return {
        folder: state.root.folder
    }
}
export default connect(mapStateToProps)(QuickAccess);