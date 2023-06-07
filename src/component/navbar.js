import React from "react";
import { Link } from 'react-router-dom';
import heart from '../icons/profile-icons/heart.png'
import bell from '../icons/profile-icons/bell.png'
import msg from '../icons/profile-icons/mssg.png'
import profile from '../icons/profile-icons/pfp.png'
import google from "../icons/register-page/google.png"
import facebook  from "../icons/register-page/facebook.png"
import apple from "../icons/register-page/apple.png"
import auth_choose from "../../src/backgrounds/auth_choose.png"

export function Navbar() {
    return (
      <div className="App">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 border-bottom" style={{backgroundColor: "#0C2162"}}>
            <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>
            </div>
    
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav nav-pills">
            <li class="nav-item"><Link to="/" class="nav-link px-2 active text-white" id="home">Home</Link></li>
            <li><Link to="/" class="nav-link px-2 text-white" id="internship">Internships</Link></li>
            <li><Link to="/" class="nav-link px-2 text-white" id="job">Jobs</Link></li>
            <li><Link to="/course" class="nav-link px-2 text-white" id="course">Courses</Link></li>
            <li><Link to="/workshop" class="nav-link px-2 text-white" id="workshop">Workshop</Link></li>
            </ul>
    
            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-primary me-2 text-white"><a href="#" style={{color: "white", textDecoration: "none"}} data-bs-toggle="modal" data-bs-target="#signin">Login</a></button>
              <button type="button" class="btn btn-primary text-white"><a href="static/html/employee_register.html" style={{color: "white", textDecoration: "none"}} data-bs-toggle="modal" data-bs-target="#authchoose">Register</a></button>
            </div>
        </header>

        <ul class="nav justify-content-end second-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/"><img src={heart} alt="heart" style={{width: "1.7rem", height: "1.7rem"}}/></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/"><img src={bell} alt="alert" style={{width: "1.7rem", height:"1.7rem"}}/></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/"><img src={msg} alt="msg" style={{width: "1.7rem", height: "1.7rem"}}/></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/resume"><img src={profile} alt="account" style={{width: "1.7rem", height: "1.7rem"}}/></Link>
          </li>
        </ul>

        <div className="modal fade" id="authchoose" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header" style={{border:"none", marginTop:"1.1.7rem"}}>
                <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel" style={{marginLeft:"17%", textAlign:"center"}}>Unlock Opportunities. Register with Internship Aroma!</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex flex-column align-items-center">
                <div className=""style={{boxShadow:"0 0 15px 10px rgba(139, 51, 237, 0.5)", borderRadius:"15px", display:"inline-block", marginTop:"1rem", textAlign:"center", width:"27rem"}}>
                  <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel" style={{marginTop:"1.7rem"}}>Welcome</h1>

                  <ul className="py-2" style={{padding:"0 4rem"}}>
                    <li className="py-2 my-4" style={{backgroundColor:"#554CB9", borderRadius:"5px"}}><Link to="/employer" style={{ textDecoration:"none", color:"white",fontSize:"1rem"}}>Employer/Job Poster</Link></li>
                      
                    <li className="py-2 my-5" style={{backgroundColor:"#554CB9", borderRadius:"5px"}}><Link to="/employee" style={{ textDecoration:"none", color:"white",fontSize:"1rem"}}>Studen/Job Seeker</Link></li>
                    
                    <li className="py-2 my-4" style={{backgroundColor:"#554CB9", borderRadius:"5px"}}><Link to="/employer" style={{ textDecoration:"none", color:"white",fontSize:"1rem"}}>College/University</Link></li>
                  </ul>
                </div>
                <div className="py-4 fw-bold" style={{fontSize:"1.1rem"}}>
                  <a href="#" style={{textDecoration:"none", color:"black"}}>Already have an Account? <span className="text-primary" data-bs-toggle="modal" data-bs-target="#signin">Sign In</span></a>
                </div>
                <img src={auth_choose} alt="" style={{width:"11.7rem", height:"11.7rem"}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal fade" id="signin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header" style={{border:"none", marginTop:"1.1.7rem"}}>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex flex-column align-items-center">
                <div style={{boxShadow:"0 0 15px 10px rgba(139, 51, 237, 0.5)", borderRadius:"15px", display:"inline-block", marginTop:"1rem", textAlign:"center", width:"27rem", backgroundColor:"rgb(206 186 224 / 42%)"}}>
                  <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel" style={{marginTop:"1.7rem"}}>Welcome Back</h1>

                  <ul className="py-2" style={{padding:"0 4rem", listStyle:"none"}}>
                    <li className="py-2 my-4">
                      <label for="email" style={{color:"black", display:"flex", justifyContent:"flex-start"}}>Email</label>
                      <input className="px-3" type="email" id="email" name="email" required placeholder="abcs@gmail.com" style={{maxWidth:"90%", padding:"0.3rem", borderRadius:"5px", borderColor:"transparent", display:"flex", justifyContent:"flex-start"}}/>
                    </li>
                      
                    <li className="py-2" style={{marginBottom:"7rem"}}>
                      <label for="email" style={{color:"black", display:"flex", justifyContent:"flex-start"}}>Password</label>
                      <input className="px-3" type="email" id="email" name="email" required placeholder="minimum 9 characters" style={{maxWidth:"90%", padding:"0.3rem", borderRadius:"5px", borderColor:"transparent", display:"flex", justifyContent:"flex-start"}}/>
                    </li>
      
                  </ul>

                </div>
                <div className="py-3 fw-bold" style={{fontSize:"0.9rem", marginLeft:"40%", marginBottom:"1.7rem"}}>
                  <a href="#" style={{textDecoration:"none", color:"black"}}>Forgot Password?</a>
                </div>
                <button className="btn btn-outline-primary px-5 fw-bold" type="submit">Sign in</button>
                <div class="rule-container m-4">
                  <div class="rule-line"></div>
                  <div class="rule-text">or</div>
                  <div class="rule-line"></div>
                </div>
                <div class="alt-login m-2">
                  <ul>
                      <li><Link to="/"><img src={google} alt="" class="img"/></Link></li>
                      <li><Link to="/"><img src={facebook} alt="" class="img"/></Link></li>
                      <li><Link to="/"><img src={apple} alt="" class="img"/></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;