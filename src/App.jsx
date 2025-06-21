import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Paste from './component/Paste';
import ViewPaste from './component/ViewPaste';
import Home from './component/Home';
// Create the router
const router = createBrowserRouter([
  {
   path:"/",
   element:
   <div>
 <Navbar/>
 <Home />
   </div>
  },

  {
   path:"/pastes",
   element:
   <div>
    <Navbar />
    <Paste />
   </div>
  },
  
  {
   path:"/pastes/:id",
   element:
   <div>
    <Navbar />
    <ViewPaste />
   </div>
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

