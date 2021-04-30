import React from 'react';

export const HandymanJobTable = (props) => {
  const color = props.jobCompleted ? 'Green' : 'Yellow'
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.customerName}</td>
      <td>{props.customerPhone}</td>
      <td>{props.jobName}</td>
      <td style={{backgroundColor: color}}>{props.jobCompleted ? 'Completed' : 'Pending'}</td>
    </tr>
  );
};

export const CustomerJobTable = (props) => {
  const color = props.isAssigned ? 'Green' : 'Yellow'
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.jobName}</td>
      <td style={{backgroundColor: color}}>{props.isAssigned ? 'Assigned' : 'Pending'}</td>
    </tr>
  );
};