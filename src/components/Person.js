import React from 'react'
import {Link} from 'react-router'
import * as types from './types'
import {formatTlf} from '../formatters'

export class Person extends React.Component {
    renderTitle(person, title) {
        if (title) {
            return <h2>{ title }</h2>
        } else {
            let role = null

            if (this.props.person.role) {
                role = <span>&nbsp;({this.props.person.role})</span>
            }

            return <h2>
                <Link to={`/person/${this.props.person.ID}` }>
                    { person.name }{ role }
                </Link>
            </h2>
        }
    }

    renderName(person, title) {
        if (title) {
            return <h3>
                <Link to={`/person/${this.props.person.ID}` }>
                    { person.name }
                </Link>
            </h3>
        }
    }

    render() {
        let email = null

        if (this.props.person.email) {
            email = <a href={ `mailto:${this.props.person.email}`}>{this.props.person.email}</a>
        }

        return <div className="object">
            { this.renderTitle(this.props.person, this.props.title) }
            { this.renderName(this.props.person, this.props.title) }
            <dl>
                <dt>Mob:</dt>
                <dd>{ formatTlf(this.props.person.mobile) }</dd>
                <dt>Email</dt>
                <dd>{ email }</dd>
            </dl>
        </div>
    }
}

Person.propTypes = {
    person: types.person,
    title: React.PropTypes.string
}
