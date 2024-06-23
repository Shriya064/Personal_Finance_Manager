import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';


function Login() {
   
    const [soeid, setSoeid] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/login", {
            soeid: soeid,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Soeid not exits") 
             {
               alert("Soeid not exits");
             } 
             else if(res.data.message == "Login Successfull")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Soeid and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

    return (
      <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="soeid">SOEID:</label>
          <input type="text" id="soeid" name="soeid" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
       
    );
  }
  
  export default Login;

  /*
  <div>
            <div className="container">
              
              <div className="row">
                <h2>Login</h2>
                <hr/>
              </div>

              <div className="row">
              <div className="col-sm-6">
              <form>
                <div className="form-group">
                   <label>Soeid</label>
                   <input type="soeid"  className="form-control" id="soeid" placeholder="Enter your soeid" value={soeid} onChange={(event) => {
                   setSoeid(event.target.value);
                   }}/>
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password"  className="form-control" id="password" placeholder="Enter password" value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}/>
                </div>
                  
                <button type="submit" className="btn btn-primary" onClick={login} >Login</button>
              </form>

              </div>
            </div>
        </div>

     </div>
  
  */