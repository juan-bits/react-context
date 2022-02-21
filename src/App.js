import React from "react";

//components
import Profile from "./components/Profile";
import UserList from "./components/UserList";

//context
import UserState from "./context/User/UserState";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <UserList />
          </div>
          <div className="col-md-5 col-sm-12">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
