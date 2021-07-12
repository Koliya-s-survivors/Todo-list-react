import { Component } from 'react';
// @materials
import Grid from '@material-ui/core/Grid';
// css
 

export default class Content extends Component {
  render() {
    return (
      <>
        <Grid container spacing={12}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, consequatur. Cumque hic magnam dolores vitae ipsa in, totam non beatae similique, delectus earum. Pariatur, mollitia? Molestias doloribus optio quia corrupti.            
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </>
    )
  };
};