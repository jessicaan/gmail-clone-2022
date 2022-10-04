import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import EmailList from "./EmailList";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { logIn, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Mail from "./Mail";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";
import SidebarRight from "./SidebarRight";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // logedin
        dispatch(
          logIn({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        // logedout
      }
    });
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route exact path="/Mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
            <SidebarRight />
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
