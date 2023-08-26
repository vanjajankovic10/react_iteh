import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

const NavBar = ({search}) => {
  return (
    <nav className="navbar">
    <div className="container">
    <div className="logo">
        <img src="images/logo.png" alt="" className="logoImage"></img>
    </div>
    <div className="nav-elements">
        <div className="pages">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Wishlist</li>
            </ul>
        </div>
        <div className="searchArea">
            <input 
                type="text" 
                id="criteria"
                placeholder="Search skincare products"
                name="search"
                class="rounded-input"
                onChange={() =>
                    search(document.getElementById("criteria").value)
                  }
                />
                <button type="submit" className="btnSearch">
                {" "}
                <AiOutlineSearch></AiOutlineSearch>{" "}
                </button>
                
        </div>
        
    </div>
    </div>
    </nav>
  )
}

export default NavBar