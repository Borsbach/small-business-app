import React from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { withRouter } from "react-router-dom"
import styled from 'styled-components'

const StyledRow = styled(TableRow)`
  :hover {
    cursor: pointer;
  }
`
const Listings = (props) => {
  
const rowClick = (e, listing) => {
  e.preventDefault()
  props.history.push({ pathname: `/listing/${listing.id}`, state: listing })
}

  return (
    <Container maxWidth="lg" className="listings-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.listings.map((listing, idx) => (
              <StyledRow key={listing.id} onClick={(e) => rowClick(e, listing)}>
                  <TableCell underline="hover">{listing["Name"]}</TableCell>
                  <TableCell>{listing["Description"]}</TableCell>
                  <TableCell>{listing["Hours"]}</TableCell>
                  <TableCell>{listing["Address"]}</TableCell>
              </StyledRow>
            ))}
          </TableBody>
      </Table>
    </Container>
  )
}

// {/* <Link to={{ pathname: `/listing/${listing.id}`, state: listing }}></Link> */}

export default withRouter(Listings)