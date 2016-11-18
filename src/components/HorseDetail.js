import React from 'react'
import {connect} from 'react-redux'
import {Navigation} from './Navigation'
import * as types from './types'

class ViewHorseDetail extends React.Component {
    findHorse(id) {
        if (this.props.horses && this.props.horses.length > 0) {
            return this.props.horses.find((horse) => horse.ID === id)
        }
    }

    renderHorse(horse) {
        if (horse) {
            return <div>
                <h1 className="title">{ horse.name }</h1>

                <Navigation/>
            </div>
        }
    }

    render() {
        let horse = this.findHorse(parseInt(this.props.params.id))

        console.log(horse)
        return <div className="detail">
            {this.renderHorse(horse)}
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
