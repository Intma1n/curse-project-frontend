import classes from "./ReconstructionsList.module.scss";
import {ReconstructionsItem} from "../ReconstructionsItem/ReconstructionsItem";
import {dummyReconstructions} from "../../dummyData/dummyReconstructions";
import {ReconstructionType} from "../../config/types";
import {Fragment} from "react";
import {Header} from "../../Header/Header";

export const ReconstructionsList = (props:{reconstructions: ((number|string)[])[]}) => {
    return <Fragment>
        <Header name='name'/>
        <div className={classes.reconstructionsList}>
        {props.reconstructions.map((reconstruction: (number|string)[]) => <ReconstructionsItem
            key={reconstruction[0]}
            reconstruction={reconstruction}
            />
        )}
    </div>
    </Fragment>
}