import {dummyUsers} from "../../dummyData/dummyUsers";
import {UsersItem} from "../UsersItem/UsersItem";
import classes from "./UsersList.module.scss";

export const UsersList = () => {
    return <div className={classes.usersList}>
        {dummyUsers.map((user: (number | string)[]) => <UsersItem
                user={user}
            />
        )}
    </div>
}