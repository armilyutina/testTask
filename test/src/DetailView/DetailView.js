import React from 'react';

import './DetailView';

const DetailView = ({ row }) => {
  return(
    <div className = "DetailView">
      <span>ID: {row.id}</span>< br />
      <span>firstName: {row.firstName}</span>< br />
      <span>lastName: {row.lastName}</span>< br />
      <span>EMAIL: {row.email}</span>< br />
      <span>PHONE: {row.phone}</span>< br />
      <span>Description: {row.description}</span>< br />
      <span>City: {row.address.city}</span>< br />
      <span>StreetAddress: {row.address.streetAddress}</span>< br />
      <span>State: {row.address.state}</span>< br />
      <span>Zip: {row.address.zip}</span>< br />
    </div>
  );
}




export default DetailView;
