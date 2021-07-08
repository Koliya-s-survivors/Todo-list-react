import React from 'react';
// @material
import { Container, Grid } from '@material-ui/core';

// components
import Header from './header';
import Content from './content';
import Footer from './footer';

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        <Grid container >          
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            {/* Header */}
            <Header/>
            </Grid>           
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* Header */}
            <Content />
            </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* Footer */}
            <Footer/>
            </Grid>
        </Grid>         
      </>
    )
  };
};






// {/* Header */ }
// <Header />

// {/* Content */ }
// <Content />

// {/* Footer */ }
// <Footer />