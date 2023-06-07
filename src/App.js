import './App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {Navbar as Nav} from "./component/navbar"
import {Footer as Foot} from "./component/footer"
import {Home} from "./component/Home/home"
import {Employee} from "./component/Authenticate/employeeRegister"
import {Employer} from "./component/Authenticate/employerRegister"
import {Resume} from "./component/Profiles/resume"
import {Workshop} from "./component/workshop/workshop"
import {Course} from "./component/Courses/course"

function Navbar() {
  const location = useLocation();
  const hideNavbarFooterRoutes = ["/employer", "/employee"];
  const shouldRenderNavbar = !hideNavbarFooterRoutes.includes(location.pathname);

  return shouldRenderNavbar ? <Nav/> : null;
}

function Footer() {
  const location = useLocation();
  const hideNavbarFooterRoutes = ["/employer", "/employee"];
  const shouldRenderFooter = !hideNavbarFooterRoutes.includes(location.pathname);

  return shouldRenderFooter ? <Foot/> : null;
}



function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/employer' element={<Employer/>}/>
          <Route path='/employee' element={<Employee/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/workshop' element={<Workshop/>}/>
          <Route path='/course' element={<Course/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
