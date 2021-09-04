import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import VideoView from "./components/VideoView";
import LoadVideos from "./components/LoadVideos";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="container">
          <Switch>
            <Route path="/" exact component={LoadVideos} />
            <Route path="/watch/:id" exact component={VideoView} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
