import React from "react";

function Navbar() {
  return (
    <navbar>
      <ul id="nav-links">
        <li>
          <a href="#">
            <img className="nav-icon" src="/AppleLogo.png" alt="appleicon" />
          </a>
        </li>
        <li>
          <a href="#">Mac</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <a href="#">iPhone</a>
        </li>
        <li>
          <a href="#">Watch</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">
            <img
              className="nav-icon"
              src="/searchapple.png"
              alt="searchappleicon"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="nav-icon" src="/bagapple.png" alt="appleicon" />
          </a>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
