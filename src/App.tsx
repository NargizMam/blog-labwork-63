import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import PostForm from "./containers/PostForm/PostForm";
import PostInfo from "./components/PostInfo/PostInfo";


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
                    )}>
                        <Route path='posts/:id' element={(
                            <PostInfo/>
                        )}/>
                        <Route path='/edit/:id' element={(
                            <PostForm/>
                        )}/>
                    </Route>
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
