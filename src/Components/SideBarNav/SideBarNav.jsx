import React, { useEffect } from 'react';
import './SideBarNav.scss';
import { FaHome, FaBookReader, FaAddressBook  } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GrProjects } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



function SideBarNav() {
  useEffect(() => {
    let list = document.querySelectorAll(".list");

    for (let i = 0; i < list.length; i++) {
      list[i].onmouseover = function () {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active";
      };
    }
  }, []); 

  return (
    <div>
      <div className="navigation">
        
          <ul>
            <li className="list active">
              <Link to="/" >
                <span className="icon"><FaHome /></span>
                <span className="title">Home</span>
              </Link>
            </li>
            <li className="list active">
              <Link to="/about" >
                <span className="icon"><BsFillPersonFill /></span>
                <span className="title">About me</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/portfolio">
                <span className="icon"><ImProfile /></span>
                <span className="title">Portfolio</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/projects">
                <span className="icon"><GrProjects /></span>
                <span className="title">Projects</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/education">
                <span className="icon"><FaBookReader /></span>
                <span className="title">Education</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/contact">
                <span className="icon"><FaAddressBook /></span>
                <span className="title">Contact</span>
              </Link>
            </li>
            <div class="indicator"></div>
          </ul>
        </div>
      
    </div>
  );
}

export default SideBarNav;
