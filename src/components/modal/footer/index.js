import { Component } from 'react';
// @materials
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// css
import styles from '../index.module.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="secondary">
              Close
            </Button>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </>
    )
  };
};