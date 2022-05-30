import classes from './Header.module.scss'
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../store/auth-context";

export const Header = (props: { name: string }) => {
    const authCtx = useContext(AuthContext)

    return <header className={classes.header}>
        <p onClick={authCtx.logout}>Выйти</p>
        <Link to='/reconstructions'>Главная</Link>
        {(localStorage.getItem('username') === 'organizer' || localStorage.getItem('username') === 'reenactor') && <div className={classes.organizerInfo}>
            <Link to='/equipment'>Оборудование</Link>
        </div>}
        {localStorage.getItem('username') === 'organizer' && <div className={classes.organizerInfo}>
            <Link to='/users'>Пользователи</Link>
        </div>}
    </header>
}