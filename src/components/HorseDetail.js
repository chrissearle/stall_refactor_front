import React from 'react'
import {connect} from 'react-redux'
import {Navigation} from './Navigation'
import * as types from './types'
import {findHorse, findOwner, findResponsible, findVeterinary, findFarrier} from '../helpers'
import {Person} from './Person'

class HorseNotes extends React.Component {
    render() {
        return <div className="objectWide">

            <div className="object">
                <h2>Notes</h2>

                <dl>
                    {this.props.notes && this.props.notes.map(note =>
                        [
                            <dt>{ note.timestamp }</dt>,
                            <dd> {note.text }</dd>
                        ]
                    )}
                </dl>
            </div>
        </div>
    }
}

HorseNotes.propTypes = {
    notes: types.notes
}

class ViewHorseDetail extends React.Component {
    renderPerson(person, title) {
        if (person) {
            return <div className="object">
                <h2>{ title }</h2>
            </div>
        }
    }

    renderHorse(horse) {
        if (horse) {
            return <div>
                <h1 className="title">{ horse.name }</h1>

                <Navigation/>

                <div className="objectList">
                    <div className="object">
                        <h2>Kjønn</h2>

                        <p>{ horse.sex }</p>
                    </div>

                    <div className="object">
                        <h2>Født</h2>

                        <p>{ horse.born }</p>
                    </div>

                    <div className="object">
                        <h2>Rase</h2>

                        <p>{ horse.race }</p>
                    </div>
                </div>

                <div className="separator"/>

                <div className="objectList">
                    <Person person={findOwner(this.props.people, horse)} title="Eier"/>
                    {
                        (horse.ownerID !== horse.responsibleID) &&
                        <Person person={findResponsible(this.props.people, horse)} title="Ansvarlig"/>
                    }
                    <Person person={findVeterinary(this.props.people, horse)} title="Veterinær"/>
                    <Person person={findFarrier(this.props.people, horse)} title="Hovslager"/>
                </div>

                <div className="separator"/>
                <div className="separator"/>

                <HorseNotes notes={horse.notes}/>
            </div>
        }
    }

    render() {
        return <div className=" detail">
            {this.renderHorse(findHorse(this.props.horses, this.props.params.id))}
        </div>
    }
}

ViewHorseDetail.propTypes = {
    horses: types.horses,
    people: types.people
}


function mapStateToProps(state) {
    return {
        horses: state.horses.horses,
        people: state.people.people
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const HorseDetail = connect(mapStateToProps, mapDispatchToProps)(ViewHorseDetail)
