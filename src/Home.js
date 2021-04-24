import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
       
  {/* <!---end of header---> */}
  <section class="banner">
    <div class="banner-inner">
      <img src="https://res.cloudinary.com/dgpmuegqe/image/upload/v1492571172/rocket_design_k4nzbm.png"/>
    </div>
  </section>
  {/* <!--end of banner--> */}
  <section class="one-fourth" id="html">
    <td><i class="fa fa-html5"></i></td>
    <h3>HTML</h3>
  </section>
 <section class="one-fourth" id="css">
 <td><i class="fa fa-css3"></i></td>
   <h3>CSS</h3>
 </section>
 <section class="one-fourth" id="seo">
   <td><i class="fa fa-search"></i></td>
   <h3>SEO</h3>
 </section>
 <section class="one-fourth" id="social">
   <td><i class="fa fa-users"></i></td>
   <h3>Social</h3>
 </section>
  {/* <!--end of four col section--> */}
 <section class="inner-wrapper">
   <article id="tablet">
     <img src="https://res.cloudinary.com/dgpmuegqe/image/upload/v1492571257/hand_ipad_vr0pfu.png"/>
   </article>
   <aside id="tablet2">
     <h2>Mobile.Tablet.Desktop.</h2>
     <p>A clean HTML layout and CSS stylesheet making for a great responsive framework to design around that includes a responsive drop down navigation menu, image slider, contact form and ‘scroll to the top’ jQuery plugin.jQuery plugin.that includes a responsive drop down navigation menu, image slider, contact form and ‘scroll to the top’ jQuery plugin.</p>
   </aside>
 </section>
 <section class="inner-wrapper-2">
   <article id="mobile">
     <h2>Accross Each Device</h2>
     <p>A clean HTML layout and CSS stylesheet making for a great responsive framework to design around that includes a responsive drop down navigation menu, image slider, contact form and ‘scroll to the top’ jQuery plugin.that includes a responsive drop down navigation menu, image slider, contact form and ‘scroll to the top’ jQuery plugin.</p>
   </article>
   <aside class="hand-mobile">
     <img src="https://res.cloudinary.com/dgpmuegqe/image/upload/v1492571257/hand_mobile_stt5sh.png"/>
   </aside>
 </section>
  <section class="inner-wrapper">
    <article >
      <img src="https://res.cloudinary.com/dgpmuegqe/image/upload/v1492571256/desktop_fsksnx.png"/>
    </article>
    <aside id="desktop">
      <h2 >Desktop</h2>
      <p>Also included with the Template is the Template Customization Guide with five special video lessons showing you how to get professional website pictures & how to edit them to fit the template, how to make a custom website logo, how to upload your HTML website template to the internet and an HTML website building tools video!</p>
    </aside>
  </section>
  {/* <!--end of two half section--> */}
  <section class="inner-wrapper-3">
    <section class="one-third" id="google">
      <h3>Google Search</h3>
      <p>Also included with the Template is the Template Customization Guide with five special video lessons showing you how to get professional website pictures & how to edit them to fit the template,flessons showing you how to get professional website pictures & how to edit them to fit the template,f</p>
    </section>
    <section class="one-third" id="marketing">
      <h3>Marketing</h3>
      <p>Note: this template includes a page with a PHP website contact form and requires a web host or a program such as XAMPP to run PHP and display it’s content.id="desktop"lessons showing you how to get professional website pictures & how to edit them to fit the template,f </p>
    </section>
    <section class="one-third" id="customers">
      <h3>Happy Customers</h3>
      <p>When you purchase and download The Rocket Design HTML Template you get a full five page responsive HTML website template with both a “light” and “dark” version of the template in addition to the following features:</p>
    </section>
  </section>
  {/* <!--end of one-third section--> */}
  <section id="smelly">
    <h2>: )</h2>
  </section>
  {/* <!--end of smelly section--> */}
 
  

        <Footer />
      </>
    );
  }
}
