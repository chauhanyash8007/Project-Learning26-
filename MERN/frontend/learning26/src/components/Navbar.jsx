import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand nav-link" to="/">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                NEtflix Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixticket">
                Tickets
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixdetails">
                Details
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixTrending">
                Trending
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/CricketTeams">
                Cricket Teams
              </Link>
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/fundemo1">
                fundemo1
              </Link>
            </li>
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li> */}
             <li class="nav-item active">
              <Link class="nav-link" to="/employees">
                employees
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/studentPage">
                StudentPage
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo2">
                inputdemo2
              </Link>
            </li>
            
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo4">
                formdemo4
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form1">
                form1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form2">
                form2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form3">
                form3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form4">
                form4
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form5">
                form5
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form6">
                form6
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form7">
                form7
              </Link>
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/ApiDemoOne">
                ApiDemo1
              </Link>
            </li>
             <li class="nav-item active">
              <Link class="nav-link" to="/ApiDemoTwo">
                ApiDemo2
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};