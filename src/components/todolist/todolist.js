import React from "react";
import { Container, Grid } from '@material-ui/core';

// Components
import Header from '../header';
import Content from '../content';
import Footer from '../footer';

export default class TodoList extends React.Component {
  render() {
    return (      
      <Container maxWidth="sm" >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Header />
          <Content />
          <Footer />
        </Grid>           
      </Container >
    )
  };
};





 