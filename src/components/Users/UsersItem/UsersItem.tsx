import classes from "./UsersItem.module.scss";
import {UserType} from "../../config/types";

export const UsersItem = (props: UserType) => {
    return <div className={classes.usersItem}>
        <div className={classes.usersInfo}>
            <span>Имя<p>{props.name}</p></span>
            <span>Фамилия<p>{props.surname}</p></span>
            <span>Почта<p>{props.email}</p></span>
            <span>Роль<p>{props.type_of_user}</p></span>
        </div>
    </div>
}