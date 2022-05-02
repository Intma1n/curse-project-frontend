import classes from "./ReconstructionsItem.module.scss";
import {ReconstructionType} from "../../config/types";

export const ReconstructionsItem = (props: { reconstruction: (number | string)[] }) => {
    const reconstructionDate = new Date(props.reconstruction[5])
    console.log(reconstructionDate.toISOString())
    return <div className={classes.reconstructionItem}>
        <div className={classes.reconstructionInfo}>
            <span>Место проведения:<p>{props.reconstruction[2]}</p></span>
            <span>Описание: <p>{props.reconstruction[1]}</p></span>
            <span>Цена за участие: <p>{props.reconstruction[3]}</p></span>
            <p>{props.reconstruction[4]}</p>
            <span>Дата проведения: <p>{reconstructionDate.toDateString()}</p></span>
        </div>
        <div className={classes.registerOnReconstruction}>
            <button>Зарегистрироваться</button>
        </div>
    </div>
}