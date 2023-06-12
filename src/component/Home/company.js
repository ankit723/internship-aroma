import React from "react"
import company1 from "../../icons/home-page/companie-google.png"
import company2 from "../../icons/home-page/companies-microsoft.png"
import company3 from "../../icons/home-page/companies-spotify.png"
import company4 from "../../icons/home-page/companies-wipro.png"

export function Company(){
    return(
        <div class="container hiring-companies" style={{marginTop: "5rem"}}>
            <div class="container">
                <h1 style={{fontFamily: 'Proxima Nova', fontStyle: 'normal', fontWeight: "400", fontSize: '40px', lineHeight: "161.01%", letterSpacing: "0.02em"}}>Top Companies Hiring</h1>
            </div>

            <ul class="nav justify-content-center" style={{marginTop: "5rem"}}>
                <li class="nav-item">
                <img src={company1} alt="" className="company-img" style={{height: "12rem", maxWidth: "22rem"}}/>
                </li>
                <li class="nav-item">
                <img src={company2} alt="" className="company-img" style={{height: "12rem", maxWidth: "22rem"}}/>
                </li>
                <li class="nav-item">
                <img src={company3} alt="" className="company-img" style={{height: "12rem", maxWidth: "22rem"}}/>
                </li>
                <li class="nav-item">
                <img src={company4} alt="" className="company-img" style={{height: "12rem", maxWidth: "22rem"}}/>
                </li>
            </ul>
        </div>
    )
}

export default Company;