import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from 'react-router-dom'
import About from "./pages/About";
import Portfoliu from "./pages/Portfoliu";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
    return(
        <>
            <Header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/portfoliu" element={<Portfoliu/>} />
                        <Route path="/service" element={<Service/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </main>
            </Header>
        </>
    )
}
export default App