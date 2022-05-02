import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import {Navigate, Route, Routes} from 'react-router-dom';
import {AllReconstructionsPage} from "./pages/AllReconstructionsPage/AllReconstructionsPage";
import {AllUsersPage} from "./pages/AllUsersPage/AllUsersPage";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Navigate replace to='/auth'/>}/>
                <Route path='/auth' element={<AuthPage/>}/>
                <Route path='/reconstructions' element={<AllReconstructionsPage/>}/>
                <Route path='/users' element={<AllUsersPage/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;
