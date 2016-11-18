import React from 'react'
import {Link} from 'react-router'

export class Navigation extends React.Component {
    render() {
        return <div className="navigation">
            <Link to="/horses" activeClassName="active">Hestene</Link>
            <Link to="/people" activeClassName="active">Folk</Link>
            <Link to="/feedTypes" activeClassName="active">Fôr</Link>
        </div>
    }
}
