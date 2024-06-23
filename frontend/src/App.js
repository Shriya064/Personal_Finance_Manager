import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import './styles/App.css';

function App() {

  const Layout = () => {
    return (
      <div className='main'>
        <Navbar/>
 
          <div className='menu-container'>
            <Menu/>
          </div>
        
        <Footer/>
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
    },
    {
      path:"/register",
      element:<Register/>
      
    },
    {
      path:"/login",
      element:<Login/>
      
    },
  ])

  return <RouterProvider router={ router } />;


}

export default App;
