import React from 'react';
import './QuickAccessElement.css';

const element=(props)=>{

const clickHandler=()=>{
 
    props.clicked(props.id);
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
                clicked:props.clicked
             }
             return element(val)
         })
    }
    return (

        <div key={props.id}>
      <div className="content">
    <p > {props.name}</p>
        {showArrow>0? props.show?<div onClick={clickHandler} className='arrow-up' ></div>
        :<div onClick={clickHandler} className='arrow-down' ></div> :null        }  
      </div>
     {subMenu?<div className="sub-menu">
      {subMenu}</div>:null}
             </div>
    )
}


export default element;