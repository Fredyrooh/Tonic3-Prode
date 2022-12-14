import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import {  get_my_user } from "./state/user";

// Admin Section
import { Calendar,Dashboard, Kanban, Bar, Pie, ColorMapping, Tournaments, Teams, Players, Users, Awards} from "./pages/AdminPanel";
import Homepage from "./pages/Homepage";
import Prode from "./pages/Prode";
import Register from "./pages/Register";
import Registered from "./pages/Registered";

//User Section
import CustomUser from "./pages/UserPanel/EditUser";
import Matches from "./pages/AdminPanel/Matches";
import TablePoints from "./pages/UserPanel/TablePoints";

//Push Section
import { onMessage } from "firebase/messaging";
import { toast, ToastContainer } from "react-toastify";
import { messaging } from "./firebase";

import axios from "axios";
import { setActualProfile } from "./state/profile";

import UserInfoPage from "./pages/AdminPanel/UserInfoPage";
import PushNotifications from "./pages/AdminPanel/PushNotifications";



function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("tu mensaje", message)
      toast(<>{message.notification.title}  <br/> {message.notification.body}<br/> {message.notification.image} </>,{
        className: "toasty"
      })
    })
  },[])
  const user = useSelector((state) => state.user);
  useEffect(()=>{
    dispatch(get_my_user())
  },[user])



  return (
    <>
      <ToastContainer style={{ width: "500px", height: "100px", zIndex:"999999999999", position:"absolute" } } />
      {user.isVerified ? (
        <Routes>
          {/* User Section */}
          <Route path="/" element={<Homepage />} />
          <Route path="/prode" element={<Prode />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/Edit-User" element={<CustomUser/>} />
          <Route path="/TablePoints-User" element={<TablePoints/>} />

          {/* Admin Section */}

          {/* dashboard  */}
          <Route path="/admin-panel" element={<Dashboard />} />

          {/* pages  */}
          <Route path="/Tournaments" element={<Tournaments />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Matches" element={<Matches/>} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/user/:id" element={<UserInfoPage />} />
          <Route path="/Notifications" element={<PushNotifications />} />

          {/* apps  */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/calendar" element={<Calendar />} />

          {/* charts  */}

          <Route path="/User-Permanency" element={<Bar />} />
          <Route path="/Fixture-Stage-Participants" element={<Pie />} />
          <Route path="/User-Register-by-Use" element={<ColorMapping />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/registered" element={<Registered />} />
        </Routes>
      )}
    </>
  );
}

export default App;
