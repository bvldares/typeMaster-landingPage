import React from 'react'
import './App.css'
import Header from "./Components/Header"
import Intro from "./Components/Intro"
import Main from "./Components/Main"
import Footer from "./Components/Footer"


export default function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Intro />
        <Main />
        <Footer />
    </div>
  )
}


