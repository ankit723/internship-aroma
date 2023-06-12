import React, {useState, useEffect} from "react";
import {Carousel} from "../carousel"
import course1 from "../../backgrounds/courses1.png"
import course3 from "../../backgrounds/courses3.png"
import course4 from "../../backgrounds/courses4.png"
import course5 from "../../backgrounds/courses5.png"
import course6 from "../../backgrounds/courses6.png"
import morework1 from "../../backgrounds/more-workshop-1.png"
import morework2 from "../../backgrounds/more-workshop-2.png"



export function Course(){
    
    useEffect(()=>{
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("course").classList.add("active")
    
    }, [])
    return(
        <>
        <div className="App">
            <div className="carousel" style={{marginTop:"0rem"}}>
                <Carousel carouselItem1={"Take the first step in your career"} carouselItem2={"Discover exciting internships"} carouselItem3={"Get valuable work experience"}/>    
            </div>

                       
            <div className="explore">
                <div class="container categorie-selecter" style={{marginTop: "5rem"}}>
                    <div class="container" style={{display: "flex", justifyContent: "space-between"}}>
                        <h1 style={{fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "161.01%",letterSpacing: "0.02em"}}>Recomended Courses</h1>
                    </div>

                    <div class="container" style={{display: 'flex', justifyContent: "center", marginTop: "3rem"}}>
                        <ul class="nav justify-content-center">
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(133.95deg, #A2FFE3 -9.29%, #B9AFF9 122.73%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course1} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>ADOBE PHOTOSHOP</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(255 192 229) -12.62%, rgb(255 207 210) 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={morework1} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>COLOR THEORY</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.96deg, #B4FDCD -12.62%, #EDF8AB 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course3} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>GRAPHIC DESIGN</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                              
                        </ul>
                    </div>
                    
                    <div class="container" style={{display: 'flex', justifyContent: "center"}}>
                        <ul class="nav justify-content-center">
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(135.38deg, #B4FAFF -2.63%, #FF99DC 100%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course4} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>3D DESIGN</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.38deg, #FFD2D2 4.36%, #9DE1FF 120.71%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course5} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>UI / UX DESIGN</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(255 192 229) -12.62%, rgb(255 207 210) 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={morework1} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>ILLUSTRATOR</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                              
                        </ul>
                    </div>
                    
                
                </div>
            </div>
            
            <div className="explore">
                <div class="container categorie-selecter" style={{marginTop: "5rem"}}>
                    <div class="container" style={{display: "flex", justifyContent: "space-between"}}>
                        <h1 style={{fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "161.01%",letterSpacing: "0.02em"}}>Placement Gurantee Courses</h1>
                    </div>

                    <div class="container" style={{display: 'flex', justifyContent: "center", marginTop: "3rem"}}>
                        <ul class="nav justify-content-center">
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(133.95deg, #A2FFE3 -9.29%, #B9AFF9 122.73%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course1} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>ADOBE PHOTOSHOP</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(255 192 229) -12.62%, rgb(255 207 210) 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={morework1} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>COLOR THEORY</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.96deg, #B4FDCD -12.62%, #EDF8AB 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course3} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>GRAPHIC DESIGN</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                              
                        </ul>
                    </div>
                    
                    <div class="container" style={{display: 'flex', justifyContent: "center"}}>
                        <ul class="nav justify-content-center">
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(135.38deg, #B4FAFF -2.63%, #FF99DC 100%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course4} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>3D DESIGN</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.38deg, #FFD2D2 4.36%, #9DE1FF 120.71%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={course5} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>UI / UX DESIGN</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-4">
                                <div class="px-4 py-3 my-5 text-center all-courses" style={{maxWidth: "400px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(255 192 229) -12.62%, rgb(255 207 210) 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={morework1} alt="" style={{width:"10rem", height:"10rem"}}/>
                                    <h4 class="card-title fb-bold py-3" style={{color:"#0C2162"}}>ILLUSTRATOR</h4>
                                    <div class="col-lg-0 mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>Any level</h5>
                                                <h5 style={{fontSize:"1rem"}}>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5 style={{fontSize:"1rem"}}>499 Rs</h5>
                                                <h5 style={{fontSize:"1rem"}}>6 Weeks</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                              
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div class="container col-xxl-8 px-4 py-5" >
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5" style={{backgroundColor:"rgba(48, 172, 223, 0.3)"}}>
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={course6} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" style={{height:"20rem"}}/>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Unleash Your Potential with Our master workshops to get in depth with  Internship Aroma</h1>
                        <p class="lead">8000+ internships in different areas</p>
                        <p class="lead">Get average paid stipend </p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Course;