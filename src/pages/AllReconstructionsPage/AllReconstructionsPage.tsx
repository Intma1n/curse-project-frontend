import classes from "./AllReconstructionsPage.module.scss";
import {ReconstructionsList} from "../../components/Reconstructions/ReconstructionsList/ReconstructionsList";
import useHttp from "../../components/hooks/use-http";
import {getAllReconstructions} from "../../components/lib/api";
import {useEffect} from "react";

export const AllReconstructionsPage = () => {
    const {
        sendRequest: getAllReconstructionsRequest,
        data: loadedReconstructions,
        status: getAllReconstructionsRequestStatus,
        error: getAllReconstructionsRequestError,
    } = useHttp(getAllReconstructions)

    useEffect(() => {
        getAllReconstructionsRequest()
    }, [getAllReconstructionsRequest])

    let content = <div></div>
    if (getAllReconstructionsRequestStatus === 'pending') {
        content = <p>Loading...</p>
    }
    if (getAllReconstructionsRequestStatus === 'completed' && loadedReconstructions) {
        content = <ReconstructionsList
            reconstructions={loadedReconstructions}
        />
    }
    if (getAllReconstructionsRequestStatus === 'completed' && !loadedReconstructions) {
        content = <p>An error occurred while loading reconstructions</p>
    }
    return <div className={classes.allReconstructions}>
        {content}
    </div>
}