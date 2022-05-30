import {
    EquipmentType,
    ReconstructionType,
    RegisterOnReconstructionType,
    StatementType,
    UserType
} from "../config/types";

const HISTORICAL_RECONSTRUCTIONS_DOMAIN = 'http://127.0.0.1:5000'

export async function getAllUsers() {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/users`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get users')
    }

    return data
}

export async function getAllReconstructions() {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/reconstructions`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get reconstructions')
    }

    return data
}

export async function getAllEquipment() {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/equipment`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get equipment')
    }

    return data
}

export async function addNewUser(newUserInfo: UserType) {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/users`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newUserInfo.name,
                password: newUserInfo.password,
                surname: newUserInfo.surname,
                email: newUserInfo.email,
                type_: newUserInfo.type_of_user,
            })
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get equipment')
    }

    return data
}

export async function registerOnReconstruction(regInfo: RegisterOnReconstructionType) {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/register_for_reconstruction`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_user: regInfo.idUser,
                id_rec: regInfo.idRec,
                time: regInfo.time,
            })
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get equipment')
    }

    return data
}

export async function deleteReconstruction(idRec: number) {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/reconstruction/${idRec}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get reconstructions')
    }

    return data
}

export async function deleteEquipment(idEquip: number) {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/equipment/${idEquip}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get reconstructions')
    }

    return data
}

export async function addNewEquipment(newEquipmentInfo: EquipmentType) {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/equipment`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newEquipmentInfo.name,
                access_type: newEquipmentInfo.accessType,
                is_available: newEquipmentInfo.isAvailable,
                type_equip: newEquipmentInfo.typeEquip,
            })
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get equipment')
    }

    return data
}

export async function addEquipmentToReconstruction(statementInfo: StatementType) {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/statement`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_req: statementInfo.idRec,
                id_equip: statementInfo.idEquip,
                id_org: statementInfo.idOrg,
                text_: statementInfo.text,
            })
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get equipment')
    }

    return data
}

export async function addNewReconstruction(newReconstructionInfo: ReconstructionType) {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/reconstructions/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: newReconstructionInfo.description,
                place: newReconstructionInfo.place,
                payment: newReconstructionInfo.payment,
                id_org: newReconstructionInfo.idOrg,
                time: newReconstructionInfo.date,
            })
        })

    const data = await response.json()

    if (!response.ok) {
        throw new Error('Could not get equipment')
    }

    return data
}


