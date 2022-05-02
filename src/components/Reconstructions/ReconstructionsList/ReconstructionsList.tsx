import classes from "./ReconstructionsList.module.scss";
import {ReconstructionsItem} from "../ReconstructionsItem/ReconstructionsItem";
import {dummyReconstructions} from "../../dummyData/dummyReconstructions";
import {ReconstructionType} from "../../config/types";
import {Fragment} from "react";
import {Header} from "../../Header/Header";

export const ReconstructionsList = () => {
    return <Fragment>
        <Header name='name'/>
        <div className={classes.reconstructionsList}>
        {dummyReconstructions.map((reconstruction: (number|string)[]) => <ReconstructionsItem
            key={reconstruction[0]}
            reconstruction={reconstruction}
            />
        )}
    </div>
    </Fragment>
}