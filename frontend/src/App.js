import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Query from "./components/Query";
import { login, selectUser } from "./feature/userSlice";
import Login from "./components/auth/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photo,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);

  return <div className="App">{user ? <Query /> : <Login />}</div>;
}

export default App;
