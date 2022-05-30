import classes from './AddReconstructionForm.module.scss'
import React, {useEffect, useRef, useState} from "react";
import useHttp from "../hooks/use-http";
import {addNewReconstruction, addNewUser} from "../lib/api";

export const AddReconstructionForm = () => {
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null)
    const timeInputRef = useRef<HTMLInputElement>(null)
    const placeInputRef = useRef<HTMLInputElement>(null)
    const paymentInputRef = useRef<HTMLInputElement>(null)
    const idOrgInputRef = useRef<HTMLInputElement>(null)

    const [hasBeenAddedSuccessfully, setHasBeenAddedSuccessfully] = useState(false)

    const {
        sendRequest: addNewReconstructionRequest,
        data: addNewReconstructionRequestData,
        status: addNewReconstructionRequestStatus,
        error: addNewReconstructionRequestError,
    } = useHttp(addNewReconstruction)

    const submitHandler = (event:React.SyntheticEvent) => {
        event.preventDefault()
        if (descriptionInputRef.current
            && timeInputRef.current
            && placeInputRef.current
            && paymentInputRef.current
            && idOrgInputRef.current) {
            console.log(descriptionInputRef.current.value,
            placeInputRef.current.value,
            paymentInputRef.current.value,
            idOrgInputRef.current.value,
            timeInputRef.current.value,)
            addNewReconstructionRequest({
                description: descriptionInputRef.current.value,
                place: placeInputRef.current.value,
                payment: paymentInputRef.current.value,
                idOrg: idOrgInputRef.current.value,
                date: new Date(timeInputRef.current.value),
            })
        }
    }

    useEffect(() => {
        if (addNewReconstructionRequestStatus === 'completed') {
            setHasBeenAddedSuccessfully(true)
        }
    }, [addNewReconstructionRequestStatus])

    return <div className={classes.addNewReconstructionForm}>
        <form action="" className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="description">Описание</label>
            <textarea placeholder='Введите описание реконструкции'
                      ref={descriptionInputRef}/>
            <label htmlFor="time">Время проведения</label>
            <input type="text"
                   placeholder='Введите время проведения мероприятия'
                   ref={timeInputRef}/>
            <label htmlFor="place">Место проведения</label>
            <input type="text"
                   placeholder='Введите место проведения мероприятия'
                   ref={placeInputRef}/>
            <label htmlFor="payment">Цена за вход</label>
            <input type="number"
                   placeholder='Введите цену за вход'
                   ref={paymentInputRef}/>
            <label htmlFor="idOrg">ИН организации</label>
            <input type="number"
                   placeholder='Введите ИН организации'
                   ref={idOrgInputRef}/>
            <button type='submit'>Добавить реконструкцию</button>
        </form>
        {hasBeenAddedSuccessfully && <p>Реконструкция успешно добавлена!</p>}
    </div>
}