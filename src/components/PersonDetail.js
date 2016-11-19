import React from 'react'
import {connect} from 'react-redux'
import {Navigation} from './Navigation'
import * as types from './types'
import {formatTlf} from '../formatters'
import {Link} from 'react-router'
import {findPerson, findHorsesOwned, findHorsesResponsible} from '../helpers'

class ViewPersonDetail extends React.Component {
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
                    { this.renderHorses(findHorsesOwned(this.props.horses, person), 'Eier av')}
                    { this.renderHorses(findHorsesResponsible(this.props.horses, person), 'Ansvarlig for')}
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
        const person = findPerson(this.props.people, this.props.params.id)

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
