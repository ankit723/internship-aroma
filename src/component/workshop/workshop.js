import {Carousel} from "../carousel"
import explore1 from "../../backgrounds/workshop-enroll-1.png"
import explore2 from "../../backgrounds/workshop-enroll-2.png"
import explore3 from "../../backgrounds/workshop-enroll-3.png"
import explore4 from "../../backgrounds/workshop-enroll-4.png"
import morework1 from "../../backgrounds/more-workshop-1.png"
import morework2 from "../../backgrounds/more-workshop-2.png"
import { useEffect, useState } from "react";

export function Workshop(){
    useEffect(()=>{
        document.getElementsByClassName("active")[0].classList.remove("active")
        document.getElementById("workshop").classList.add("active")
    
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
                        <h1 style={{fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "161.01%",letterSpacing: "0.02em"}}>Workshops To Explore</h1>
                    </div>

                    <div class="container" style={{display: 'flex', justifyContent: "center", marginTop: "5rem"}}>
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <div class="card mb-3" style={{maxWidth: "600px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(180, 253, 205) -12.62%, rgb(195 250 230) 113.1%)",borderRadius: "12px"}}>
                                    <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                                        <div class="col-md-4">
                                            <img src={explore1} class="img-fluid rounded-start" alt="..." style={{height: "20rem", width: "25rem"}}/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">PYTHON</h4>
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>Any level</h5>
                                                    <h5>Joseph murphy</h5>
                                                </div>
                                                
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>27 april 2023</h5>
                                                    <h5>2:00 Hrs</h5>
                                                </div>
                                                
                                                <p className="m-0">In this course you will get an overview from beginners level to advance level , in this master class we will get the idea about improving the designer time by providing shortcut keys and function , building up the portfolio to advance level to get more hiring alerts and offers........</p>

                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <button className="btn btn-outline-primary">Enroll Now</button>
                                                    <button className="btn btn-primary">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item">
                                <div class="card mb-3" style={{maxWidth: "600px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(201 251 192) -12.62%, rgb(218 249 182) 113.1%)",borderRadius: "12px"}}>
                                    <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                                        <div class="col-md-4">
                                            <img src={explore2} class="img-fluid rounded-start" alt="..." style={{height: "20rem", width: "25rem"}}/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">GRAPHIC DESIGN</h4>
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>Any level</h5>
                                                    <h5>Joseph murphy</h5>
                                                </div>
                                                
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>27 april 2023</h5>
                                                    <h5>2:00 Hrs</h5>
                                                </div>
                                                
                                                <p className="m-0">In this course you will get an overview from beginners level to advance level , in this master class we will get the idea about improving the designer time by providing shortcut keys and function , building up the portfolio to advance level to get more hiring alerts and offers........</p>

                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <button className="btn btn-outline-primary">Enroll Now</button>
                                                    <button className="btn btn-primary">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> 
                            
                        </ul>
                    </div>
                    
                    <div class="container" style={{display: 'flex', justifyContent: "center", marginTop: "5rem"}}>
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <div class="card mb-3" style={{maxWidth: "600px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(255 200 218) -12.62%, rgb(255 215 200) 113.1%)",borderRadius: "12px"}}>
                                    <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                                        <div class="col-md-4">
                                            <img src={explore3} class="img-fluid rounded-start" alt="..." style={{height: "20rem", width: "25rem"}}/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">GAME DEVELOPMENT</h4>
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>Any level</h5>
                                                    <h5>Joseph murphy</h5>
                                                </div>
                                                
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>27 april 2023</h5>
                                                    <h5>2:00 Hrs</h5>
                                                </div>
                                                
                                                <p className="m-0">In this course you will get an overview from beginners level to advance level , in this master class we will get the idea about improving the designer time by providing shortcut keys and function , building up the portfolio to advance level to get more hiring alerts and offers........</p>

                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <button className="btn btn-outline-primary">Enroll Now</button>
                                                    <button className="btn btn-primary">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item">
                                <div class="card mb-3" style={{maxWidth: "600px", margin: "1rem", background: "linear-gradient(225.96deg, rgb(180, 253, 205) -12.62%, rgb(195, 250, 230) 113.1%)",borderRadius: "12px"}}>
                                    <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                                        <div class="col-md-4">
                                            <img src={explore4} class="img-fluid rounded-start" alt="..." style={{height: "20rem", width: "25rem"}}/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">PYTHON</h4>
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>Any level</h5>
                                                    <h5>Joseph murphy</h5>
                                                </div>
                                                
                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <h5>27 april 2023</h5>
                                                    <h5>2:00 Hrs</h5>
                                                </div>
                                                
                                                <p className="m-0">In this course you will get an overview from beginners level to advance level , in this master class we will get the idea about improving the designer time by providing shortcut keys and function , building up the portfolio to advance level to get more hiring alerts and offers........</p>

                                                <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                    <button className="btn btn-outline-primary">Enroll Now</button>
                                                    <button className="btn btn-primary">View Details</button>
                                                </div>
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
                        <h1 style={{fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "161.01%",letterSpacing: "0.02em"}}>Upcoming Master Workhops</h1>
                    </div>

                    <div class="container" style={{display: 'flex', justifyContent: "center", marginTop: "5rem"}}>
                        <ul class="nav justify-content-between all-workshop-ul-container">
                            <li class="nav-item px-5">
                                <div class="px-4 py-5 my-5 text-center all-workshops" style={{maxWidth: "350px", background: "linear-gradient(225.96deg, rgb(255 192 229) -12.62%, rgb(255 207 210) 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={morework1} alt="" style={{width:"20rem", height:"20rem"}}/>
                                    <h3 class="card-title fb-bold" style={{color:"#0C2162"}}>WEB DEVELOPMENT</h3>
                                    <div class=" mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5>Any level</h5>
                                                <h5>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5>27 april 2023</h5>
                                                <h5>2:00 Hrs</h5>
                                            </div>
                                            
                                            <p className="m-0" style={{color:"#0C2162"}}>In this course you will get an overview from beginners level to advance level , in this master class we will get the idea about improving the designer time by providing shortcut keys and function , building up the portfolio to advance level to get more hiring alerts and offers........</p>

                                            <div className="d-flex justify-content-between m-0 my-3" style={{color:"#0C2162"}}>
                                                <button className="btn btn-outline-primary">Enroll Now</button>
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                            <li class="nav-item px-5">
                                <div class="px-4 py-5 my-5 text-center all-workshops" style={{maxWidth: "350px", background: "linear-gradient(225.96deg, rgb(171 224 235) -12.62%, rgb(169 231 234) 113.1%)",borderRadius: "12px"}}>
                                    <img class="d-block mx-auto mb-4" src={morework2} alt="" style={{width:"20rem", height:"20rem"}}/>
                                    <h3 class="card-title fb-bold" style={{color:"#0C2162"}}>ILLUSTRATOR</h3>
                                    <div class="mx-auto">
                                        <div class="card-body">
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5>Any level</h5>
                                                <h5>Joseph murphy</h5>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between m-0" style={{color:"#0C2162"}}>
                                                <h5>27 april 2023</h5>
                                                <h5>2:00 Hrs</h5>
                                            </div>
                                            
                                            <p className="m-0" style={{color:"#0C2162"}}>In this course you will get an overview from beginners level to advance level , in this master class we will get the idea about improving the designer time by providing shortcut keys and function , building up the portfolio to advance level to get more hiring alerts and offers........</p>

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
        </div>
        </>
    )
}

export default Workshop;