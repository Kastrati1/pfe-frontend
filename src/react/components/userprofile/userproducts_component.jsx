import React from "react";
import { Table } from 'reactstrap';

const UserProductsComponent = ({ product_name, product_description, product_prix }) => {
  return (
    <div>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> {product_name} </th>
            <th> {product_description} </th>
            <th> {product_prix} </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UserProductsComponent;
