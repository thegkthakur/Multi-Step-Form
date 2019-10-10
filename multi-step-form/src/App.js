import React,{Component} from 'react';
//import FormUserDetails from './components/FormUserDetails';
import { UserForm } from './components/UserForm';

import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <UserForm/>
      </div>
    );
  }
}

export default App; 