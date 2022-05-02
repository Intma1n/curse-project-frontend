import classes from "./AuthPage.module.scss";
import {AuthForm} from "../../components/AuthForm/AuthForm";

export const AuthPage = () => {
    return <div className={classes.authPage}>
        <h1>Прежде чем продолжить, пожалуйста, зарегистрируйтесь</h1>
        <AuthForm/>
    </div>
}