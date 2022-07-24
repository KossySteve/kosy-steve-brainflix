import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import VideoUpload from './pages/VideoUpload/VideoUpload';
import Home from './pages/Home/Home';//

export const apiUrl = (end_point) =>`https://imgflixserver2.herokuapp.com/videos/${end_point}`;

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={VideoUpload} />
        <Route path="/:videoId" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
