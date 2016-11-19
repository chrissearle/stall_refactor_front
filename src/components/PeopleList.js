import React from 'react'
import {connect} from 'react-redux'
import {fetchPeople} from '../action_creators/people'
import {Navigation} from './Navigation'
import * as types from './types'
import {Person} from './Person'

class ViewPeopleList extends React.Component {
    render() {
        return <div className="list">
            <h1 className="title">Folk</h1>

            <Navigation/>

            <div className="objectList">
                {this.props.people.map(person =>
                    <Person key={`Person:${person.ID}`} person={person}/>
                )}
            </div>
        </div>
    }
}

ViewPeopleList.propTypes = {
    people: types.people,
    updatePeople: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        people: state.people.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatePeople: function () {
            fetchPeople()(dispatch)
        }
    }
}

export const PeopleList = connect(mapStateToProps, mapDispatchToProps)(ViewPeopleList)
