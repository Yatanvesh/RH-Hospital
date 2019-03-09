import React, { Component } from 'reactn';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className='app-container'>
                <NavBar signOut={this.signOut}/>
                <Switch>
                <Route path='/' component={Home} exact />
               </Switch>
                <Footer/>
            </div> 


        </BrowserRouter>
    );
  }
}

export default App;
