import './login.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import {axiosConfig}  from '../api/axiosConfig';
function Login({ onLoginSuccess }) {

    const [logindetails, SetLoginDetails] = useState({ Username: '', Password: '' });
    
    const LoginData = (event) => {

        SetLoginDetails({ ...logindetails, [event.target.name]: event.target.value });
    }
    const LoginValidation = async (event) => {
        event.preventDefault();
        
        try {
            const { username, password } = logindetails;
            const result = await axiosConfig(username, password);
      
            if ((result.username === logindetails.username || result.password === logindetails.password)) {
                onLoginSuccess();
              } else { 
                alert('Invalid Input');
              }
            } catch (error) {
              alert('Error occurred during login: ' + error.message);
            }
          
      };

    return (
        <div className="LoginPage">
            <h4>Login</h4> 
            <form action='' onSubmit={LoginValidation} >
                <div className="boatusername"><input name="username" className="username" onChange={LoginData} required={true}></input></div>
                <div className="boatpassword"><input name="password" className="password" onChange={LoginData} required={true}></input></div>
                <button class="btn btn-outline-light" className="SumbitButton" value="Submit" required={true}>Login</button><br/>
                <select class="form-select form-select-lg mb-2"  name="cars" className="InovationLoginDropDown">
                    <option value="Inovation insurance">Inovation insurance</option>
                    <option value="Inovation policy quote">Inovation policy quote</option>
                </select>
            </form>
        </div>
    )
}

export default Login;