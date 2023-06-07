import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import "../../authenticate.css"
import auth_tr_bg from "../../backgrounds/auth_tr_bg.png"
import auth_m_bg from "../../backgrounds/auth_m_bg.png"
import google from "../../icons/register-page/google.png"
import facebook  from "../../icons/register-page/facebook.png"
import apple from "../../icons/register-page/apple.png"

function whoareyou(){
    // console.log("changes")
    let input = document.getElementById("whatareyou");
    let select = document.getElementById("whatare_you");
    let companyname = document.getElementById('company_name');
    let universityname = document.getElementById('university_name');


    input.addEventListener("input", function() {
        if(input.value==="company"){
            
            companyname.style.display='block';
            universityname.style.display='none';
            select.style.display="none";
        }
        if(input.value==="university"){
            select.style.display="none";
            companyname.style.display='none';
            universityname.style.display='block';
        }
        if(input.value==="jobseeker"){
            companyname.style.display='none';
            universityname.style.display='none';
        }
    });
}

function modal_de_loader(){
    const modalBackdrop = document.querySelector('.modal-backdrop.fade.show');
        if (modalBackdrop) {
            modalBackdrop.remove();
            window.location.reload()
        }
    
}


export function Employer(){
    useEffect(()=>{
        whoareyou();
        modal_de_loader();
    }, []);

    return(
        <div className="App">
            <div class="employer-register">
                <div class="des1">  
                    <img src={auth_tr_bg} alt="" class="bg-img tr-img"/>
                    <div class="form_control">

                        <h2 class="heading">
                            Register with Internship Aroma and <br/> Start Hiring Today!
                        </h2>

                        <form action="#" method="get">

                            <div class="what_are_you" id="whatare_you" style={{maxWidth: "20rem", marginBottom: "1.3rem", display:"block"}} >
                                <label className="authlabel" for="What_are_you" >What Are You</label> <br/>
                                <select name="what_are_you" id="whatareyou" class="form-select" aria-label="Default select example" onChange={whoareyou}>
                                    <option selected>Choose Whatever you are! </option>
                                    <option value="company">Company</option>
                                    <option value="university">University</option>
                                </select>
                            </div>

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
                        <Link to="/employee" style={{color: "black", textDecoration: "none", fontSize: "1.3rem", display: "flex", justifyContent: "center", marginTop: "2rem"}}>Not an Employer? Click Here to Register as an Employee</Link>
                    </div>
                </div>
                <div class="des2">
                    <img src={auth_m_bg} alt="" class="bg-img mid-img"/>
                </div>
            </div>
        </div>
    )
}

export default Employer;