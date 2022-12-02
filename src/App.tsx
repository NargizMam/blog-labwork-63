import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import PostForm from "./containers/PostForm/PostForm";


function App() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main className="container-fluid">
                <Routes>
                    <Route path='/' element={(
                        <Home/>
                    )}/>
                    <Route path='/new-post' element={(
                        <PostForm/>
                    )}/>
                    <Route path='/about' element={(
                        <About/>
                    )}/>
                    <Route path='/contacts' element={(
                        <Contacts/>
                    )}/>

                </Routes>
            </main>
        </>
    )}

export default App;
