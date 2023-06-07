import React from "react";

export function Hero(props) {
    return (
        <div className="App">
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={props.headImage} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 main-tag">{props.headTitle}</h1>
                        <p class="lead">{props.headPara}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" style={{borderRadius: "5px", background: "linear-gradient(95.63deg, #554CB9 -16.09%, #4AC4F7 124.47%)", boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px"}}>
                        Get Started
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container search-bar" style={{marginBottom:"7rem"}}>  
                <div class="job-title" style={{padding: "0.8rem"}}>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1" style={{border: "none", backgroundColor: "transparent"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </span>
                        <input type="text" class="form-control" placeholder="Job title or keyword" aria-label="Job title or keyword" aria-describedby="basic-addon1" style={{border: "none", backgroundColor: "transparent"}}/>
                    </div>
                </div>

                <div class="vr rule"></div>
        
                <div class="search_location">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1" style={{border: "none", backgroundColor: "transparent"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </span>
                        <input type="text" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="basic-addon1" style={{border: "none", backgroundColor: "transparent"}}/>
                    </div>
                </div>
    
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" style={{backgroundColor: "#554CB9", borderRadius: "5px", fontSize: "1rem"}}>Search</button>
            </div>
        </div>
    );
  }
  
  export default Hero;