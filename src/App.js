import React from 'react'; 
// @material
import { Container } from '@material-ui/core'; 
import Box from '@material-ui/core/Box';

// components 
import TodoList from './components/todolist';

class App extends React.Component {   
  state = {
    name:'Rost',
  }
  changeName = () => {     
     
    // this.setState(({name})=>{ 
    //   return {name:(name==='theDeDa')? 'Rost':'theDeDa'}
    // })        

    const myName = this.state.name === 'theDeDa' ? 'Rost' : 'theDeDa'
    this.setState({ name: myName})
      
    console.log('changeName :', this.state.name )
  }
  render() {
    return (
      // <Box>
      //   <Container maxWidth="md">
      //     <TodoList />
      //   </Container>
      // </Box>             
      <>
        <button onClick={this.changeName}></button>
      {this.state.name}
      </>
    )
  }
}

export {App};
// export default App;//
