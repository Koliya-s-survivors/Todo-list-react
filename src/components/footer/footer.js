import React from 'react';

// @material
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        style={{ marginTop: "10px" }}>
        <LinearProgress variant="determinate" value={80} style={{ width: "60%" }} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
        >
          Delete All
        </Button>
      </Grid>
    )
  };
};