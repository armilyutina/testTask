import React, { useState } from 'react';

import './TableSearch.css';



const TableSearch = props => {
  const [value, setValue] = useState('')
  const handleChange = e => setValue(e.target.value)

  return(
    <div className = "TableView">

        <button onClick = {() => props.onSearch(value)}
                className = ""
        />


        <input  type = "text"
                className = "input"
                onChange = {handleChange}
                value = {value} />

    </div>
  )
}



export default TableSearch;
