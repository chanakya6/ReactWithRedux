import React from 'react';
import Table from 'react-bootstrap/Table';


class SingleRecord extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.id);
    }
    render() {
        return (
            <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
                        <th>Email</th>
                          <th>City</th>
          <th>Suite</th>
          <th>ZipCode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>        
      </tbody>
    </Table>
        )
    }
}

export default SingleRecord;