import React from "react";
import finance from "../../icons/home-page/finance-management.png"
import marketing from "../../icons/home-page/digital-marketing.png"
import analyst from "../../icons/home-page/data-analyst.png"
import writing from "../../icons/home-page/digital-marketing.png"
import development from "../../icons/home-page/web-development.png"
import learning from "../../icons/home-page/machine-learning.png"

export function Category() {
    return (
      <div className="App">
        <div class="container categorie-selecter" style={{marginTop: "5rem"}}>
          <div class="container" style={{display: "flex", justifyContent: "space-between"}}>
            <h1 style={{fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "161.01%",letterSpacing: "0.02em"}}>Explore by categories</h1>
            <button type="button" class="btn btn-outline-primary"style={{border: "2px solid #554CB9", filter: "drop-shadow(0px 3px 4px rgb(0, 0, 0, 0.3))", borderRadius: "6px", fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "19px", lineHeight: "161.01%", letterSpacing: "0.02em", color: "#554CB9"}}>All Category</button>
          </div>

          <div class="container" style={{display: 'flex', justifyContent: "center", marginTop: "5rem"}}>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <div class="card mb-3" style={{maxWidth: "390px", margin: "1rem"}}>
                <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                  <div class="col-md-4">
                    <img src={finance} class="img-fluid rounded-start" alt="..." style={{height: "7rem", width: "15rem", padding:"1rem"}}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Finance Management</h5>
                    </div>
                  </div>
                </div>
                </div>
              </li> 
              
              <li class="nav-item">
                <div class="card mb-3" style={{maxWidth: "390px", margin: "1rem"}}>
                  <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                    <div class="col-md-4">
                      <img src={marketing} class="img-fluid rounded-start" alt="..." style={{height: "7rem", width: "15rem", padding:"1rem"}}/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Digital Marketing</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <div class="card mb-3" style={{maxWidth: "390px", margin: "1rem"}}>
                  <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                    <div class="col-md-4">
                      <img src={analyst} class="img-fluid rounded-start" alt="..." style={{height: "7rem", width: "15rem", padding:"1rem"}}/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Data Analyst</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>

          <div class="container" style={{display: "flex", justifyContent: "center"}}>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <div class="card mb-3" style={{maxWidth: "390px", margin: "1rem;"}}>
                  <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                    <div class="col-md-4">
                      <img src={writing} class="img-fluid rounded-start" alt="..." style={{height: "7rem", width: "20rem", padding:"1rem"}}/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Content Writing</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li class="nav-item">
                <div class="card mb-3" style={{maxWidth: "390px", margin: "1rem"}}>
                  <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                    <div class="col-md-4">
                      <img src={development}class="img-fluid rounded-start" alt="..." style={{height: "7rem", width: "15rem", padding:"1rem"}}/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Web Development</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <div class="card mb-3" style={{maxWidth: "390px", margin: "1rem"}}>
                  <div class="row g-0" style={{display: "flex", alignItems: "center"}}>
                    <div class="col-md-4">
                      <img src={learning} class="img-fluid rounded-start" alt="..." style={{height: "7rem", width: "15rem", padding:"1rem"}}/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Machine Learning</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    );
  }
  
  export default Category;