import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import VideoUpload from './pages/VideoUpload/VideoUpload';
import Home from './pages/Home/Home';//

export const apiUrl = (end_point) =>`http://localhost:8080/videos/${end_point}?api_key=65464bbf-2db6-4b96-86d5-1bf19bb9249b`;

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
