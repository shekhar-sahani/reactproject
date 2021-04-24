import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends React.Component {
  render() {
    return (
      <>
      <footer>
    <ul class="social">
      <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
      <li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
      <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
      <li><a href="#" target="_blank"><i class="fa fa-youtube"></i></a></li>
      <li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
    </ul>
  </footer>
  {/* <!--end of footer--> */}
  <footer class="second">
    <p>&copy; MaxPower Design</p>
  </footer>
       

        
              </>
    );
  }
}
