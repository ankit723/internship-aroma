import React from "react"
import highlights1 from "../../icons/home-page/highlights1.png"
import highlights2 from "../../icons/home-page/highlights2.png"
import highlights3 from "../../icons/home-page/highlights3.png"
import highlights4 from "../../icons/home-page/highlights4.png"
import highlights5 from "../../icons/home-page/highlights5.png"

export function Highlights(){
    return(
        <div className="App">
            <div class="container aroma-highlights" style={{marginTop: "5rem"}}>
                <div className="container">
                    <h1 style={{fontFamily: 'Proxima Nova', fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "161.01%", letterSpacing: "0.02em"}}>Our higlights</h1>
                </div>

                <ul class="nav justify-content-center">
                    <li className="nav-item">
                        <div className="px-4 py-5 my-5 text-center nav-link">
                            <img class="d-block mx-auto mb-4" src={highlights1} alt="" width="72" height="57" style={{width: "10rem", height: "8rem"}}/>
                            <h1 class="display-5 fw-bold text-body-emphasis" style={{fontSize: "1rem", marginBottom: "2rem"}}>LIVE CLASSES</h1>
                            <p class="lead mb-4 text-black">Learn from different  instructors<br/> all over the  world and again the<br/> required skills under their <br/> supervision.</p>
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="px-4 py-5 my-5 text-center nav-link">
                            <img class="d-block mx-auto mb-4" src={highlights2} alt="" width="72" height="57" style={{width: "10rem", height: "8rem"}}/>
                            <h1 class="display-5 fw-bold text-body-emphasis" style={{fontSize: "1rem", marginBottom: "2rem"}}>JOB GUARANTEE</h1>
                            <p class="lead mb-4 text-black">Get placement offer of <br/> more than guaranteed CTC. <br/> If not, pay zero fee for <br/> the registered courses.</p>
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="px-4 py-5 my-5 text-center nav-link">
                            <img class="d-block mx-auto mb-4" src={highlights3} alt="" width="72" height="57" style={{width: "10rem", height: "8rem"}}/>
                            <h1 class="display-5 fw-bold text-body-emphasis" style={{fontSize: "1rem", marginBottom: "2rem"}}>₹ 50L HIGHEST CTC</h1>
                            <p class="lead mb-4 text-black">connecting Talent to Opportunities <br/> Get the Best Internship Experience <br/> with the Highest Ctc Offer of the Season</p>
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="px-4 py-5 my-5 text-center nav-link">
                            <img class="d-block mx-auto mb-4" src={highlights4} alt="" width="72" height="57" style={{width: "10rem", height: "8rem"}}/>
                            <h1 class="display-5 fw-bold text-body-emphasis" style={{fontSize: "1rem", marginBottom: "2rem"}}>PLACEMENT GUARANTEE</h1>
                            <p class="lead mb-4 text-black">We have 100% placement rate <br/> for all provided courses.</p>
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="px-4 py-5 my-5 text-center nav-link">
                            <img class="d-block mx-auto mb-4" src={highlights5} alt="" width="72" height="57" style={{width: "10rem", height: "8rem"}}/>
                            <h1 class="display-5 fw-bold text-body-emphasis" style={{fontSize: "1rem", marginBottom: "2rem"}}>HIGHEST AVG CTC</h1>
                            <p class="lead mb-4 text-black">We provide average CTC for  batch<br/> which is highest among others.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Highlights;