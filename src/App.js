import React, { Component,setGlobal ,useGlobal} from 'reactn';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';

let ws = new WebSocket('ws://10.177.7.176:3006/signinhospital');

setGlobal({
    signedIn:false,
    user:{
        username:'',
        age:'',
        sex:'',
        phone:'',
        address:'',
        medCondition:'',
        bloodGroup:'',
        medicineIntolerance:'',
        ilnesses:'',
        medication:'',
        special:''
    },
    ws:ws,
});

ws.onmessage = (message) =>{
    console.log(message);
    if(message.data==='404'){
        console.log("Error");
    } else{
        let obj = JSON.parse(message.data);
        if(obj.action == 'success')
            console.log('connected')
        else if(obj.action == 'distress'){

        }
    }
};

let userObj= {
    email:'silicon',
    password:'123'
}
ws.onopen = function(event) {
    ws.send(JSON.stringify(userObj));
};


class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div className='app-container'>
                <NavBar/>
                <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/signin' component={SignIn} />
               </Switch>
                <Footer/>
            </div> 


        </BrowserRouter>
    );
  }
}

export default App;
