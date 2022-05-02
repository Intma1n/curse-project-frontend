import classes from './Header.module.scss'
import {Link} from "react-router-dom";

export const Header = (props: { name: string }) => {
    return <header className={classes.header}>
        <Link to='/reconstructions'>Главная</Link>
        <div className={classes.organizerInfo}>
            <Link to='/auth'>Оборудование</Link>
            <Link to='/users'>Пользователи</Link>
        </div>
    </header>
}