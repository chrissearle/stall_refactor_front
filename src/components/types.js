import React from 'react'

export const person = React.PropTypes.shape({
    ID: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    mobile: React.PropTypes.number.isRequired,
    role: React.PropTypes.string,
    email: React.PropTypes.string
}).isRequired

export const people = React.PropTypes.arrayOf(person).isRequired

export const horse = React.PropTypes.shape({
    ID: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    sex: React.PropTypes.string.isRequired,
    born: React.PropTypes.number,
    race: React.PropTypes.string.isRequired,
    ownerID: React.PropTypes.number.isRequired,
    responsibleID: React.PropTypes.number.isRequired,
    veterinaryID: React.PropTypes.number.isRequired,
    farrierID: React.PropTypes.number.isRequired
}).isRequired

export const horses = React.PropTypes.arrayOf(horse).isRequired
