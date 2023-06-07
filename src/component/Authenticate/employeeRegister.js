import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../../authenticate.css"
import auth_tr_bg from "../../backgrounds/auth_tr_bg.png"
import auth_m_bg from "../../backgrounds/auth_m_bg.png"
import google from "../../icons/register-page/google.png"
import facebook  from "../../icons/register-page/facebook.png"
import apple from "../../icons/register-page/apple.png"


function modal_de_loader(){
    const modalBackdrop = document.querySelector('.modal-backdrop.fade.show');
        if (modalBackdrop) {
            modalBackdrop.remove();
        }
}



export function Employee(){
    useEffect(()=>{
        modal_de_loader();
    }, []);

    return(
        <div className="App">
            <div class="employer-register">
                <div class="des1">  
                    <img src={auth_tr_bg} alt="" class="bg-img tr-img"/>
                    <div class="form_control">

                        <h2 class="heading">
                            Register with Internship Aroma and <br/> Stop Seeking Today!
                        </h2>

                        <form action="#" method="get">
                            <div class="names">
                                <div class="f_names form_elements">
                                    <label className="authlabel" for="First-Name">First Name</label> <br/>
                                    <input className="input" type="text" name="First-Name" id="firstname"/>
                                </div>
                                
                                <div class="l_names form_elements">
                                    <label className="authlabel" for="Last-Name">Last Name</label> <br/>
                                    <input className="input" type="text" name="Last-Name" id="lastname"/>
                                </div>
                            </div>
                            <div class="email form_elements">
                                <label className="authlabel" for="Email-Id">Email Id</label> <br/>
                                <input className="input" type="email" name="eamil" id="email"/>
                            </div>
                            
                            <div class="password form_elements"> 
                                <label className="authlabel" for="password">Password</label> <br/>
                                <input className="input" type="password" name="password" id="password"/>
                            </div>
                            
                            <div class="number form_elements"> 
                                <label className="authlabel" for="number">Phone Number</label> <br/>
                                <input className="input" type="number" name="number" id="number"/>
                            </div>
                            
                            <div class="companyname form_elements" id="company_name" style={{display: "none"}}>
                                <label className="authlabel" for="Companyname">Company Name</label> <br/>
                                <input className="input" type="text" name="company-Name" id="companyname"/>
                            </div>

                            <div class="universityname form_elements" id="university_name" style={{display: "none"}}>
                                <label className="authlabel" for="universityname">University Name</label> <br/>
                                <input className="input" type="text" name="university-Name" id="universityname"/>
                            </div>

                            <button type="submit" class="reg_btn">Register</button>
                        
                        </form>
                        
                    </div>
                    <div class="rule-container">
                        <div class="rule-line"></div>
                        <div class="rule-text">or</div>
                        <div class="rule-line"></div>
                    </div>
                    <div class="alt-login">
                        <ul>
                            <li><a href="#"><img src={google} alt="" class="img"/></a></li>
                            <li><a href="#"><img src={facebook} alt="" class="img"/></a></li>
                            <li><a href="#"><img src={apple} alt="" class="img"/></a></li>
                        </ul>
                        <Link to="/employer" style={{color: "black", textDecoration: "none", fontSize: "1.3rem", display: "flex", justifyContent: "center", marginTop: "2rem"}}>Not an Employee? Click Here to Register as an Employer</Link>
                    </div>
                </div>
                <div class="des2">
                    <img src={auth_m_bg} alt="" class="bg-img mid-img"/>
                </div>
            </div>
        </div>
    )
}

export default Employee;