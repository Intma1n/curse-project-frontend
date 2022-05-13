import classes from "./EquipmentItem.module.scss";
import {EquipmentType} from "../../config/types";

export const EquipmentItem = (props: EquipmentType) => {
    return <div className={classes.equipmentItem}>
        <div className={classes.equipmentInfo}>
            <span>Название<p>{props.name}</p></span>
            <span>Кому доступно<p>{props.accessType}</p></span>
            <span>Есть в наличии<p>{props.isAvailable ? 'да' : 'нет'}</p></span>
        </div>
    </div>
}