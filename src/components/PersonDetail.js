import React from 'react'
import {connect} from 'react-redux'
import {Navigation} from './Navigation'
import * as types from './types'
import {formatTlf} from '../formatters'
import {Link} from 'react-router'


class ViewPersonDetail extends React.Component {
    findPerson(id) {
        if (this.props.people && this.props.people.length > 0) {
            return this.props.people.find((person) => person.ID === id)
        }
    }

    findHorsesOwned(person) {
        let horses = []

        if (person) {
            horses = this.props.horses.filter((horse) => horse.ownerID === person.ID)
        }

        return horses
    }

    findHorsesResponsibleFor(person) {
        let horses = []

        if (person) {
            horses = this.props.horses.filter((horse) => horse.responsibleID === person.ID)
        }

        return horses
    }

    renderHorses(horses, title) {
        if (horses && horses.length > 0) {
            return <div className="object">
                <h2>{ title }</h2>

                {horses.map(horse =>
                    <p key={`Horse:${horse.ID}`}>
                        <Link to={`/horse/${horse.ID}`}>
                            { horse.name }
                        </Link>
                    </p>
                )}
            </div>
        }
    }

    renderPerson(person) {
        if (person) {
            return <div>
                <h1 className="title">{ person.name }</h1>

                <Navigation/>

                <div className="objectList">
                    <div className="object">
                        <h2>Adresse</h2>

                        <p></p>
                    </div>
                    <div className="object">
                        <h2>Kontakt</h2>

                        {this.renderTlf(person)}
                        {this.renderEmail(person)}
                    </div>
                </div>

                <div className="objectList">
                    { this.renderHorses(this.findHorsesOwned(person), 'Eier av')}
                    { this.renderHorses(this.findHorsesResponsibleFor(person), 'Ansvarlig for')}
                </div>
            </div>
        }
    }

    renderEmail(person) {
        if (person.email) {
            return <p><a href={ `mailto:${person.email}` }>{ person.email }</a></p>
        }
    }

    renderTlf(person) {
        if (person.mobile) {
            return <p>{ formatTlf(person.mobile) }</p>
        }
    }

    render() {
        let person = this.findPerson(parseInt(this.props.params.id))

        return <div className="detail">
            {this.renderPerson(person)}
        </div>
    }
}

ViewPersonDetail.propTypes = {
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

export const PersonDetail = connect(mapStateToProps, mapDispatchToProps)(ViewPersonDetail)
