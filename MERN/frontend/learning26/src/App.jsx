// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// import { HeaderComponent } from "./components/HeaderComponent";
// import { FooterComponent } from "./components/FooterComponent";
// import ContentComponent from "./components/ContentComponent";
// import Header from './components/Header';
// import PlayerPortfolio from './components/PlayerPortfolio';
// import { MapDemo6 }  from "./components/MapDemo6";
import MapDemo10 from "./components/MapDemo10";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { NetflixTicket } from "./components/NetflixTicket";
import { NetflixDetails } from "./components/NetflixDetails";
import { NetflixTrending } from "./components/NetflixTrending";
import { ErrorNotFound } from "./components/ErrorNotFound";
import { Watch } from "./components/Watch";
import { CricketTeams } from "./components/CricketTeams";
import { TeamDetails } from "./components/TeamDetails";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { Employees } from "./components/Employees";
import  StudentPage  from "./components/StudentPage";




function App() {


  return (
    <div>
       <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/netflixticket" element={<NetflixTicket/>}></Route>
        <Route path="/netflixdetails" element={<NetflixDetails/>}></Route>
        <Route path="/netflixTrending" element={<NetflixTrending/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        <Route path="/CricketTeams" element = {<CricketTeams/>}></Route>
        <Route path="/team/:teamName" element = {<TeamDetails/>}></Route>
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/fundemo1" element ={<FunctionDemo1/>}></Route>
        <Route path="/employees" element ={<Employees/>}></Route>
        <Route path="/studentPage" element ={<StudentPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
