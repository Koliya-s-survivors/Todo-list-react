import {Component} from 'react';
// css
import styles from './index.module.css';
// components 
import Header from './header';
import Content from './content';
import Footer from './footer';

export default class Modal extends Component {
  render() {
    return(
      <div className={styles.root}>
       <div className ={styles.wrapper}>
          <Header />
          <Content>
            Some text
            <div>{this.props.children}</div>
          </Content>
          <Footer />
       </div>
      </div>
    )
  }
}
