import React from 'react';
import './QuickAccessElement.css';

const element=(props)=>{
const selected=props.main.selected===props.id?{backgroundColor:"#eeeff1"}:{};
const sub=props.sub?'sub-menu':'content';



const pStyle=props.sub?{ boxShadow: "-1px 0 rgba(0,0,0,0.2)",paddingLeft:"5px",marginLeft:props.pMargin.toString()+"px"}:{}

const clickHandler=()=>{
 
    props.clicked(props.id);
}
const select=()=>{
props.changeDirectory(props.id)
}
    const child=props.list;
    let subMenu=null;
    let showArrow=child.length;
    if(showArrow>0&&props.show===true)
    {
            subMenu= child.map(el=>{
             if(props.main[el].type==="file") 
             return null;
             
             let val={
                 key:{el},
                ...props.main[el],
                main:props.main,
                id:el,
                pMargin:props.pMargin+15,
                sub:true,
                clicked:props.clicked,
                changeDirectory:props.changeDirectory,
            
             }
             return element(val)
         })
    }
    return (

        <div key={props.id} style={{cursor:"pointer"}}   >
        <div style={selected} onClick={select}>
      <div id={sub} >
    <p style={pStyle} > {props.name}</p>
        {showArrow>0? props.show?<div style={{marginLeft:"10px"}} onClick={clickHandler} className='arrow-up' ></div>
        :<div onClick={clickHandler} 
        style={{marginLeft:"10px"}}
        className='arrow-down' ></div> :null        }  
      </div>
      </div>
     {subMenu?
      subMenu:null}
             </div>
    )
}


export default element;