import classes from "./ReconstructionsItem.module.scss";
import {ReconstructionType, UserType} from "../../config/types";
import useHttp from "../../hooks/use-http";
import {getAllUsers, registerOnReconstruction} from "../../lib/api";
import {useEffect} from "react";

export const ReconstructionsItem = (props: { reconstruction: (number | string)[] }) => {
    const {
        sendRequest: getAllUsersRequest,
        data: loadedUsers,
        status: getAllUsersRequestStatus,
        error: getAllUsersRequestError,
    } = useHttp(getAllUsers)

    const {
        sendRequest: registerOnReconstructionRequest,
        data: registerOnReconstructionData,
        status: registerOnReconstructionRequestStatus,
        error: registerOnReconstructionRequestError,
    } = useHttp(registerOnReconstruction)

    useEffect(() => {
        getAllUsersRequest()
    }, [getAllUsersRequest])

    const registerOnReconstructionHandler = () => {
        if (getAllUsersRequestStatus === 'completed' && loadedUsers) {
            let currentUser = loadedUsers.filter((user: UserType) => user.email === localStorage.getItem('token'))
            console.log(currentUser);
            registerOnReconstructionRequest({
                idUser: currentUser[0].id,
                idRec: props.reconstruction[0],
                time: new Date()
            })
        }
    }

    const reconstructionDate = new Date(props.reconstruction[5])
    console.log(reconstructionDate.toISOString())
    return <div className={classes.reconstructionItem}>
        <div className={classes.reconstructionInfo}>
            <span>ИН реконструкции:<p>{props.reconstruction[0]}</p></span>
            <span>Место проведения:<p>{props.reconstruction[2]}</p></span>
            <span>Описание: <p>{props.reconstruction[1]}</p></span>
            <span>Цена за участие: <p>{props.reconstruction[3]}</p></span>
            <p>{props.reconstruction[4]}</p>
            <span>Дата проведения: <p>{reconstructionDate.toDateString()}</p></span>
        </div>
        <div className={classes.registerOnReconstruction}>
            <button onClick={registerOnReconstructionHandler}>Зарегистрироваться</button>
        </div>
    </div>
}