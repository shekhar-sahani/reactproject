import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class contact extends React.Component {
  render() {
    return (
      <>
        <Header />  <br />

        <div class="container-fluid contact-me-container content-section" id="contact">
		<div class="container">
			<h1 class="intro-text text-center">Contact Me</h1>
      <hr class="star-light"></hr>
			<div class="row">
				<div class="col-sm-12 col-md-12">
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-addon"><i class="fa fa-user"></i></div>
							<input type="text" class="form-control" id="name" placeholder="Name"/>
						</div>
					</div>
					
					<div class="form-group">
						<div class="input-group">
              <div class="input-group-addon"><i class="fa fa-at"></i></div>
							<input type="text" class="form-control" id="email" placeholder="Email ID"/>
						</div>
					</div>

					<div class="form-group">
						<div class="input-group">
							<div class="input-group-addon"><i class="fa fa-phone"></i></div>
							<input type="text" class="form-control" id="phone" placeholder="Phone Number"/>
						</div>
					</div>
				</div>

				<div class="col-sm-12">
					<textarea class="form-control" rows="5" placeholder="Message"></textarea>
				</div>
			</div>

			<div class="text-center">
				<button class="btn btn-default submit-button btn-lg btn-primary"><i class="fa fa-paper-plane"></i> Send</button>
			</div>
		</div>
	</div>

        
               
       <br />  <br />
  

        <Footer />
      </>
    );
  }
}
