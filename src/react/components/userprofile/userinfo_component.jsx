import React from "react";
import { Table } from 'reactstrap';

const UserInfoComponent = ({ first_name, last_name, username, email}) => {
  return (

    <div>
      
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> {first_name} </th>
            <th> {last_name} </th>
            <th> {username} </th>
            <th> {email} </th>
          </tr>
        </tbody>
      </Table>
    

    </div>
   );
};

export default UserInfoComponent;