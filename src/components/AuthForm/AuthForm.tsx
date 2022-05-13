import classes from "./AuthForm.module.scss";
import {useNavigate} from "react-router-dom";
import React, {useContext, useRef, useState} from "react";
import useHttp from "../hooks/use-http";
import {addNewUser} from "../lib/api";
import AuthContext from "../store/auth-context";

export const AuthForm = () => {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const userNameInputRef = useRef<HTMLInputElement>(null)
    const userSurnameInputRef = useRef<HTMLInputElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)
    const [role, setRole] = useState<string>('')

    const [isLogin, setIsLogin] = useState(false)

    const {
        sendRequest: registerRequest,
        data: registerRequestData,
        status: registerRequestStatus,
        error: registerRequestError,
    } = useHttp(addNewUser)

    const switchAuthModeHandler = () => {
        setIsLogin(prevState => !prevState)
    }

    const onRoleChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        event.preventDefault()
        setRole(event.target.value)
    }

    const signInHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        // if (userSurnameInputRef.current
        //     && userSurnameInputRef.current
        //     && passwordInputRef.current
        //     && emailInputRef.current
        //     && typeInputRef.current) {
        //     if(isLogin){
        //
        //     }
        console.log(role);
    }

    const signUpForm = <form action="" className={classes.form} onSubmit={signInHandler}>
        <label htmlFor="name">Имя</label>
        <input type="text" placeholder='Введите ваше имя' ref={userNameInputRef}/>
        <label htmlFor="surname">Фамилия</label>
        <input type="text" placeholder='Введите вашу фамилию' ref={userSurnameInputRef}/>
        <label htmlFor="password">E-mail</label>
        <input type="e-mail" placeholder='Введите ваш E-mail' ref={emailInputRef}/>
        <label htmlFor="e-mail">Пароль</label>
        <input type="password" placeholder='Введите ваш пароль' ref={passwordInputRef}/>
        <div className={classes.rolesRadio}>
            <p>Кем вы хотите быть?</p>
            <div>
                <input
                    type='radio'
                    value='default_user'
                    id='choice1'
                    name='role'
                    checked={role === 'default_user'}
                    onChange={onRoleChange}
                />
                <label htmlFor="choice1">Зритель</label>
            </div>

            <div>
                <input
                    type='radio'
                    value='reenactor'
                    id='choice2'
                    name='role'
                    checked={role === 'reenactor'}
                    onChange={onRoleChange}
                />
                <label htmlFor="choice2">Реконструктор</label>
            </div>
            <div>
                <input
                    type='radio'
                    value='organizer'
                    id='choice3'
                    name='role'
                    checked={role==='organizer'}
                    onChange={onRoleChange}
                />
                <label htmlFor="choice3">Организатор</label>
            </div>
        </div>
        <div>
            <button type='submit'>Зарегестрироваться</button>
        </div>
    </form>

    const signInForm = <form action="submit" className={classes.form}>
        <label htmlFor="password">E-mail</label>
        <input type="password" placeholder='Введите ваш E-mail' ref={emailInputRef}/>
        <label htmlFor="password">Пароль</label>
        <input type="password" placeholder='Введите ваш пароль' ref={passwordInputRef}/>
        <div>
            <button type='submit'>Войти</button>
        </div>
    </form>

    return <div>
        {isLogin ? signInForm : signUpForm}
        {!isLogin
            ? <span>Уже есть аккаунт? <button onClick={switchAuthModeHandler}>Войти</button></span>
            : <button onClick={switchAuthModeHandler}>Вернуться к регистрации</button>}
    </div>
}