import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";


function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Dashboard/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/homepage" element= { <Home/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;