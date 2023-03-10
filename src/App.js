import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  apiKey = "8a6cce56c8884a028e18a6bd63f38a26"
  pageSize =10
  render() {
    return (
      <>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<News key='general' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category='general'/>} />
          <Route exact path='/business' element={<News key='business' apiKey={this.apiKey} pageSize={this.pageSize} country="in" category='business'/>} />
          <Route exact path='/science' element={<News key="science" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category='science'/>} />
          <Route exact path='/entertainment' element={<News key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category='entertainment'/>} />
          <Route exact path='/health' element={<News key="health" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category='health'/>} />
          <Route exact path='/technology' element={<News key="technology" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category='technology'/>} />
          <Route exact path='/sports' element={<News key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category='sports'/>} />
      </Routes>
      </>
    )
  }
}

