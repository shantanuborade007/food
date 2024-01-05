import { Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import Verify from "./Pages/Verify";
import Otp from "./Pages/Otp";
import Addrecipe from "./Pages/Addrecipe";
import View from "./Pages/View";
import RecipeDetail from './Pages/RecipeDetail'

function App() {

  const [isloggedIn,setisloggedIn]=useState(false)

  return (
    <div>

    <Navbar isloggedIn={isloggedIn} setisloggedIn={setisloggedIn} />

    <Routes>

        <Route path="/" element={<Home/>}  />
        <Route path="/Login" element={<Login setisloggedIn={setisloggedIn}/>} />
        <Route path="/SignUp" element={<SignUp  setisloggedIn={setisloggedIn}/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/Verify" element={<Verify/>}/>
        <Route path="/addrecipe" element={<Addrecipe/>}/>
        <Route path="/viewrecipe" element={<View/>}/>
        <Route path="/recipe/:id" element={<RecipeDetail/>} />

    </Routes>

    </div>
  );
}

export default App;
