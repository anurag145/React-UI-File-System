import React from 'react';
import './TopBar.css'
const topBar=(props)=>{
    let path=props.main.pathDisplay.split("/");
    let pathDisplay=[];let val={style:{color:'#9d9d9e',cursor:'pointer'},slash:" / "};
    for(let i =0;i<path.length;i++)
       {   
             if(i===path.length-1)
           {     val.style.color='#525659'
                 val.slash=""
           }
              pathDisplay.push(
                <span id={path[i]} key={path[i]}
                 style={val.style} onClick={(event)=>props.change(event)}>
                 {props.main[path[i]].name}{val.slash}</span>
              )
       }
    return (
        <div id={"TopBar"} >
     
             <i id={"up"} className="fa fa-arrow-circle-up fa-2x" onClick={props.clicked}></i>
          <div className={'Path'}> 	  {pathDisplay}
          </div>
          <div id={"search"}>
  
          <input id={"input"} type="text" placeholder={'Search for anything'} 
          value={props.value} 
          
          onChange={(event)=>props.listener(event)}/>
          </div>
        </div>
    );
}

export default topBar;