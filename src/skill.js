import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class skill extends React.Component {
  render() {
    return (
      <>
        <Header />  <br />

        
<div class="skills-box">
  <h1>My Skills</h1>

  <h4>HTML</h4>
  <div class="box">
    <div class="skills html">90%</div>
  </div>

  <h4>CSS</h4>
  <div class="box">
    <div class="skills css">80%</div>
  </div>

  <h4>JavaScript</h4>
  <div class="box">
    <div class="skills js">75%</div>
  </div>

  <h4>Java</h4>
  <div class="box">
    <div class="skills java">90%</div>
  </div>
  
  <h4>Javaaaa</h4>
  <div class="box">
    <div class="skills java" id="div1">90%</div>
  </div>
</div>

       
       <br />  <br />
  

        <Footer />
      </>
    );
  }
}
