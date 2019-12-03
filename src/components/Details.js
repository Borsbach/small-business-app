import React from 'react'
import { Container, Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import GoogleMap from '../components/GoogleMap'


const Details = (props) => {
  console.log('props off history', props.history.location.state)
  const { Name, Description, Hours, Address, coordinates } = props.history.location.state;
    
  return (
    <Container maxWidth="sm" className="details-container">
      <Table>
        <TableHead>
          <TableBody>
            <TableRow className="name">{Name}</TableRow>
            <br />        
            <TableRow className="hours">{Hours}</TableRow>
            <br />
            <TableRow className="address">{Address}</TableRow>
            <br />
            <TableRow>{Description}</TableRow> 
            <br />             
            <GoogleMap coordinates={coordinates}/>
          </TableBody>
        </TableHead>
      </Table>
    </Container>
  )
}

export default withRouter ( Details ) 