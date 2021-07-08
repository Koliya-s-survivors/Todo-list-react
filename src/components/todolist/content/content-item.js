import React from 'react';
// @material 
import { Grid, Button, ButtonGroup, Toolbar} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Box from '@material-ui/core/Box';


export default class ContentItems extends React.Component {
  render() {
    return (
      // <Toolbar>
      //   <Box display='flex' flexGrow={1}>
      //     {/* whatever is on the left side */}
      //   </Box>
      // </Toolbar>
       <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center" >
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <span>Some Text</span>  
        <ButtonGroup disableElevation variant="contained" color="primary" >
          <Button><CreateIcon /></Button>
          <Button><DeleteIcon /></Button>           
        </ButtonGroup>        
      </Grid>
    )
  };
};