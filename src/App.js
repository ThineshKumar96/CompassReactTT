import './App.css';
import Login from './Login/Login';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPageDetails from './Login/LoginPageDetails';

import { useState } from "react";
function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <div>
      {isLoggedIn ? (
        <div className="Header">
        <Header />
        </div>
        
      ) : (
      <div className="grid-item1">
        <div className="Title">
          <h1>INNOVATION</h1>
          <h5>group</h5>
        </div>
        <div className="ComponentPositionForLogin">
          <Login onLoginSuccess={handleLoginSuccess}></Login>
        </div>
      </div>)}</div>
      {isLoggedIn ? null : (
      <div className="grid-item2">
        <div className="ComponentPositionForLoginDetails">
          <LoginPageDetails></LoginPageDetails>
        </div>
      </div>
      )}
    </div>
    
    
  );
}

export default App;
