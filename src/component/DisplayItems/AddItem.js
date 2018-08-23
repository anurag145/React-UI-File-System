import React from 'react';
import './AddItem.css';
const addItem = (props)=>{
    return(
      <div className={'AddItemContainer'} onClick={props.clicked}>
          <p className={'AddItemSign'}>+</p>
      </div>
    );
}
export default addItem;