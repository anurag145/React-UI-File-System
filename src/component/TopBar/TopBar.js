import React from 'react';
import './TopBar.css'
const topBar=(props)=>{
    return (
        <div className={"TopBar"} >
             <i className="fa fa-arrow-circle-up" onClick={props.clicked}></i>
          <div className={'Path'}>    {props.pathDisplay}</div>
        </div>
    );
}
export default topBar;