import classes from "./UsersItem.module.scss";

export const UsersItem = (props: { user: (number | string)[] }) => {
    return <div className={classes.usersItem}>
        <div className={classes.usersInfo}>
            <span>Имя<p>{props.user[1]}</p></span>
            <span>Фамилия<p>{props.user[3]}</p></span>
            <span>Почта<p>{props.user[4]}</p></span>
            <span>Роль<p>{props.user[5]}</p></span>
        </div>
    </div>
}