import React from 'react';
const file = (props)=>{
    return(
        <div>
        <i className="fa fa-file fa-5x" style={{marginRight:"10px"}}></i>
        <p style={{marginTop:'-5px',fontSize:'10px',textAlign:'center'}}>{props.name}</p>
       </div>
    );
}
export default file;