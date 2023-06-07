import React from "react";
import home_top from "../backgrounds/home_top.png"


export function Carousel(props) {
    return (
      <div className="App">
        <div class="container course-carousel" style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0"}}>
        <h1 class="course-heading">{props.carouselTitle}</h1>
        <p class="course-para">{props.carouselPara}</p>
        <div id="carouselExampleIndicators" class="carousel slide" style={{marginTop: "5rem"}}>
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="carousel-div-item">
                    <div class="container col-xxl-8 px-4 py-5">
                        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                          <div class="col-10 col-sm-8 col-lg-6">
                            <img src={home_top} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                          </div>
                          <div class="col-lg-6">
                            <ul>
                                <li style={{padding: "0.5rem"}}>{props.carouselItem1}</li>
                                <li style={{padding: "0.5rem"}}>{props.carouselItem2}</li>
                                <li style={{padding: "0.5rem"}}>{props.carouselItem3}</li>
                            </ul>

                          </div>
                        </div>
                      </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="carousel-item active">
                    <div class="carousel-div-item">
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                              <div class="col-10 col-sm-8 col-lg-6">
                                <img src={home_top} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                              </div>
                              <div class="col-lg-6">
                                <ul>
                                  <li style={{padding: "0.5rem"}}>{props.carouselItem1}</li>
                                  <li style={{padding: "0.5rem"}}>{props.carouselItem2}</li>
                                  <li style={{padding: "0.5rem"}}>{props.carouselItem3}</li>
                                </ul>
    
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
              </div>
              
              <div class="carousel-item">
                <div class="carousel-item active">
                    <div class="carousel-div-item">
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                              <div class="col-10 col-sm-8 col-lg-6">
                                <img src={home_top} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                              </div>
                              <div class="col-lg-6">
                                <ul>
                                  <li style={{padding: "0.5rem"}}>{props.carouselItem1}</li>
                                  <li style={{padding: "0.5rem"}}>{props.carouselItem2}</li>
                                  <li style={{padding: "0.5rem"}}>{props.carouselItem3}</li>
                                </ul>
    
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button></div>
        </div>
      </div>
    );
  }
  
  export default Carousel;