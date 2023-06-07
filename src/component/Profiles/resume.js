import React from "react";
import '../../resume.css'
import profimg from '../../icons/profile-icons/profimg.png'
import eduht from '../../icons/profile-icons/education-hT.png'
import penimg from '../../icons/profile-icons/pen-img.png'
import traimg from '../../icons/profile-icons/TRANING-IMG.png'
import courseimg from '../../icons/profile-icons/COURSES-img.png'
import internships from '../../icons/profile-icons/Internships.png'
import jobimg from '../../icons/profile-icons/job-img.png'
import projimg from '../../icons/profile-icons/projects-img.png'
import achimg from '../../icons/profile-icons/ach-img.png'
import achandimg from '../../icons/profile-icons/ac&h-mg.png'
import mlcimg from '../../icons/profile-icons/MLC-img.png'
import download from '../../icons/profile-icons/download-img.png'


export function Resume(){
    function showInput(id) {
        document.getElementById("inputLink" + id).style.display = "none";
        document.getElementById("inputField" + id).style.display ="block";
    }
    return(
        <>
        <table class="table" cellpadding="32" cellspacing="40" id="table">
            <div class="container " style={{marginTop: "5rem"}}>
                <div className="col">
                    <tr>
                        <td>
                            <img class="pankaj" width="140px" src={profimg} alt="pfp-img"/>
                        </td>
                        <td>
                            <div class="text">
                                <h3 id="h3"><strong> Pankaj Asiwal</strong></h3>
                                <p id="p">pankajasiwal@gmail.com</p>
                                <p id="p">Delhi,New Delhi, India</p>
                                <p id="p1">+987002556</p>
                            </div>
                        </td>
                    </tr>
            
                    <tr>
                        <td>
                            <div>
                            <img src={eduht} alt="" />
                            <h5>Education Background</h5>
                            </div>
                        </td>
                        <td>
                            <img src={penimg} alt="" />
                            <a id="inputLink1" onClick={()=>showInput("1")}>Add Education</a>
                            <div class="inputField" id="inputField1" style={{display: "none"}}>
                            <div class="details" style={{display: "flex", flexDirection: "column"}}>
                                <label className="label" for="degree">Degree</label>
                                <input className="input" type="text" name="degree" id="degree" placeholder="Enter your degree name"/>
                                
                                <label className="label" for="college">College</label>
                                <input className="input" type="text" name="college" id="college" placeholder="Enter your college name"/>
                                
                                <label className="label" for="startdate">Start Date</label>
                                <input className="input" type="date" name="startdate" id="startdate" placeholder="Enter starting date of your degree"/>
                                
                                <label className="label" for="lastdate">Last Date</label>
                                <input className="input" type="date" name="lastdate" id="lastdate" placeholder="Enter ending date of your degree"/>
                                
                                <label className="label" for="percentage">Percentage</label>
                                <input className="input" type="text" name="percentage" id="percentage" placeholder="Enter your Last percentage"/>
                    
                                <button onCilck="addeducationdtails(1)">Save</button>
                            </div>
                            </div>
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            <img src={traimg} alt="" />
                            <h5>Trainings</h5>
                        </td>
                        <td>
                            <img src={penimg} alt="" />
                            <a id="inputLink2" onCilck={()=>showInput("2")}>Add Trainings</a>
                            <div class="inputField" id="inputField2" style={{display: "none"}}>
                                <div class="details" style={{display: "flex", flexDirection: "column"}}>
                                    <label className="label" for="degree">Role</label>
                                    <input className="input" type="text" name="degree" id="degree" placeholder="Enter your role name"/>
                                    
                                    <label className="label" for="college">Comapany</label>
                                    <input className="input" type="text" name="college" id="college" placeholder="Enter your Comapany name"/>
                                    
                                    <label className="label" for="startdate">Start Date</label>
                                    <input className="input" type="date" name="startdate" id="startdate" placeholder="Enter starting date of your degree"/>
                                    
                                    <label className="label" for="lastdate">Last Date</label>
                                    <input className="input" type="date" name="lastdate" id="lastdate" placeholder="Enter ending date of your degree"/>
                                    
                                    <label className="label" for="percentage">Stipend</label>
                                    <input className="input" type="text" name="percentage" id="percentage" placeholder="Enter your Last Stipend"/>
                        
                                    <button onCilck="addeducationdtails(1)">Save</button>
                                </div>
                            </div>
                        </td>
                    </tr>
            
                    <tr>
                        <td>
                            <img src={courseimg} alt="" />
                            <h5>Courses</h5>
                        </td>
                        <td>
                            <img src={penimg} alt=""/>
                            <a id="inputLink3" onCilck={()=>showInput("3")}>Add Courses</a>
                            <div class="inputField" id="inputField3" style={{display: "none"}}>
                                <div class="details" style={{display: "flex", flexDirection: "column"}}>
                                    <label className="label" for="degree">Course</label>
                                    <input className="input" type="text" name="degree" id="degree" placeholder="Enter your course name"/>
                                    
                                    <label className="label" for="college">From where did you do this course</label>
                                    <input className="input" type="text" name="college" id="college" placeholder="Udemy"/>
                                    
                                    <label className="label" for="startdate">Start Date</label>
                                    <input className="input" type="date" name="startdate" id="startdate" placeholder="Enter starting date of your degree"/>
                                    
                                    <label className="label" for="lastdate">Last Date</label>
                                    <input className="input" type="date" name="lastdate" id="lastdate" placeholder="Enter ending date of your degree"/>
                        
                                    <button onCilck="addeducationdtails(1)">Save</button>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                            <img src={internships} alt="" />
                            <h5>Internships</h5>
                            </div>
                        </td>
                        <td>
                            <img src={penimg} alt="" />
                            <a id="inputLink4" onCilck={()=>showInput("4")}>Add Internships</a>
                            <div class="inputField" id="inputField4">
                            <input className="input" type="text" placeholder="Type here" />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                            <img src={jobimg} alt="" />
                            <h5>Jobs</h5>
                            </div>
                        </td>
                        <td>
                            <img src={penimg} alt="" />
                            <a id="inputLink5" onCilck={()=>showInput("5")}>Add Jobs</a>
                            <div class="inputField" id="inputField5">
                            <input className="input" type="text" placeholder="Type here" />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                            <img src={projimg} alt="" />
                            <h5>Projects</h5>
                            </div>
                        </td>
                        <td>
                            <img src={penimg} alt="" />
                            <a id="inputLink6" onCilck={()=>showInput("6")}>Add Projects</a>
                            <div class="inputField" id="inputField6">
                            <input className="input" type="text" placeholder="Type here" />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                            <img src={achimg} alt="" />
                            <h5>Achievenments</h5>
                            </div>
                        </td>
                        <td>
                            <img src={penimg} alt="" />
                            <a id="inputLink7" onCilck={()=>showInput("7")}>Add Achievenments/rewards or awards</a>
                            <div class="inputField" id="inputField7">
                            <input className="input" type="text" placeholder="Type here" />
                            </div>   
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                            <img src={achandimg} alt="" />
                            <h5>Acitivites or Hobbies</h5>
                            </div>
                        </td>
                        <td>
                            <img src={penimg} alt="" />
                            <a id="inputLink8" onCilck={()=>showInput("8")}>Add Other Acitivites or Hobbies
                            </a>
                            <div class="inputField" id="inputField8">
                            <input className="input" type="text" placeholder="Type here" />
                            </div>
                        </td>
                    </tr>

                    <tr>
                    <td>
                        <div>
                        <img src={mlcimg} alt="" />
                        <h5>Media links to connects</h5>
                        </div>
                    </td>
                    <td>
                        <img src={penimg} alt="" />
                        <a id="inputLink9" onCilck={()=>showInput("9")}>Add Media Links to Connects</a>
                        <div class="inputField" id="inputField9">
                        <input className="input" type="text" placeholder="Type here" />
                        </div>
                    </td>
                    </tr>
                </div>
            </div>        
        </table>
      
        <div class="down">
            <a>
            <img src={download} alt=""/>
            Download
            </a>
        </div>
        </>
    )
}   

export default Resume;