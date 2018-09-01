import React from 'react';
import './TopBar.css'
const topBar=(props)=>{
    let path=props.main.pathDisplay.split("/");

    let pathDisplay=[];
    for(let i =0;i<path.length;i++)
       {   let style={color:'#9d9d9e'}  
            let val="";
             if(i===0){
               val="root"
             }else{

                val=props.main[path[i]].name;
             }

           if(i===path.length-1)
           {
               style={color:'#525659'};
               pathDisplay.push(
                <span key={i} style={style}>{val}</span>
                
              )
              continue;
           }
              pathDisplay.push(
                <span key={i} style={style}>{val} / </span>
              )
       }

      pathDisplay.join(" / ") 
    return (
        <div className={"TopBar"} >
             <i className="fa fa-arrow-circle-up fa-2x" onClick={props.clicked}></i>
          <div className={'Path'}> 	  {pathDisplay}</div>
          <div style={{marginLeft:"100px"}}>
           <span style={{marginTop:'1px'}}role="img" aria-label="search-icon"> &#128269;</span>
          <input type="text" placeholder={'Search for anything'} onKeyUp={(event)=>props.listener(event)}/>
          </div>
        </div>
    );
}
export default topBar;