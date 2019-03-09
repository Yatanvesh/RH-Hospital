import React, { Component } from 'reactn';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className='app-container'>
                <NavBar signOut={this.signOut}/>
                <Switch>
               </Switch>

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
