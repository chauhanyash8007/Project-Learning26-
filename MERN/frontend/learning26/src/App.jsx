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
import { InputDemo1 } from "./components/input/InputDemo1";
import { InputDemo2 } from "./components/input/InputDemo2";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import  FormOne from "./components/form/FormOne";
import  FormTow  from "./components/form/FormTwo";
import  FormThree  from "./components/form/FormThree";
import  FormFour  from "./components/form/FormFour";
import  FormFive  from "./components/form/FormFive";
import  FormSix  from "./components/form/FormSix";
import  FormSeven  from "./components/form/FormSeven";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemoOne } from "./components/api/ApiDemoOne";
import { ApiDemoTwo } from "./components/api/ApiDemoTwo";

function App() {


  return (
    <div>
       <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element = {<HomeComponent/>}></Route>
        {/* <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/netflixticket" element={<NetflixTicket/>}></Route>
        <Route path="/netflixdetails" element={<NetflixDetails/>}></Route>
        <Route path="/netflixTrending" element={<NetflixTrending/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route> */}
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
        <Route path="/CricketTeams" element = {<CricketTeams/>}></Route>
        <Route path="/team/:teamName" element = {<TeamDetails/>}></Route>
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/fundemo1" element ={<FunctionDemo1/>}></Route>
        <Route path="/employees" element ={<Employees/>}></Route>
        <Route path="/studentPage" element ={<StudentPage/>}></Route>
        <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
        <Route path="/inputdemo2" element = {<InputDemo2/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element = {<FormDemo4/>}></Route>
        <Route path="/form1" element = {<FormOne/>}></Route>
        <Route path="/form2" element = {<FormTow/>}></Route>
        <Route path="/form3" element = {<FormThree/>}></Route>
        <Route path="/form4" element = {<FormFour/>}></Route>
        <Route path="/form5" element = {<FormFive/>}></Route>
        <Route path="/form6" element = {<FormSix/>}></Route>
        <Route path="/form7" element = {<FormSeven/>}></Route>
        <Route path="/apidemo1" element ={<ApiDemo1/>}></Route>
        <Route path="/ApiDemoOne" element ={<ApiDemoOne/>}></Route>
        <Route path="/ApiDemoTwo" element ={<ApiDemoTwo/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
