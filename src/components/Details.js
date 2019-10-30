import React from 'react'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withRouter } from 'react-router-dom'


const Details = (props) => {
  const { Name, Description, Hours, Address } = props.history.location.state;
    
  return (
    <Container maxWidth="sm" className="details-container">
      <Table>
        <TableBody>
          <TableRow><h1>{Name}</h1></TableRow>
          <TableRow><h3>{Hours}</h3></TableRow>
          <TableRow><h3>{Address}</h3></TableRow>
          <TableRow>{Description}</TableRow>              
        </TableBody>
      </Table>
    </Container>
  )
}

export default withRouter ( Details ) 