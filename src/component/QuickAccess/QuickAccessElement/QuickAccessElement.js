import React from 'react';
import './QuickAccessElement.css';
const quickAccessElement = (props)=>{
    
    // let form = props.val?quickAccessElement({val:false}): ' too';
return (

<div>
   
<div className="content">

<p > {props.name}</p>
<div className='arrow-down'></div>
</div>

<div className="sub-menu">
<p>Hello</p>
<p>Hello</p>

</div>
       </div>


);
}
export default quickAccessElement;