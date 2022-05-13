import classes from "./EquipmentPage.module.scss";
import {EquipmentList} from "../../components/Equipment/EquipmentList/EquipmentList";
import {Header} from "../../components/Header/Header";
import useHttp from "../../components/hooks/use-http";
import {getAllEquipment} from "../../components/lib/api";
import {useEffect} from "react";

export const EquipmentPage = () => {

    let content = <div></div>

    const {
        sendRequest: getAllEquipmentRequest,
        data: loadedEquipment,
        status: getAllEquipmentRequestStatus,
        error: getAllEquipmentRequestError
    } = useHttp(getAllEquipment)

    useEffect(() => {
        getAllEquipmentRequest()
    }, [getAllEquipmentRequest])

    if (getAllEquipmentRequestStatus === 'pending') {
        content = <p>Loading...</p>
    }
    if (getAllEquipmentRequestStatus === 'completed' && loadedEquipment) {
        content = <EquipmentList
            loadedEquipment={loadedEquipment}
        />
    }
    return <div className={classes.equipmentPage}>
        <Header name='name'/>
        {content}
    </div>
}