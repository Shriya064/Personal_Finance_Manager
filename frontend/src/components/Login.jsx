import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
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
             
             if (res.data.message === "Soeid not exits") 
             {
               alert("Soeid not exits");
             } 
             else if(res.data.message === "Login Successfull")
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
          <div>
            <div class="container">
                <div class="row">
                  <p className="fincare-text">FinCare</p>
                  <h2 className="login-text">Login</h2>
                  <hr/>
                </div>

                <div class="row">
                    <div >
                      <form>
                        <div class="form-group">
                          <label>SOEID</label>
                          <input type="soeid"  class="form-control" id="soeid" placeholder="Enter your SOEID"
                          value={soeid}
                          onChange={(event) => {
                          setSoeid(event.target.value);
                          }}
                          />

                        </div>

                      <div class="form-group">
                        <label>Password</label>
                        <input type="password"  class="form-control" id="password" placeholder="Enter password"
                        value={password}
                        onChange={(event) => {
                        setPassword(event.target.value);
                        }}
                        />
                      </div>
                      <div className="button-container">
                        <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
                        <Link to="/homepage"><button className="back-btn">Back</button></Link>
                      </div>
                      </form>
                    </div>
                </div>
            </div>
          </div>
    );
  }
  
  export default Login;