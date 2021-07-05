import './App.css';
import logo from "./images/WhatsApp Image 2021-07-01 at 13.25.55.jpeg";
import img1 from "./images/WhatsApp Image 2021-07-01 at 19.59.13.jpeg";
import img2 from "./images/WhatsApp Image 2021-07-01 at 13.32.19.jpeg";
import img3 from "./images/WhatsApp Image 2021-07-03 at 22.20.31.jpeg";
import img4 from "./images/WhatsApp Image 2021-07-03 at 22.20.28.jpeg";
import React,{useState} from 'react';
import { requests } from "./utils/requests";
import axios from './utils/axios';











function App() {


  const [name,setname]= useState("");
  const [phone,setphone]= useState("");
  const [email,setemail]= useState("");
  const [message,setmessage]= useState("");
  const handleChange = (e) =>{
    const {name,value}=e.target;
    if(name==="name"){
       setname(value)
    }
    else if(name==="email"){
      setemail(value)
    }
    else if(name==="phone"){
      setphone(value)
    }
    else{
      setmessage(value)
    }
  }
  const handleSubmit = async (e) =>{
    try{

      e.preventDefault();
      const senddata={
        name,
        email,
        message,
        phone
      }
      console.log(senddata);
      const res = await axios.post(requests["addContact"],senddata);
      alert("Successfully added");
      window.location.href="/";
    }
    catch(err)
    {
      console.log(err);
      alert('Something went Wrong')
      window.location.href="/";
    }
  }

  return (
    <div>

<div>
  <section className="colored-section" id="title">
    <div className="container-fluid">
      {/* Nav Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href>CMP INSTITUTE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#footer">CONTACT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">FACULTY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta">COURSES</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Title */}
      <div className="row">
        <div className="col-lg-6">
          <h1 className="big-heading">ONE STOP DESTINATION FOR CA ASPIRANTS</h1>
          <button type="button"  className="btn btn-dark btn-lg download-button"><i className="fab fa-apple" /><a href="https://play.google.com/store/apps/details?id=co.kevin.yatua">Download</a> </button>
          <button type="button"  className="btn btn-outline-light btn-lg download-button"><i className="fab fa-google-play" /><a href="https://play.google.com/store/apps/details?id=co.kevin.yatua"> Download</a></button>
        </div>
        <div className="col-lg-6">
          <img className="title-image" src={logo} alt="iphone-mockup" />
        </div>
      </div>
    </div>
  </section>
  {/* Features */}
  <section className="white-section" id="features">
    <div className="container-fluid">
      <div className="row">
        <div className="feature-box col-lg-4">
          <i className="icon fas fa-check-circle fa-4x" />
          <h3 className="feature-title">TECHNOLOGY</h3>
          <p>BEST FOR BOTH ONLINE AND OFFLINE CLASSES.WE OFFER RECORDED CLASSES.
          </p>
        </div>
        <div className="feature-box col-lg-4">
          <i className="icon fas fa-bullseye fa-4x" />
          <h3 className="feature-title">MOCK TEST AND RECORDED SOLUTIONS</h3>
          <p>WE OFFER FREQUENT SOLUTIONS AND RECORDED CLASSES ,WITH EXERCISE SOLUTIONS</p>
        </div>
        <div className="feature-box col-lg-4">
          <i className="icon fas fa-heart fa-4x" />
          <h3 className="feature-title">LEARN FROM CAs AND ENGINEERS</h3>
          <p>BEST FACULTY WITH BEST PROFESSIONAL KNOWLEDGE.ALSO REGULAR SESSIONS OF INDUSTRY EXPERTS</p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="colored-section" id="testimonials">
    <div id="testimonial-carousel" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active container-fluid">
          <h2 className="testimonial-text">I CLEARED MY FOUNDATIONS PAPER IN JUST 3 MONTH .FACULTY IS VERY HELPFUL AND PROVIDES SOLUTIONS TO PROBLEMS THAT WE ENCOUNTER IN JOURNEY </h2>
          
          <em>KUNAL SHARMA,KISHANGARH</em>
        </div>
        <div className="carousel-item container-fluid">
          <h2 className="testimonial-text">I WAS WEAK IN MATHS ,BUT CMP HELPS ME TO GATHER KNOWLEDGE AND TRICKS ,PROVIDED SOLUTION TO MATHS PROBLEM THAT TOO IN RECORDED FORM.BEST USE OF TECHNOLOGY </h2>
          {/* <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile" /> */}
          <em>YASHWANT KUMAWAT,KISHANGARH</em>
        </div>
      </div>
      <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </section>
  {/* Press */}
  <section className="colored-section" id="press">
    <img className="press-logo" src={img1} alt="tc-logo" />
    <img className="press-logo" src={img2} alt="tnw-logo" />
    <img className="press-logo" src={img3} alt="biz-insider-logo" />
    <img className="press-logo" src={img4} alt="mashable-logo" />
  </section>
  {/* Pricing */}
  <section className="white-section" id="pricing">
    <h2 className="section-heading">FACULTIES</h2>
    <p>WE HAVE ONE OF THE BEST FACULTY AND FROM BEST BACKGROUND FOR THE FIELD</p>
    <div className="row">
      <div className="pricing-column col-lg-3 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>ARPAN JAIN SIR</h3>
          </div>
          <div className="card-body">
            <p>PAPER 3(MATHS)</p>
            <p>PROF.:ENGINEER</p>
            <p>COLLEGE:MNIT JAIPUR</p>
            <p>HSC (CLASS 12TH):-94.8%</p>
          </div>
        </div>
      </div>
      <div className="pricing-column col-lg-3 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>KRITIKA JAIN MAM</h3>
          </div>
          <div className="card-body">
            <p>PAPER 1</p>
            <p>PROF.:BA(English)</p>
            <p>COLLEGE:JAI HIND</p>
            <p>HSC (CLASS 12TH):-94%</p>
          </div>
        </div>
      </div>
      <div className="pricing-column col-lg-3 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>SWATI JAIN MAM</h3>
          </div>
          <div className="card-body">
            <p>PAPER 2 </p>
            <p>PROF.:CA</p>
            <p>COLLEGE:ICAI</p>
            <p>HSC (CLASS 12TH):-95%</p>
          </div>
        </div>
      </div>
      <div className="pricing-column col-lg-3 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>VAIBHAV PATNI SIR</h3>
          </div>
          <div className="card-body">
            <p>PAPER 4 (ACCOUNTS)</p>
            <p>PROF.:CA</p>
            <p>COLLEGE:ICAI</p>
            <p>HSC (CLASS 12TH):-93%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Call to Action */}
  <section className="colored-section" id="cta">
    <div className="container-fluid">
      <h3 className="big-heading">What we offer:-</h3>
      <ul className="list-group">
        <li className="list-group-item active">CA FOUNDATIONS (PAPER 1/2/3/4)</li>
        <li className="list-group-item active">CA-INTER</li>
        <li className="list-group-item active">CLASS 11-12 (ACCOUNTS/MATHS)</li>
        <li className="list-group-item active">CLASS 11-12 (PHYSICS/MATHS)</li>
        <li className="list-group-item active">GRADUATION (B.COM/B.SC/BA)</li>
      </ul>
    </div>
  </section>
 {/* contact */}
<div >
 <div className="contact container-xl " style={{backgroundColor:"#179b81" ,margin:"50px"}}>
<div className="row">
<div className="col-md-8 " >
  <div className="contact-form centre">
    <h1>Contact Us</h1>
    <p className="hint-text">We'd love to hear from you, please drop us a line if you've any query.</p>
    <form  method="post">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputFirstName">First Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input type="tel" className="form-control" id="phone"  name="phone" value={phone} onChange={handleChange} required />
          </div>
        </div>
      </div>            
      <div className="form-group">
        <label htmlFor="inputEmail">Email Address</label>
        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="inputMessage">Message</label>
        <textarea className="form-control" id="message" rows={5} name="message" value={message} onChange={handleChange} required defaultValue={""} />
      </div>
      <input type="submit" className="btn btn-primary" onClick={handleSubmit} defaultValue="Submit" />
    </form>
  </div>
</div>
</div>
</div>
</div>


  {/* Footer */}
  <footer className="white-section" id="footer">
    <div className="container-fluid">
      <i className="social-icon fab fa-facebook-f" />
      <i className="social-icon fab fa-twitter" />
      <i className="social-icon fab fa-instagram" />
      <i className="social-icon fas fa-envelope" />
      <p>© Copyright CMP INSTITUTE KISHANGARH ,RAJASTHAN</p>
    </div>
  </footer>
</div>


    </div>
  );
}

export default App;
