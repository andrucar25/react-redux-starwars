import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkMovieCharacter } from '../../actions/movie';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 const TableCharacters = ({characters}) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkMovieCharacter(characters));
    },[])

    const {charactersDetail} = useSelector(state=>state.movie);

  return (
    <div className='py-20 w-3/4'>
        <TableContainer component={Paper}>
    <Table sx={{ 
        minWidth: 650 
        }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{opacity:0.8}}>Nombre</TableCell>
          <TableCell sx={{opacity:0.8}}>Mundo natal</TableCell>
          <TableCell sx={{opacity:0.8}}>Color de cabello</TableCell>
          <TableCell sx={{opacity:0.8}}>Altura</TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
            {charactersDetail.map(characterDetail=>(
                <TableRow
                  key={characterDetail.name}
                >
                      <TableCell>{characterDetail.name}</TableCell>
                      <TableCell >{characterDetail.homeworld}</TableCell>
                      <TableCell>{characterDetail.hair_color}</TableCell>
                      <TableCell>{characterDetail.height}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default TableCharacters