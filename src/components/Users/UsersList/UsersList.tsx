import {dummyUsers} from "../../dummyData/dummyUsers";
import {UsersItem} from "../UsersItem/UsersItem";
import classes from "./UsersList.module.scss";
import {UserType} from "../../config/types";

export const UsersList = (props:{users:UserType[]}) => {
    return <div className={classes.usersList}>
        {props.users.map((user: UserType) => <UsersItem
                key={user.id}
                name={user.name}
                surname={user.surname}
                email={user.email}
                type={user.type}
                id={user.id}
                password={user.password}
            />
        )}
    </div>
}