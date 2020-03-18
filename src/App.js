import React from "react";

// Data
//import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

const App = props => {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar addAuthorHandler={props.addAuthor} />
        </div>
        <div className="content col-10">
          <AuthorsList />
        </div>
      </div>
    </div>
  );
};

export default App;
