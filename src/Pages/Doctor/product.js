import React from 'react';
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button
} from 'semantic-ui-react';


function Appointment() {
  return (
    <div className="appointment-page" style={{ marginTop: '50px'}}>
      <Table striped style={{ width: '90%', margin: '0 auto' }}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Birthdate</TableHeaderCell>
            <TableHeaderCell>Phone Contacts</TableHeaderCell>
            <TableHeaderCell>Appointment's Date</TableHeaderCell>
            <TableHeaderCell>Reason For Visit</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="center-cell">Edit Appointment</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Lilki</TableCell>
            <TableCell>13/2/1999</TableCell>
            <TableCell>0912834123</TableCell>
            <TableCell>20/2/2024</TableCell>
            <TableCell>Routine Check-up</TableCell>
            <TableCell>Waiting</TableCell>
            <TableCell className="center-cell">
              <Button primary>Edit</Button>
            </TableCell>
          </TableRow>
      
        </TableBody>
      </Table>
    </div>
  );
}

export default Appointment;
