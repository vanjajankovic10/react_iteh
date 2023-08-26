import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom';

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
                <li>
                    <Link className="link" to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/products">
                    Products
                    </Link>
                </li>
                <li>
                <Link className="link" to="/wishlist">
                    Wishlist
                    </Link>
                </li>
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