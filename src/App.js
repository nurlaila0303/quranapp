import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from"./component/Navbar";
import Home from"./halaman/Home";
import Surah from"./halaman/Surah";
import Juz from"./halaman/Juz";
import About from "./halaman/About";
import {Route, Routes} from "react-router-dom";
import React from "react";
import InfoSurah from "./halaman/InfoSurah";

function App() {
    return (
        <>
            <div className="App" >
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="surah/:id" element={<Surah/>}/>
                    <Route path="juz/:id" element={<Juz/>}/>
                    <Route path="info/:id" element={<InfoSurah/>}/>
                    <Route path="/About" element={<About/>}/>
                </Routes>
            </div>
        </>
  );
}

export default App;
