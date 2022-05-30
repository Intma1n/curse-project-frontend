import classes from "./EquipmentItem.module.scss";
import {EquipmentType} from "../../config/types";
import {AddEquipmentForm} from "../../AddEquipmentForm/AddEquipmentForm";
import useHttp from "../../hooks/use-http";
import {addEquipmentToReconstruction, addNewReconstruction, deleteEquipment, getAllEquipment} from "../../lib/api";
import React, {useRef} from "react";

export const EquipmentItem = (props: EquipmentType) => {
    console.log(props);
    const idRecInputRef = useRef<HTMLInputElement>(null)
    const textInputRef = useRef<HTMLInputElement>(null)

    const {
        sendRequest: deleteEquipmentRequest,
        data: loadedData,
        status: deleteEquipmentRequestStatus,
        error: deleteEquipmentRequestError
    } = useHttp(deleteEquipment)

    const {
        sendRequest: addEquipmentToReconstructionRequest,
        data: addEquipmentToReconstructionRequestData,
        status: addEquipmentToReconstructionRequestStatus,
        error: addEquipmentToReconstructionRequestError,
    } = useHttp(addEquipmentToReconstruction)

    const deleteEquipmentHandler = () => {
        deleteEquipment(props.id)
    }

    const addEquipmentToReconstructionHandler = (event:React.SyntheticEvent) => {
        event.preventDefault()
        if (idRecInputRef.current && textInputRef.current) {
            const idRec = +idRecInputRef.current.value
            addEquipmentToReconstructionRequest({
                idRec: idRec,
                idEquip: props.id,
                idOrg: 1,
                text: textInputRef.current.value,
            })
        }
    }

    return <div className={classes.equipmentItem}>
        <div className={classes.equipmentInfo}>
            <span>Название<p>{props.name}</p></span>
            <span>Есть в наличии<p>{props.typeEquip ? 'да' : 'нет'}</p></span>
        </div>
        {/*{localStorage.getItem('username') === 'organizer' && <button onClick={deleteEquipmentHandler}>Удалить оборудование</button>}*/}
        {localStorage.getItem('username') === 'organizer' &&props.typeEquip&& <form action="" onSubmit={addEquipmentToReconstructionHandler}>
            <label htmlFor="idRec">ИН реконструкции</label>
            <input type="number"
                   placeholder='Введите ИН реконструкции'
                   ref={idRecInputRef}/>
            <label htmlFor="idRec">Примечание</label>
            <input type="text"
                   placeholder='Введите текст примечания'
                   ref={textInputRef}/>
            <button type='submit'>Назначить на реконструкцию</button>
        </form>}
    </div>
}