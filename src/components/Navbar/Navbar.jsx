import React from "react";
import logoImg from "../../assets/logo.png"
import './style.css'

class Navbar extends React.Component {
    render() {
        return (
            <header>

            <nav id="navbar">
              <div className="nav-brand">
                <img src={logoImg} alt="App Logo - Saturno" />
                <h2>Space Flight News</h2>
              </div>
  
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="trandeing.html">Trending</a></li>
                <li><a href="categories.html">Categories</a></li>
                <li><a href="about.html">About us</a></li>
              </ul>
            </nav>
        
          </header>
        )
   }

}

export default Navbar;