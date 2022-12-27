import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

const MUITable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aria-label="simple label" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const TableData = [
  {
    id: 1,
    first_name: "Ravi",
    last_name: "Bentall",
    email: "rbentall0@cnn.com",
    gender: "Male",
    ip_address: "121.87.182.72",
  },
  {
    id: 2,
    first_name: "Jeromy",
    last_name: "Pirrey",
    email: "jpirrey1@amazon.co.jp",
    gender: "Male",
    ip_address: "125.216.207.197",
  },
  {
    id: 3,
    first_name: "Marabel",
    last_name: "Piddletown",
    email: "mpiddletown2@shop-pro.jp",
    gender: "Female",
    ip_address: "51.249.68.7",
  },
  {
    id: 4,
    first_name: "Ilsa",
    last_name: "Wimpenny",
    email: "iwimpenny3@sphinn.com",
    gender: "Female",
    ip_address: "49.124.95.138",
  },
  {
    id: 5,
    first_name: "Natal",
    last_name: "Doolan",
    email: "ndoolan4@ebay.co.uk",
    gender: "Male",
    ip_address: "177.109.73.235",
  },
  {
    id: 6,
    first_name: "Katleen",
    last_name: "McDougall",
    email: "kmcdougall5@comcast.net",
    gender: "Female",
    ip_address: "253.146.87.69",
  },
  {
    id: 7,
    first_name: "Gates",
    last_name: "Dzenisenka",
    email: "gdzenisenka6@webs.com",
    gender: "Female",
    ip_address: "184.182.205.210",
  },
  {
    id: 8,
    first_name: "Tyrus",
    last_name: "Millwater",
    email: "tmillwater7@vk.com",
    gender: "Male",
    ip_address: "57.101.83.35",
  },
  {
    id: 9,
    first_name: "Revkah",
    last_name: "Foley",
    email: "rfoley8@dell.com",
    gender: "Female",
    ip_address: "250.114.91.196",
  },
  {
    id: 10,
    first_name: "Katina",
    last_name: "Stickens",
    email: "kstickens9@flickr.com",
    gender: "Female",
    ip_address: "148.200.122.15",
  },
];
export default MUITable;
