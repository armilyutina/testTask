import React from 'react';

import './Show.css';

const Show = props => {
  return(
    <div>
      { props.result.map((item, i) => (
        <div className = "field" key = {i} onClick = {props.onRowSelect.bind(null, item)}>
          <div>{item.id}</div>
          <div>{item.firstName}</div>
          <div>{item.lastName}</div>
          <div>{item.phone}</div>
          <div>{item.email}</div>
        </div>
        )
       )
      }
    </div>
  );
}


export default Show;
