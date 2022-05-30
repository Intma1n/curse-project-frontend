import classes from "./EquipmentList.module.scss";
import {dummyEquipment} from "../../dummyData/dummyEquipment";
import {EquipmentItem} from "../EquipmentItem/EquipmentItem";
import {EquipmentType} from "../../config/types";

export const EquipmentList = (props: {
    loadedEquipment: {
        id: number,
        name: string,
        access_type: string,
        is_available: string,
        type_equip: string,
    } []
}) => {
    return <div className={classes.equipmentList}>
        {props.loadedEquipment.map((equipment: {
                id: number,
                name: string,
                access_type: string,
                is_available: string,
                type_equip: string,
            }) => <EquipmentItem
                key={equipment.id}
                id={equipment.id}
                name={equipment.name}
                accessType={equipment.access_type}
                isAvailable={equipment.is_available}
                typeEquip={equipment.type_equip}
            />
        )}
    </div>
}