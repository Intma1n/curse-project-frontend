import classes from "./AllReconstructionsPage.module.scss";
import {ReconstructionsList} from "../../components/Reconstructions/ReconstructionsList/ReconstructionsList";

export const AllReconstructionsPage = () => {
    return <div className={classes.allReconstructions}>
        <ReconstructionsList/>
    </div>
}