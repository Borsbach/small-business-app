import React from 'react';
// import Listings from './components/Listings'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
// import listings from '../listings.json'
// import DeleteIcon from '@material-ui/icons/Delete'

const Listings = (props) => {
  console.log(props)

  debugger
  return (
    <Container maxWidth="lg" className="car-container">
      <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              {/* <TableCell>Delete</TableCell> */}
            </TableRow>
          </TableHead>
            <TableBody>
              {props.listings.map((listing, idx) => (
              <TableRow key={listing.id}>
                <TableCell component="th" scope="row">{listing.id}</TableCell>
                <TableCell>{listing["Name"]}</TableCell>
                <TableCell>{listing["Description"]}</TableCell>
                <TableCell>{listing["Hours"]}</TableCell>
                <TableCell>{listing["Address"]}</TableCell>
                {/* <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeCar(idx)}
                    className="icon text-red" />
                </TableCell> */}
              </TableRow>
              ))}
            </TableBody>
        </Table>
    </Container>
  )
}

export default Listings