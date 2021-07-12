import { Component } from 'react';
// @materials
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; 

// css
import styles from '../index.module.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={11}></Grid>
              <Grid item xs={1}>
                {/* <Button variant="contained" color="primary">  
                  X
                </Button> */}
                <button>X</button>
              </Grid>
            </Grid>             
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8} className={styles.textCenter}>
                title
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
        </Grid>  
      </>
    )
  };
};