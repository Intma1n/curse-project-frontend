import React, {useEffect, useRef, useState} from "react";
import useHttp from "../hooks/use-http";
import {addNewEquipment, addNewReconstruction} from "../lib/api";
import classes from "../AddReconstructionForm/AddReconstructionForm.module.scss";

export const AddEquipmentForm = () => {
    const nameInputRef = useRef<HTMLInputElement>(null)
    const accessTypeInputRef = useRef<HTMLInputElement>(null)
    const isAvailableInputRef = useRef<HTMLInputElement>(null)
    const typeEquipInputRef = useRef<HTMLInputElement>(null)

    const [isAvailable, setIsAvailable] = useState<string>('')

    const [hasBeenAddedSuccessfully, setHasBeenAddedSuccessfully] = useState(false)

    const {
        sendRequest: addNewEquipmentRequest,
        data: addNewEquipmentRequestData,
        status: addNewEquipmentRequestStatus,
        error: addNewEquipmentRequestError,
    } = useHttp(addNewEquipment)

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (nameInputRef.current
            && typeEquipInputRef.current) {
            console.log(nameInputRef.current.value,
                isAvailable,
                typeEquipInputRef.current.value)
            addNewEquipmentRequest({
                name: nameInputRef.current.value,
                accessType: 'reenactor',
                isAvailable: Boolean(isAvailable),
                typeEquip: typeEquipInputRef.current.value,
            })
        }
    }

    const onIsAvailableChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        event.preventDefault()
        setIsAvailable(event.target.value)
    }

    useEffect(() => {
        if (addNewEquipmentRequestStatus === 'completed') {
            setHasBeenAddedSuccessfully(true)
        }
    }, [addNewEquipmentRequestStatus])

    return <div className={classes.addNewReconstructionForm}>
        <form action="" className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="name">Название</label>
            <input placeholder='Введите название оборудования'
                   ref={nameInputRef}/>
            <label htmlFor="name">Название (common/special)</label>
            <input placeholder='Введите тип оборудования'
                   ref={typeEquipInputRef}/>
            <div className={classes.rolesRadio}>
                <p>Есть в наличии?</p>
                <div>
                    <input
                        type='radio'
                        value='true'
                        id='choice1'
                        name='isAvailable'
                        checked={isAvailable === 'true'}
                        onChange={onIsAvailableChange}
                    />
                    <label htmlFor="choice1">Да</label>
                </div>

                <div>
                    <input
                        type='radio'
                        value=''
                        id='choice2'
                        name='isAvailable'
                        checked={isAvailable === ''}
                        onChange={onIsAvailableChange}
                    />
                    <label htmlFor="choice2">Скоро будет</label>
                </div>
            </div>
            <button type='submit'>Добавить оборудование</button>
        </form>
        {hasBeenAddedSuccessfully && <p>Оборудование успешно добавлено!</p>}
    </div>
}