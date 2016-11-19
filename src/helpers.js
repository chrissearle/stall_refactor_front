function findModel(list, id) {
    if (list && list.length > 0) {
        return list.find((item) => item.ID === parseInt(id))
    }

}

function findList(list, id, field) {
    if (list && list.length > 0) {
        return list.filter((item) => item[field] === parseInt(id))
    }
}

export function findHorse(horses, id) {
    return findModel(horses, id)
}

export function findPerson(people, id) {
    return findModel(people, id)
}

export function findOwner(people, horse) {
    return findPerson(people, horse.ownerID)
}

export function findResponsible(people, horse) {
    return findPerson(people, horse.responsibleID)
}

export function findVeterinary(people, horse) {
    return findPerson(people, horse.veterinaryID)
}

export function findFarrier(people, horse) {
    return findPerson(people, horse.farrierID)
}

export function findHorsesOwned(horses, person) {
    return findList(horses, person.ID, 'ownerID')
}

export function findHorsesResponsible(horses, person) {
    return findList(horses, person.ID, 'responsibleID')
}

export function findHorsesVeterinary(horses, person) {
    return findList(horses, person.ID, 'veterinaryID')
}

export function findHorsesFarrier(horses, person) {
    return findList(horses, person.ID, 'farrierID')
}
