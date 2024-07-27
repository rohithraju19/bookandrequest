import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Home = () => {
    const [rows,setRows]=useState([])
    useEffect(()=>{
    axios.get('http://localhost:5000/requests').then((res)=>{
      // console.log(res.data.users)
      setRows(res.data)
    })

    },[])
  return (
<TableContainer style={{marginTop:'7%',fontFamily:'Aria'}} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <TableCell style={{fontFamily:'Aria'}}>TITLE</TableCell> */}
          <TableCell align="center" style={{fontFamily:'Aria'}}>bookid</TableCell>
          <TableCell align="center" style={{fontFamily:'Aria'}}>bookName</TableCell>
          {/* <TableCell align="center" style={{fontFamily:'Aria'}}>IMAGE</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
         {rows.map((row) => (
          <TableRow
            key={row.bookId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {/* <TableCell component="th" scope="row" style={{fontFamily:'Aria'}}>
              {row.title}
            </TableCell> */}
            <TableCell align="right" style={{fontFamily:'Aria'}}>{row. bookName}</TableCell>
            {/* <TableCell align="right" style={{fontFamily:'Aria'}}>{row.category}</TableCell>
            <TableCell align="right" style={{fontFamily:'Aria'}}>{row.image}</TableCell> */}
          </TableRow>
        ))} 
      </TableBody>
    </Table>
  </TableContainer>
  )
}
export default Home