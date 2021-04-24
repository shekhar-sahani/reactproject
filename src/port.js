import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class port extends React.Component {
  render() {
    return (
      <>
        <Header />  <br />

        
        <div class="container-fluid portfolio-container-holder content-section" id="portfolio">
		<div class="portfolio-container container">
			<h1 class="text-center">My Portfolio</h1>
      <hr class="star-portfolio"></hr>
			<div class="row">
				
				<div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
					<div class=" portfolio-card">
						<img src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg" alt="Portfolio" class="img-responsive portfolio-img"/>

						<div class="portfolio-img-desc">
							<p>Lorem ipsum dolor sit amet</p>
						</div>			
					</div>
				</div>
				<div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
					<div class=" portfolio-card">
						<img src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg" alt="Portfolio" class="img-responsive portfolio-img"/>

						<div class="portfolio-img-desc">
							<p>Lorem ipsum dolor sit amet</p>
						</div>			
					</div>
				</div>
				<div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
					<div class=" portfolio-card">
						<img src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg" alt="Portfolio" class="img-responsive portfolio-img"/>

						<div class="portfolio-img-desc">
							<p>Lorem ipsum dolor sit amet</p>
						</div>			
					</div>
				</div>
				<div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
					<div class=" portfolio-card">
						<img src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg" alt="Portfolio" class="img-responsive portfolio-img"/>

						<div class="portfolio-img-desc">
							<p>Lorem ipsum dolor sit amet</p>
						</div>			
					</div>
				</div>
				<div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
					<div class=" portfolio-card">
						<img src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg" alt="Portfolio" class="img-responsive portfolio-img"/>

						<div class="portfolio-img-desc">
							<p>Lorem ipsum dolor sit amet</p>
						</div>			
					</div>
				</div>
				<div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
					<div class=" portfolio-card">
						<img src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg" alt="Portfolio" class="img-responsive portfolio-img"/>

						<div class="portfolio-img-desc">
							<p>Lorem ipsum dolor sit amet</p>
						</div>			
					</div>
				</div>
				
			</div>
		</div>
	</div>       
       <br />  <br />
  

        <Footer />
      </>
    );
  }
}
