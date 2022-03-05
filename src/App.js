import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import VideoUpload from './pages/VideoUpload/VideoUpload';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quote" component={VideoUpload} />
        <Route path="/videos:id" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
