import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


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
                <h2>Login</h2>
             <hr/>
             </div>

             <div class="row">
             <div class="col-sm-6">
 
            <form>
        <div class="form-group">
          <label>Soeid</label>
          <input type="soeid"  class="form-control" id="soeid" placeholder="Enter your soeid"
          
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
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>

            </div>
            </div>
            </div>

     </div>
    );
  }
  
  export default Login;