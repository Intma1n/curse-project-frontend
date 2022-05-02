import classes from "./AuthForm.module.scss";

export const AuthForm = () => {
    return <form action="" className={classes.form}>
        <label htmlFor="name">Имя</label>
        <input type="text" placeholder='Введите ваше имя'/>
        <label htmlFor="surname">Фамилия</label>
        <input type="text" placeholder='Введите вашу фамилию'/>
        <label htmlFor="password">Пароль</label>
        <input type="password" placeholder='Введите ваш пароль'/>
        <div className={classes.rolesRadio}>
            <p>Кем вы хотите быть?</p>
            <div>
                <input type='radio' value='default_user' id='choice1' name='role'/>
                <label htmlFor="choice1">Зритель</label>
            </div>

            <div>
                <input type='radio' value='reenactor' id='choice2' name='role'/>
                <label htmlFor="choice2">Реконструктор</label>
            </div>
            <div>
                <input type='radio' value='organizer' id='choice3' name='role'/>
                <label htmlFor="choice3">Организатор</label>
            </div>
        </div>
        <div>
            <button type='submit'>Зарегестрироваться</button>
        </div>
    </form>
}