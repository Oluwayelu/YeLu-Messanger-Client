import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
  TableSortLabel,
  TableContainer
} from '@material-ui/core'
import HomeTableBody from './HomeTableBody'

const HomeTable = ({
  room
}) => {

  return (
    <TableContainer>
      <Table>
        <TableHead style={{ backgroundColor: '#007bff', color: '#fff' }}>
          <TableRow>
            <TableCell>
              <TableSortLabel direction="desc">Room Name</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel direction="desc">Owner</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel direction="desc">No. Of Members</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel direction="desc">Last Message</TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel direction="desc">Time</TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            room.myrooms.map(room => <HomeTableBody key={room._id} room={room} />)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => ({
  room: state.room
})

export default connect(mapStateToProps)(HomeTable);