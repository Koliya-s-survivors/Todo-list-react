import React from 'react';
// @material
import { Button, TextField, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

export default class Header extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off" style = {{width:"100%",marginBottom:"10px"}}>
        <h1 style={{textAlign:"center"}}>TodoList</h1>
        <Grid xs={12}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >          
          <TextField id="standard-basic" label="Enter new task" style={{ marginRight: "10px" , width:"80%"}} />
            <Button
              variant="contained"
              color="primary"               
              startIcon={<SaveIcon />}
            >Add</Button>
        </Grid>
      </form>
    )
  };
};