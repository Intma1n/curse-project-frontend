export type ReconstructionType = {
    id: number,
    description: string,
    place: string,
    payment: number,
    idOrg: number,
    date: string,
}

export type UserType = {
    id:number
    name: string,
    password: string,
    surname: string,
    email: string,
    type_of_user: string,
}

export type RegisterOnReconstructionType = {
    idUser: number,
    idRec: number,
    time: string,
}

export type EquipmentType = {
    id:number,
    name: string,
    accessType: string,
    isAvailable: string,
    typeEquip: string,
}

export type StatementType = {
    idRec: number,
    idEquip: number,
    idOrg: number,
    text: string,
}