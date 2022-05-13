import React, {Fragment, useCallback, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import {Navigate, Route, Routes} from 'react-router-dom';
import {AllReconstructionsPage} from "./pages/AllReconstructionsPage/AllReconstructionsPage";
import {AllUsersPage} from "./pages/AllUsersPage/AllUsersPage";
import {EquipmentPage} from "./pages/EquipmentPage/EquipmentPage";
import AuthContext from "./components/store/auth-context";

function App() {
    const authCtx = useContext(AuthContext)

    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Navigate replace to='/auth'/>}/>

                (<Route path='/auth' element={authCtx.isLoggedIn
                ? <AuthPage/>
                : <Navigate replace to='/reconstructions'/>}/>)

                <Route path='/reconstructions' element={authCtx.isLoggedIn
                    ? <AllReconstructionsPage/>
                    : <Navigate replace to='/auth'/>}/>
                <Route path='/users' element={authCtx.isLoggedIn
                    ? <AllUsersPage/>
                    : <Navigate replace to='/auth'/>}/>
                <Route path='/equipment' element={authCtx.isLoggedIn
                    ? <EquipmentPage/>
                    : <Navigate replace to='/auth'/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;
