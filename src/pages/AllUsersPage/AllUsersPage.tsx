import classes from "./AllUsersPage.module.scss";
import {UsersList} from "../../components/Users/UsersList/UsersList";
import {Header} from "../../components/Header/Header";
import useHttp from "../../components/hooks/use-http";
import {addNewUser, getAllEquipment, getAllUsers} from "../../components/lib/api";
import React, {useEffect} from "react";

export const AllUsersPage = () => {
    const {
        sendRequest: getAllUsersRequest,
        data: loadedUsers,
        status: getAllUsersRequestStatus,
        error: getAllUsersRequestError,
    } = useHttp(getAllUsers)
    
    useEffect(()=>{
        getAllUsersRequest()
    },[getAllUsersRequest])

    let content = <div></div>

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        fetch('http://127.0.0.1:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "testN",
                surname: "testSur",
                password: "sdf134fdg3",
                email: "testfgsdl@testmail.com",
                type_: "organizer",
            })
        }).then(r => console.log(r.json()))
            .catch(error => console.log(error))
    }

    if (getAllUsersRequestStatus==='pending'){
        content= <p>Loading...</p>
    }

    if (getAllUsersRequestStatus==='completed'&&loadedUsers){
        content = <UsersList users={loadedUsers}/>
    }

    return <div className={classes.allUsersPage}>
        <Header name='name'/>
        <form action="" onSubmit={submitHandler}>
            <button type='submit'>TEST</button>
        </form>
        {content}
    </div>
}