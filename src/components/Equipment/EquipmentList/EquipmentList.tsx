import classes from "./EquipmentList.module.scss";
import {dummyEquipment} from "../../dummyData/dummyEquipment";
import {EquipmentItem} from "../EquipmentItem/EquipmentItem";
import {EquipmentType} from "../../config/types";

export const EquipmentList = (props: { loadedEquipment: EquipmentType[] }) => {
    return <div className={classes.equipmentList}>
        {props.loadedEquipment.map((equipment: EquipmentType) => <EquipmentItem
                key={equipment.id}
                id={equipment.id}
                name={equipment.name}
                accessType={equipment.accessType}
                isAvailable={equipment.isAvailable}
                typeEquip={equipment.typeEquip}
            />
        )}
    </div>
}