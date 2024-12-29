/* eslint-disable no-unused-vars */
import { TextField } from '@mui/material'
import React from 'react';

const SearchComponent = () => {
  return (
      <div >
          <TextField sx={{width:"100%",paddingTop:"15px",marginTop:"10px"}} id="filled-basic" label="Search Movies" variant="filled" />
    </div>
  )
}

export default SearchComponent