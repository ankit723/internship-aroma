import React from "react";
import prof_1 from "../../icons/home-page/profile-pic1.png"
import prof_2 from "../../icons/home-page/profile-pic2.png"
import prof_3 from "../../icons/home-page/profile-pic3.png"

export function Review() {
    return (
      <div className="App">
        <div class="container reviews" style={{marginTop: "5rem"}}>
      <div class="container">
        <h1 style={{fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "161.01%",letterSpacing: "0.02em"}}>Student reviews & rating</h1>
      </div>

      <div class="container">
        <ul class="nav justify-content-center">
          <li class="nav-item" style={{padding: "2rem"}}>
            <div class="card" style={{width: "18rem", height: "28rem", background: "#FFFFFF", border: "1.3px solid #D9D9D9", boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.2)"}}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <img src={prof_1} alt="" style={{width: "11rem", height: "9rem"}}/>
                  <h4>Dinesh Dalal</h4>
                </li>
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <p>Placed at</p>
                  <p><b>Google</b></p>
                  <p>CTC 40L-45L</p>
                </li>
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <p style={{padding: "1rem"}}> I got the internship from this platform as a fresher.....</p>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item" style={{padding: "2rem"}}>
            <div class="card" style={{width: "18rem", height: "28rem", background: "#FFFFFF", border: "1.3px solid #D9D9D9",boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.2)"}}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <img src={prof_2} alt="" style={{width: "11rem", height: "9rem"}}/>
                  <h4>Yuvan Singh</h4>
                </li>
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <p>Placed at</p>
                  <p><b>Accenture</b></p>
                  <p>CTC 15L-20L</p>
                </li>
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <p style={{padding: "1rem"}}> I got the placement from this platform as an experienced.....</p>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item" style={{padding: "2rem"}}>
            <div class="card" style={{width: "18rem", height: "28rem", background: "#FFFFFF", border: "1.3px solid #D9D9D9",boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.2)"}}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <img src={prof_3} alt="" style={{width: "11rem", height: "9rem"}}/>
                  <h4>Sonam</h4>
                </li>
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <p>Placed at</p>
                  <p><b>Wipro</b></p>
                  <p>CTC 10L-15L</p>
                </li>
                <li class="list-group-item" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <p style={{padding: "1rem"}}> I got the placement from this platform as a fresher.....</p>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
      </div>
    );
  }
  
  export default Review;