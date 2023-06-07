import React, {useEffect} from "react";
import {Hero} from '../hero'
import {Carousel} from '../carousel'
import {Category} from './category'
import {Review} from './reviews'
import {Highlights} from './highlights'
import {Company} from './company'
import home_top from "../../backgrounds/home_top.png"

export function Home() {
  useEffect(()=>{
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("home").classList.add("active")
    
    }, [])
    return (
      <div className="App">
        <Hero headImage={home_top} headTitle={"Find your dream internship and jumpstart your career with Internship Aroma"} headPara={"Discover exciting internships from top companies and gain valuable industry experience that can help you launch your career."}/>
        
        <Carousel carouselTitle={"OUR COURSES"} carouselPara={"We offer various courses to build your career"} carouselItem1={"Take the first step in your career"} carouselItem2={"Discover exciting internships"} carouselItem3={"Get valuable work experience"}/>
        
        <Category/>
        <Review/>
        <Highlights/>
        <Company/>
      </div>
    );
  }
  
  export default Home;