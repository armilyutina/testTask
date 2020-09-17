import React from 'react';

const Highline = (props) => {
  return(
    <div className = "highline">
      <div><h2> <span onClick = {props.onSort.bind(null,'id')}>{props.sortKey === 'id' ? props.switchOn : null} ID</span></h2></div>
      <div><h2> <span onClick = {props.onSort.bind(null,'firstName')}>{props.sortKey === 'firstName' ?  props.switchOn : null} firstName</span> </h2></div>
      <div><h2> <span onClick = {props.onSort.bind(null,'lastName')}>{props.sortKey === 'lastName' ?  props.switchOn : null} lastName </span></h2></div>
      <div><h2> <span onClick = {props.onSort.bind(null,'phone')}>{props.sortKey === 'phone' ? props.switchOn : null} phone </span></h2></div>
      <div><h2> <span onClick = {props.onSort.bind(null,'email')}>{props.sortKey === 'email' ?  props.switchOn : null}email</span></h2></div>
    </div>
  )
}

export default Highline;
