import React from "react";
import { Table } from 'reactstrap';

const UserInfoComponent = ({ first_name, last_name, username}) => {
  return (

    <div>
      <Table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> {first_name} </th>
            <th> {last_name} </th>
            <th> {username} </th>
          </tr>
        </tbody>
      </Table>
    </div>
   );
};

export default UserInfoComponent;