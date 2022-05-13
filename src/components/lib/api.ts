import {EquipmentType, RegisterOnReconstructionType, StatementType, UserType} from "../config/types";

const HISTORICAL_RECONSTRUCTIONS_DOMAIN = 'http://127.0.0.1:5000'

export async function getAllUsers() {
    const response = await fetch(`${HISTORICAL_RECONSTRUCTIONS_DOMAIN}/users`,
        {
            method: 'GET',
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
            body: JSON.stringify({
                name: newUserInfo.name,
                password: newUserInfo.password,
                surname: newUserInfo.surname,
                email: newUserInfo.email,
                type_: newUserInfo.type,
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
            body: JSON.stringify({
                id_rec: statementInfo.idRec,
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

