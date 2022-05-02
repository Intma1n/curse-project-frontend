import classes from "./AllUsersPage.module.scss";
import {UsersList} from "../../components/Users/UsersList/UsersList";
import {Header} from "../../components/Header/Header";

export const AllUsersPage = () => {
    return <div className={classes.allUsersPage}>
        <Header name='name'/>
        <UsersList/>
    </div>
}