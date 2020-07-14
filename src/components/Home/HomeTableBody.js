import React from 'react';
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
  TableSortLabel,
  TableContainer,
  Button
} from '@material-ui/core'

const HomeTableBody = ({
  room
}) => {
  return (
    <TableRow>
      <TableCell>
        <TableSortLabel direction="desc">{room.name}</TableSortLabel>
      </TableCell>
      <TableCell>
        <TableSortLabel direction="desc">{room.creator.name}</TableSortLabel>
      </TableCell>
      <TableCell>
        <TableSortLabel direction="desc">{room.members.length}</TableSortLabel>
      </TableCell>
      <TableCell>
        <TableSortLabel direction="desc">Welcome to chatroom</TableSortLabel>
      </TableCell>
      <TableCell>
        <TableSortLabel direction="desc">02/06/2020</TableSortLabel>
      </TableCell>
    </TableRow>
  );
};

export default HomeTableBody;