import classes from "./AuthForm.module.scss";
import {useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useRef, useState} from "react";
import useHttp from "../hooks/use-http";
import {addNewUser, getAllUsers} from "../lib/api";
import AuthContext from "../store/auth-context";
import {UserType} from "../config/types";

export const AuthForm = () => {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const userNameInputRef = useRef<HTMLInputElement>(null)
    const userSurnameInputRef = useRef<HTMLInputElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)
    const organizationCodeInputRef = useRef<HTMLInputElement>(null)
    const [role, setRole] = useState<string>('')

    const [isLogin, setIsLogin] = useState(false)

    const {
        sendRequest: registerRequest,
        data: registerRequestData,
        status: registerRequestStatus,
        error: registerRequestError,
    } = useHttp(addNewUser)

    const {
        sendRequest: getAllUsersRequest,
        data: loadedUsers,
        status: getAllUsersRequestStatus,
        error: getAllUsersRequestError,
    } = useHttp(getAllUsers)

    useEffect(() => {
        getAllUsersRequest()
    }, [getAllUsersRequest])

    const switchAuthModeHandler = () => {
        setIsLogin(prevState => !prevState)
    }

    const onRoleChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        event.preventDefault()
        setRole(event.target.value)
    }

    const signUpHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (userSurnameInputRef.current
            && userSurnameInputRef.current
            && passwordInputRef.current
            && passwordInputRef.current.value.length >= 8
            && emailInputRef.current
            && role === 'organizer'
            && organizationCodeInputRef.current
            && organizationCodeInputRef.current.value === 'rty88lq14'
        ) {
            registerRequest({
                name: userSurnameInputRef.current.value,
                password: passwordInputRef.current.value,
                surname: userSurnameInputRef.current.value,
                email: emailInputRef.current.value,
                type_of_user: role,
            })
        }
        if (userSurnameInputRef.current
            && userSurnameInputRef.current
            && passwordInputRef.current
            && passwordInputRef.current.value.length >= 8
            && emailInputRef.current
            && role !== 'organizer'
        ) {
            registerRequest({
                name: userSurnameInputRef.current.value,
                password: passwordInputRef.current.value,
                surname: userSurnameInputRef.current.value,
                email: emailInputRef.current.value,
                type_of_user: role
            })
        }

        console.log(role);
    }

    const signInHandler = () => {
        if (loadedUsers) {
            loadedUsers.forEach((user: {
                id: number
                name: string,
                password: string,
                surname: string,
                email: string,
                type_of_user: string,
            }) => {
                if (emailInputRef.current
                    && passwordInputRef.current
                    && userNameInputRef.current
                    && userSurnameInputRef.current
                    && (user.email === emailInputRef.current.value
                        && user.password === passwordInputRef.current.value
                        && user.name === userNameInputRef.current.value
                        && user.surname === userSurnameInputRef.current.value
                    )) {
                    authCtx.login(user.email, user.type_of_user)
                }
            })
        }
    }

    useEffect(() => {
        if (registerRequestStatus === 'completed' && role && emailInputRef.current) {
            authCtx.login(emailInputRef.current.value, role)
        }
    }, [authCtx, registerRequestData, registerRequestStatus, role])

    const signUpForm = <form action="" className={classes.form} onSubmit={signUpHandler}>
        <label htmlFor="name">??????</label>
        <input type="text" placeholder='?????????????? ???????? ??????' ref={userNameInputRef}/>
        <label htmlFor="surname">??????????????</label>
        <input type="text" placeholder='?????????????? ???????? ??????????????' ref={userSurnameInputRef}/>
        <label htmlFor="password">E-mail</label>
        <input type="e-mail" placeholder='?????????????? ?????? E-mail' ref={emailInputRef}/>
        <label htmlFor="e-mail">????????????</label>
        <input type="password" placeholder='?????????????? ?????? ????????????' ref={passwordInputRef}/>
        <div className={classes.rolesRadio}>
            <p>?????? ???? ???????????? ?????????</p>
            <div>
                <input
                    type='radio'
                    value='default_user'
                    id='choice1'
                    name='role'
                    checked={role === 'default_user'}
                    onChange={onRoleChange}
                />
                <label htmlFor="choice1">??????????????</label>
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
                <label htmlFor="choice2">??????????????????????????</label>
            </div>
            <div>
                <input
                    type='radio'
                    value='organizer'
                    id='choice3'
                    name='role'
                    checked={role === 'organizer'}
                    onChange={onRoleChange}
                />
                <label htmlFor="choice3">??????????????????????</label>
            </div>
        </div>
        {role === 'organizer' && <input
            type="text"
            placeholder='?????????????? ?????? ??????????????????????'
            ref={organizationCodeInputRef}
        />}
        <div>
            <button type='submit'>????????????????????????????????????</button>
        </div>
    </form>

    const signInForm = <form action="submit" className={classes.form} onSubmit={signInHandler}>
        <label htmlFor="name">??????</label>
        <input type="text" placeholder='?????????????? ???????? ??????' ref={userNameInputRef}/>
        <label htmlFor="surname">??????????????</label>
        <input type="text" placeholder='?????????????? ???????? ??????????????' ref={userSurnameInputRef}/>
        <label htmlFor="e-mail">E-mail</label>
        <input type="e-mail" placeholder='?????????????? ?????? E-mail' ref={emailInputRef}/>
        <label htmlFor="password">????????????</label>
        <input type="password" placeholder='?????????????? ?????? ????????????' ref={passwordInputRef}/>
        <div>
            <button type='submit'>??????????</button>
        </div>
    </form>

    return <div>
        {isLogin ? signInForm : signUpForm}
        {!isLogin
            ? <span>?????? ???????? ??????????????? <button onClick={switchAuthModeHandler}>??????????</button></span>
            : <button onClick={switchAuthModeHandler}>?????????????????? ?? ??????????????????????</button>}
    </div>
}