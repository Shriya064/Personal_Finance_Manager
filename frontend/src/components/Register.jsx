import { useState } from "react";
import axios from "axios";

function Register() {
  
    const [soeid, setSoeid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/save", {
          soeid: soeid,
          email: email,
          password: password,
          });
          alert("Registation is Successfull");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
        <h1>Registration</h1>
    
    <form>
        <div class="form-group">
          <label>Soeid</label>
          <input type="text"  class="form-control" id="soeid" placeholder="Enter SOEID"
          
          value={soeid}
          onChange={(event) => {
            setSoeid(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>Citi Email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Citi Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;