import React from "react";
import { NavLink } from "react-router-dom";
import dance from "../src/images/dance.png";
import Carousel from "./Carousel";
import one from "../src/images/one.png";
import Chatbox from "./Chatbox";
import './Home.css';

const Home =()=>{
  return(
      <>
      <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h6
      style={ {
        color: '#565387',
        }}
      >“You have to be odd to be No.1.”</h6> 
      <h1
      style={ {
        color: '#565387',
        }}
      >Google Certified UI/UX Design Professional..</h1>
      <h6 className="my-3">
      "I am a Computer Engineering Professor with a Ph.D. in Usability Engineering in the Agriculture Domain. I hold a Bachelor's and Master's degree in Computer Science and Engineering from Walchand College of Engineering Sangli. With over 25 years of experience in academia, I currently serve as a Professor at Pillai College of Engineering in Panvel."
      </h6>
      <div className="mt-3">
      <NavLink className="btn-get-started" to="/Recomendation">My Introduction</NavLink>
      <Chatbox/>
      <br></br>
      <br></br>
      </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <br></br><br></br><br></br>
        <img src={dance} className="img-fluid animated" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>
      < Carousel/>
      </div>
      </div>
      </div>
      </section>
      <div>
      </div>
      <br></br> <br></br> <br></br>
<div className="container-fluid"
style={ {
backgroundColor: '#a7bfe0',
}}
>
<br></br>
<div class="container">
  <div>
    <h2>Contact Us</h2>
  </div>
  <div class="row">
    <div class="column">
      <img src={one} alt="home img"/>
    </div>
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="lname">Mail Id:</label>
        <input type="text" id="Mailid" name="Mailid" placeholder="Your Mail id.."/>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
<br></br>
</div>
      </>
      );
};

export default Home;
